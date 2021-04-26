<template>
  <section id="login-hero" class="hero is-small is-info">
        <div class="hero-body">
            <p class="title">
                Login
            </p>
            <form class="box" >

                <article class="message is-danger" v-if="loginFail">
                    <div class="message-header">
                        <p>Try Again</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                        Login Failed. Your Username or Password is incorrect. Try Again.
                    </div>
                </article>
                <div v-else>    
                </div>

                <div class="field">
                    <label class="label">Username</label>
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="username" placeholder="@Matt123" v-model="handle">
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="********" v-model="password">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
            
                <button class="button is-info" @click.prevent="login(username, password)" >Log in</button>
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
import { Login } from "../models/Session";

export default {
    data: () => ({
        loginFail: false,
        handle: null,
        password: null
    }),
    methods: {
        login(){
            Login(this.handle, this.password);
        }
    }
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