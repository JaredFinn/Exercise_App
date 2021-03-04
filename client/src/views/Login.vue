<template>
  <section class="hero is-small is-link">
        <div class="hero-body">
            <h1 id="Login-name">Login</h1>
            <form class="box">
                <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="e.g. alex@example.com">
                </div>
                </div>
            
                <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" placeholder="********">
                </div>
                </div>
            
                <button class="button is-primary">Sign in</button>
                <h3 id="no-account">Dont have an account? Sign Up here.</h3>
                <router-link to="/signup" class="button is-primary">
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

</style>