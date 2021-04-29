<template>
    <div>
        <div id="account">
            <p >Welcome <b>{{ user.firstName }}</b></p>
            <p id="handle">{{ user.handle }}</p>
        </div>
        <div id="logout-button">
            <button  @click="logout()" class="button is-info">Logout</button>
        </div>
    </div>
</template>

<script>
import Session, { Logout } from "../models/Session";

export default {
    data: () => ({
        user: Session.user
    }),
    methods: {
        logout() {
            Logout();
        }
    }
}
</script>

<style>
#account {
    float: left;
    padding-top: 5px;
}
#logout-button {
    float: right;
}
#handle {
    margin-left: 30px;
}

</style>