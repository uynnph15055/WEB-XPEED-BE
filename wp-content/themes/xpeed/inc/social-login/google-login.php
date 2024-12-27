<?php
function handle_google_login()
{
    // Client ID and Client Secret
    $client_id = GOOGLE_CLIENT_ID;
    $client_secret = GOOGLE_CLIENT_SECRET;
    $redirect_uri = home_url('/google-login-callback');

    // Step 1: Get the authorization code
    if (!isset($_GET['code'])) {
        // Redirect to Google's OAuth 2.0 server
        $auth_url = 'https://accounts.google.com/o/oauth2/v2/auth?' . http_build_query([
                'client_id' => $client_id,
                'redirect_uri' => $redirect_uri,
                'response_type' => 'code',
                'scope' => 'email profile',
                'access_type' => 'offline',
                'prompt' => 'consent'
            ]);
        header('Location: ' . filter_var($auth_url, FILTER_SANITIZE_URL));
        exit;
    } else {
        // Step 2: Exchange authorization code for access token
        $code = $_GET['code'];
        $token_url = 'https://oauth2.googleapis.com/token';

        $response = file_get_contents($token_url, false, stream_context_create([
            'http' => [
                'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
                'method' => 'POST',
                'content' => http_build_query([
                    'code' => $code,
                    'client_id' => $client_id,
                    'client_secret' => $client_secret,
                    'redirect_uri' => $redirect_uri,
                    'grant_type' => 'authorization_code',
                ]),
            ]
        ]));

        $token_info = json_decode($response);
        if (isset($token_info->error)) {
            echo 'Error retrieving access token: ' . $token_info->error;
            exit;
        }

        $access_token = $token_info->access_token;

        // Step 3: Get user info from Google
        $user_info_url = 'https://www.googleapis.com/oauth2/v2/userinfo?access_token=' . $access_token;
        $user_info_response = file_get_contents($user_info_url);
        $google_user = json_decode($user_info_response);

        if (isset($google_user->error)) {
            echo 'Error retrieving user info: ' . $google_user->error;
            exit;
        }

        // Get user email
        $email = $google_user->email;
        // Check if user exists
        $user = get_user_by('email', $email);

        if ($user) {
            // Log the user in if they exist
            wp_set_current_user($user->ID);
            wp_set_auth_cookie($user->ID);
            $redirectUrl = !empty($_COOKIE['redirect_after_login']) ? $_COOKIE['redirect_after_login'] : home_url();
            wp_redirect($redirectUrl); // Redirect to homepage or dashboard
            exit;
        } else {
            // If user does not exist, register a new user
            $random_password = wp_generate_password(12, false);
            $user_id = wp_create_user($google_user->name, $random_password, $email);

            // Set user first and last name
            wp_update_user([
                'ID' => $user_id,
                'first_name' => $google_user->given_name,
                'last_name' => $google_user->family_name
            ]);

            // Log the new user in
            wp_set_current_user($user_id);
            wp_set_auth_cookie($user_id);
            $redirectUrl = !empty($_COOKIE['redirect_after_login']) ? $_COOKIE['redirect_after_login'] : home_url();

            wp_redirect($redirectUrl); // Redirect to homepage or dashboard
            exit;
        }
    }
}

// Call the function to handle Google login
handle_google_login();
