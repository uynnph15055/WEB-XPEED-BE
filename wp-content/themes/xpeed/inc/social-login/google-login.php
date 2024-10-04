<?php
// Load Google Client library
require_once get_template_directory() . '/vendor/autoload.php';

function handle_google_login()
{
    try {
        // Initialize Google Client
        $client = new Google_Client();
        $client->setClientId('697902993845-08guf9k8u509h27075c73vcegav0ksmj.apps.googleusercontent.com'); // google client ID
        $client->setClientSecret('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'); // google client secret
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
            var_dump($google_user);
            exit;
            // Process login or user creation
            $email = $google_user->email;
            $user = get_user_by('email', $email);
            dd($email);

            // login or register logic
        }
    } catch (\Exception $e) {
        echo 'Google login returned an error: ' . $e->getMessage();
        exit;
    }
}
