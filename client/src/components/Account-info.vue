<template>
        <div>
            <p>Welcome <b>{{ user.firstName }}</b></p>
            <button id="logout-button" @click="logout()" class="button is-info">Logout</button>
        </div>
</template>

<script>
import Session from "../models/Session";

export default {
    data: () => ({
        user: Session.user
    }),
}
</script>

<style>
#logout-button{
    display: inline-block;
}
</style>