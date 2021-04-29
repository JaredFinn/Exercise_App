<template>
    <div>
        <div class="box" id="info-box">
            <div id="account">
                <figure class="image is-48x48" id="profile-picBox">
                    <img class="is-rounded" id="profile-pic" :src="Session.user.pic" />
                </figure>
                <p >Welcome <b>{{ Session.user.firstName }}</b></p>
                <p id="handle">{{ Session.user.handle }}</p>
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
#info-box {
    float: left;
    white-space: nowrap;
    width: 100%;

}
#account{
    display: inline-block;
}
#logout-button {
    float: right;
}
#handle {
    margin-left: 30px;
}
#profile-picBox{
    overflow: hidden;
    float: left;
    padding-top: 10px;
}


</style>