<template>
    <div>
        <div class="panel-block">
            <p class="control has-icons-left">
            <input class="input is-success" type="text" placeholder="Search">
            <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            </p>
        </div>
        <a class="panel-block" v-for="friend in Session.user.following" :key="friend" v-on="retrieveFriend(friend.handle)">
            <span class="panel-icon">
            <i class="fas fa-user" aria-hidden="true"></i>
            </span>
            {{ friends.firstName }} {{ friend.handle }}
        </a>
    </div>
</template>

<script>
import Session from "../../models/Session"
//import { GetFriend } from "../../models/Users"

export default({
    data: () => ({
        Session,
        friends: [],
    }),
    methods: {
        retrieveFriend(){
            
        }
    },

})
</script>

<style>

</style>