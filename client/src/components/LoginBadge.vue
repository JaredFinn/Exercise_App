<template>
    <div>
        <div v-if="!Session.user">
            <router-link to="/signup" class="button is-info">
                Sign Up
            </router-link>
            <router-link to="/login" class="button is-light">
                Log in
            </router-link>
        </div>
        <div v-else>
            <account-info/>
        </div>

    </div>
</template>

<script>
import Session from "../models/Session";
import AccountInfo from './Account-info.vue';

export default {
    data(){
        return {
            Session
        }
    },
    methods: {
        
    },
    components: {
        AccountInfo
    },
}
</script>

<style>
</style>