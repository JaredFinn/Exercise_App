<template>
  <section id="login-hero" class="hero is-small is-info">
        <div class="hero-body">
            <p class="title">
                Login
            </p>
            <form class="box">
                <div class="field">
                    <label class="label">Email</label>
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="google@gmail.com">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="********">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
            
                <button class="button is-info">Sign in</button>
                <p class="is-size-5">
                    Dont have an account? Sign Up here.
                </p>
                <router-link to="/signup" class="button is-info">
                    Sign Up
                </router-link>
            </form>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.button {
    margin: 10px;
}
#login-hero {
    margin: 20px;
}
</style>