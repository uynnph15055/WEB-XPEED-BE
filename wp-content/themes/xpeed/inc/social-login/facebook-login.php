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
        }

        // Get user data
        $response = $fb->get('/me?fields=id,name,email', $accessToken);
        $fb_user = $response->getGraphUser();

        // Process login or user creation
        $email = $fb_user['email'];
        $user = get_user_by('email', $email);

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
