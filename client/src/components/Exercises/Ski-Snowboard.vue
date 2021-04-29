<template>
    <form @submit.prevent="addPost">
        <article class="box">
            <p class="title is-italic">{{ sport }}</p>
            <div class="field">
                <label class="label">Title</label>
                <div class="control">
                <input class="input" type="text" placeholder="Give your workout a name!" v-model="newPost.title" title="newPost.title" >
                </div>
            </div>
            
            <div class="columns">
                <div class="column is half">
                <div class="field">
                    <label class="label">Runs</label>
                    <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="E.g. 10 Runs" v-model="newPost.distance" distance="newPost.distance">
                    <span class="icon is-small is-left">
                        <i class="fas fa-snowboarding"></i>
                    </span>
                    </div>
                </div>
                </div>
                <div class="column is half">
                  <div class="field">
                      <label class="label">Time</label>
                      <div class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="How long did it take?" v-model="newPost.time" time="newPost.time">
                      <span class="icon is-small is-left">
                            <i class="fas fa-stopwatch"></i>
                        </span>
                      </div>
                  </div>
                </div>
            </div>

            <div class="field">
                <label class="label">Anyone Join?</label>
                <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Tag those that joined you!" v-model="newPost.fellowFitter" fellowFitter="newPost.fellowFitter">
                <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                </span>
                </div>
            </div>
            
            <div class="field">
                <label class="label">Caption</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Share your experience!" v-model="newPost.status" status="newPost.status"></textarea>
                </div>
            </div>

            <div class="field">
                <label class="label">Add a Picture URL</label>
                <div class="control has-icons-left">
                <input class="input" type="text" placeholder="Show everyone what it was like!" v-model="newPost.img" img="newPost.img">
                <span class="icon is-small is-left">
                    <i class="fas fa-camera"></i>
                </span>
                </div>
            </div>
            
            <div class="field is-grouped">
                <div class="control">
                  <button @click="addToGoal" class="button is-info">Post</button>
                </div>
                <div class="control">
                  <button class="button is-info is-light">Cancel</button>
                </div>
            </div>

            <record-error v-if="!Session.user"/>

            <div class="content-item">
                <p class="title">Preview Your New Post:</p>
                <Post :post="newPost"/>
            </div> 
            
        </article>
    </form>
</template>

<script>
import Post from "../Post"
import RecordError from '../recordError.vue';
import Session from "../../models/Session";
import {  AddPost } from "../../models/Posts";

export default {
    data: () => ({
        newPost: {
            user: Session.user.handle
        },
        posts: [],
        Session
    }),
    props:{
        sport: String
    },
    methods: {
        async addPost(){
            const post = await AddPost(this.newPost)
            this.posts.unshift(post);
            this.newPost = { user: Session.user.handle }
        },
        addToGoal(){
            if(Session.user){
                this.$emit('update-goal')
            }
        }
    },
 
    components: {
        Post,
        RecordError
    }
    
}
</script>

<style>

</style>