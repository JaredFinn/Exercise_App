<template>
    <div>

        <div class="buttons" v-if="!Session.user">
            <a class="button is-info">
                <strong>Sign up</strong>
            </a>
            <router-link to="/login" class="navbar-item">
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