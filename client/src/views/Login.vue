<template>
  <section id="login-hero" class="hero is-small is-info">
        <div class="hero-body">
            <p class="title">
                Login
            </p>
            <form class="box">
                <div class="field">
                    <label class="label">Username</label>
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="username" placeholder="@Matt123" v-model="user">
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
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
            
                <button class="button is-info" @click.prevent="checkLogin">Sign in</button>
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
        users: [
            { username: "@Jfinn1800" },
            { username: "Isabella31"},
            { username: "LukeBizzi12"},
        ]
    }),
    methods: {
        checkLogin() {
            if(this.users.filter(this.users.username))
                Login(this.users.username)
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