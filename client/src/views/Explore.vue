<template>
<div>
    <section class="hero is-info is-fullwidth">
    <div class="hero-body">
        <p class="title has-text-centered">
                Explore
        </p>
    </div>

        <div class="columns">
            <div class="column is-one-third" v-for="(post, i) in posts" :key="i"  >
                <!--displays only 3 most recent posts-->
                <content-card :post="post"/>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import ContentCard from '../components/ContentCard.vue'
import { GetMyFeed } from "../models/Posts";

export default {
  data: () => ({
      posts: [],
  }),
  components: { ContentCard },
  mounted() {
        this.posts = GetMyFeed();
  },  
}
</script>

<style>
</style>