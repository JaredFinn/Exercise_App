<template>
    <div>

        <div class="buttons" v-if="!Session.currentUser">
            <router-link to="/signup" class="button is-info">
                Sign Up
            </router-link>
            <router-link to="/login" class="button is-light">
                Log in
            </router-link>
        </div>
        <div class="buttons" v-else>
            <p>Welcome <b>{{ Session.currentUserHandle }}</b></p>
            <button @click="logout()" class="button is-info">Logout</button>
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
#logout-button{
    display: inline-block;
}
</style>