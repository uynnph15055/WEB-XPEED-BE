<?php
// Load Google Client library
require_once get_template_directory() . '/vendor/autoload.php';

function handle_google_login()
{
    try {
        // Initialize Google Client
        $client = new Google_Client();
        $client->setClientId('697902993845-08guf9k8u509h27075c73vcegav0ksmj.apps.googleusercontent.com'); // Get Google Client ID from environment variable
        $client->setClientSecret('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'); 
        $client->setRedirectUri(home_url('/google-login-callback'));
        $client->addScope('email');
        $client->addScope('profile');

        if (!isset($_GET['code'])) {
            // Redirect to Google's OAuth 2.0 server
            $auth_url = $client->createAuthUrl();
            header('Location: ' . filter_var($auth_url, FILTER_SANITIZE_URL));
            exit;
        } else {
            // Exchange authorization code for access token
            $client->authenticate($_GET['code']);
            $token = $client->getAccessToken();
            $client->setAccessToken($token);

            // Get user info from Google
            $oauth2 = new Google_Service_Oauth2($client);
            $google_user = $oauth2->userinfo->get();
            
            // Get user email
            $email = $google_user->email;
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
                $user_id = wp_create_user($google_user->name, $random_password, $email);

                // Set user first and last name
                wp_update_user([
                    'ID' => $user_id,
                    'first_name' => $google_user->givenName,
                    'last_name' => $google_user->familyName
                ]);

                // Log the new user in
                wp_set_current_user($user_id);
                wp_set_auth_cookie($user_id);
                wp_redirect(home_url()); // Redirect to homepage or dashboard
                exit;
            }
        }
    } catch (\Exception $e) {
        echo 'Google login returned an error: ' . $e->getMessage();
        exit;
    }
}
