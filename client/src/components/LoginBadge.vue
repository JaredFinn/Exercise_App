<template>
    <div>

        <div class="buttons" v-if="!Session.user">
            <router-link to="/signup" class="button is-info">
                Sign Up
            </router-link>
            <router-link to="/login" class="button is-light">
                Log in
            </router-link>
        </div>
        <div v-else>
            Welcome {{ Session.user.user }}
            (<a @click="logout">
                logout
            </a>)
        </div>

    </div>
</template>

<script>
import Session, { Login, Logout } from "../models/Session";

export default {
    data() {
        return {
            Session
        }
    },
    methods: {
        login() {
            Login();
        },
        logout() {
            Logout();
        }
    }
}
</script>

<style>

</style>