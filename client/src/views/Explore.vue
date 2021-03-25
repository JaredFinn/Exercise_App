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
            <div class="columns" >
                <div class="column is-one-third" v-for="(post, i) in posts" :key="i" >
                    <div v-if="i % 3 === 0">
                        <content-card  :post="post"/>
                    </div>
                    
                    <div v-else>
                        <content-card :post="post"/>
                    </div>
                </div>
            </div>
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