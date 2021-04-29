<template>
    <div>
      <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
              <i class="fas fa-user-circle fa-3x"></i>
            </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ post.user }}</strong>
              <small> {{ post.userHandle }}</small>
              <br>
            </p>
            <p class="title is-3 has-text-weight-bold">{{ post.sport }}: {{ post.title }}</p>
            <p class="subtitle is-5">Distance: {{ post.distance }} / Time: {{ post.time }} / Difficulty: {{ post.difficulty }} / Fellow Fitters: {{ post.fellowFitter }}</p>
            <p class="content is-medium">{{post.status}}</p>
            
              <div class="box" width="50">
                <div class="card-image">
                  <figure class="image">
                    <img class="is-small" frameborder="0" allowfullscreen :src="post.img" alt="Placeholder image">              
                  </figure>
                </div>
              </div>

              <button @click="liked()">
                  <i v-if="!like" class="far fa-heart fa-lg" ></i>
                  <i v-else class="fas fa-heart fa-lg" ></i>
              </button>
                  
                
                
              

              <br>
              <br>
            <small> {{ post.time }} ago</small>
          </div>

          <div class="media-content">
            <div class="field">
              <p class="control">
                <textarea class="textarea" placeholder="Add a comment..."></textarea>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button">Post comment</button>
              </p>
            </div>
          </div>
        </div>
      </article>
  </div>
</template>

<script>
import Vue from "vue"
import Session from "../models/Session"
import { GetMyPosts } from "../models/Posts";

export default Vue.extend({
    data: () => ({
      Session,
      posts: [],
      like: false
    }),
    props: {
      post: Object
    } ,
    components: {
    },
    async mounted() {
      if(Session.user)
        this.posts = await GetMyPosts();
    },
    methods: {
      liked(){
        this.like = !this.like
      }
    }
})
</script>

<style>
a{
  color:royalblue;
}
</style>