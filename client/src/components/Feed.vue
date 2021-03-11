<template>
  <div>
      <div class="content-item" v-for="(post, i) in posts" :key="i">
          <Post :post="post" @delete="deletePost(i)"/>
      </div> 

  </div>  
</template>

<script>
import Post from "./Post"
import Vue from "vue"
import { GetMyPosts } from "../models/Posts";

export default Vue.extend({
    data: () => ({
      posts: []
    }),
    components: {
      Post
    },
    mounted() {
      this.posts = GetMyPosts();
    }
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