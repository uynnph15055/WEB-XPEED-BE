<?php
require_once get_template_directory() . '/vendor/autoload.php';
use Facebook\Facebook;
/**
 * Handles Facebook login and registration.
 *
 * @return void
 * @throws \Facebook\Exceptions\FacebookSDKException
 */
function handle_facebook_login() {
    if (!session_id()) {
        session_start();
    }

    // Retrieve Facebook App credentials from wp-config.php
    $app_id = defined('FACEBOOK_APP_ID') ? FACEBOOK_APP_ID : null;
    $app_secret = defined('FACEBOOK_APP_SECRET') ? FACEBOOK_APP_SECRET : null;

    if (!$app_id || !$app_secret) {
        echo 'Facebook App ID and Secret are not configured.';
        exit;
    }

    // Initialize Facebook SDK
    $fb = new Facebook([
        'app_id' => FACEBOOK_APP_ID, // Từ wp-config.php
        'app_secret' => FACEBOOK_APP_SECRET,
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

            $email = $fb_user['email'];
            $user = get_user_by('email', $email);

            if ($user) {
                // Log in the existing user
                wp_set_current_user($user->ID);
                wp_set_auth_cookie($user->ID);
                wp_redirect(home_url()); // Redirect to homepage or dashboard
                exit;
            } else {
                // Register a new user
                $random_password = wp_generate_password(12, false);
                $user_id = wp_create_user($fb_user['name'], $random_password, $email);

                // Set user first and last name
                wp_update_user([
                    'ID' => $user_id,
                    'first_name' => $fb_user['name'], // Split name if required
                ]);

                // Log in the new user
                wp_set_current_user($user_id);
                wp_set_auth_cookie($user_id);
                wp_redirect(home_url()); // Redirect to homepage or dashboard
                exit;
            }
        }
    } catch (Facebook\Exceptions\FacebookResponseException $e) {
        // Handle Graph API error
        echo 'Graph returned an error: ' . $e->getMessage();
        exit;
    } catch (Facebook\Exceptions\FacebookSDKException $e) {
        // Handle SDK error
        echo 'Facebook SDK returned an error: ' . $e->getMessage();
        exit;
    }
}

// Call the function
handle_facebook_login();
