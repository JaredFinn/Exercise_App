<template>
<div>
    <section class="hero is-info is-fullwidth">
    <div class="hero-body">
          <div class="container">
            <p class="title has-text-centered">
            Fit some Fitness in today.
            </p>
            <p class="subtitle has-text-centered">
            Record and share your exercises!
            </p>
            
          </div>
        </div>
    </section>
    <div>
        <div class="content-item" v-for="(post, i) in posts" :key="i">
            <Post :post="post" @delete="deletePost(i)"/>
        </div> 
    </div>  
</div>
</template>

<script>
import { GetAllPosts } from "../models/Posts";
import Post from "../components/Post";

export default {
  data: () => ({
      posts: [],
  }),
  async mounted() {
        this.posts = await GetAllPosts();
  },  
  components: {
      Post
  }
}
</script>

<style>

</style>