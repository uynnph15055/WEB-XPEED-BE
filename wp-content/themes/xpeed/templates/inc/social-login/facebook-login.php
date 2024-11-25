<?php
require_once get_template_directory() . '/vendor/autoload.php';

/**
 * @return void
 * @throws \Facebook\Exceptions\FacebookSDKException
 */
function handle_facebook_login() {
    if (!session_id()) {
        session_start();
    }
    // Initialize Facebook SDK
    $fb = new \Facebook\Facebook([
        'app_id' => '543697601517133', // app ID
        'app_secret' => '24dc974cd6042c44738409c06eaf2f87', // app secret
        'default_graph_version' => 'v12.0',
    ]);

    $helper = $fb->getRedirectLoginHelper();

    try {
        $accessToken = $helper->getAccessToken();
        if (!isset($accessToken)) {
            // Redirect to Facebook login page
            $permissions = ['email']; // Optional permissions
            $loginUrl = $helper->getLoginUrl(site_url('/facebook-login-callback'), $permissions);
            wp_redirect($loginUrl);
            exit;
        } else {
            // Get user data
            $response = $fb->get('/me?fields=id,name,email', $accessToken);
            $fb_user = $response->getGraphUser();
            
            // Get user email
            $email = $fb_user['email'];
            // Check if user exists
            $user = get_user_by('email', $email);

            if ($user) {
                // Log the user in if they exist
                wp_set_current_user($user->ID);
                wp_set_auth_cookie($user->ID);
                wp_redirect(home_url()); // Redirect to homepage or dashboard
                exit;
            } else {
                // If user does not exist, register a new user
                $random_password = wp_generate_password(12, false);
                $user_id = wp_create_user($fb_user['name'], $random_password, $email);

                // Set user first and last name
                wp_update_user([
                    'ID' => $user_id,
                    'first_name' => $fb_user['name'], // Hoặc tách tên và họ nếu cần
                    // 'last_name' => '', // Nếu bạn có last name
                ]);

                // Log the new user in
                wp_set_current_user($user_id);
                wp_set_auth_cookie($user_id);
                wp_redirect(home_url()); // Redirect to homepage or dashboard
                exit;
            }
        }
    } catch (Facebook\Exceptions\FacebookResponseException $e) {
        // Handle error
        echo 'Graph returned an error: ' . $e->getMessage();
        exit;
    } catch (Facebook\Exceptions\FacebookSDKException $e) {
        // Handle SDK error
        echo 'Facebook SDK returned an error: ' . $e->getMessage();
        exit;
    }
}

handle_facebook_login();
