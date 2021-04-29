<template>
  <div>
  <div v-if="Session.user">
      <div class="content-item" v-for="(post, i) in posts" :key="i">
          <Post :post="post" @delete="deletePost(i)"/>
      </div> 
  </div>  
  <div v-else>
      <article class="message" id="login-message">
        <div class="message-header">
          <p>Feed cannot be reached</p>
        </div>
        <div class="message-body has-text-centered is-size-6">
          You must be logged in to see your feed.
        </div>
        <div class="has-text-centered">
          <router-link to="/login" class="button is-info has-text-centered">
                  Log in Here!
          </router-link>
        </div>
      </article>
  </div>  

</div>  
</template>

<script>
import Post from "./Post"
import Vue from "vue"
import { GetMyFeed } from "../models/Posts";
import Session from "../models/Session"


export default Vue.extend({
    data: () => ({
      posts: [],
      loginMessage: true,
      Session
    }),
    async mounted() {
      if(Session.user)
        this.posts = await GetMyFeed(); 
    },
    components: {
      Post
    },
})


</script>

<style>
.media{
    margin-top: 20px;
    border-radius: 4px;
    padding: 10px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);;
}
#list{
    list-style: none;
}
#profile-image {
  border-radius: 6px;
}
</style>