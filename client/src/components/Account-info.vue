<template>
    <div>
        <div id="account">
            <div id="profile-picBox">
                <img id="profile-pic" :src="Session.user.pic" />
            </div>
            <p >Welcome <b>{{ Session.user.firstName }}</b></p>
            <p id="handle">{{ Session.user.handle }}</p>
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
        Session
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
#profile-picBox{
    float: left;
    padding-top: 10px;
    
}


</style>