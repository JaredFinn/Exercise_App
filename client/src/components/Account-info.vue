<template>
    <div>
        <div class="box" id="info-box">
            <div id="account">
                <p id="welcome">Welcome <b>{{ Session.user.firstName }}</b></p>
                <img class="" id="profile-pic" :src="Session.user.pic" />
            </div>
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
#info-box{
    float: left;
}
#logout-button{
    float: right;
}
#welcome{
    display: inline-block;
}
#profile-pic{
    float: right;
    margin-left: 10px;
}

</style>