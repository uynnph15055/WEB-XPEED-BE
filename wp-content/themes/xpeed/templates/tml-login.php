<?php

/**
 * Template Name: Login
 * Author: Hieptvh
 */
get_header();

?>
    <h1>
        Login
    </h1>

    <form action="/" method="post">
        <input type="text" name="email"/>
        <br>
        <input type="password" name="password"/>
        <br>
        <button type="submit">Login</button>
        <br>
        <!--    Social login button -->
        <a href="<?php echo home_url('/google-login-callback'); ?>">Login with Google</a>
        <a href="<?php echo home_url('/facebook-login-callback'); ?>">Login with Facebook</a>
    </form>
<?php
get_footer();
?>