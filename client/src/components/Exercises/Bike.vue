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
                    <label class="label">Distance</label>
                    <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="E.g. 4 miles" v-model="newPost.distance" distance="newPost.distance">
                    <span class="icon is-small is-left">
                        <i class="fas fa-biking"></i>
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
                <label class="label">Difficulty</label>
                <div class="control">
                    <div class="select is-info">
                        <select v-model="newPost.difficulty" difficulty="newPost.difficulty">
                            <option>Select Option</option>
                            <option>Too Easy</option>
                            <option>Easy</option>
                            <option>Just Right</option>
                            <option>Hard</option>
                            <option>Too Hard</option>
                            <option>Recovery</option>
                        </select>
                    </div>
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

            <record-error v-if="recordMessage"/>

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
import { GetMyFeed } from "../../models/Posts";

export default {
    data: () => ({
        newPost: {

        },
        recordMessage: false
    }),
    props:{
        sport: String
    },
    methods: {
        addPost(){
            if(Session.currentUser){
                this.newPost.sport = this.sport;
                this.posts.unshift(this.newPost);
                this.newPost = {}
            }
            else
                this.recordMessage = true;
        },
        addToGoal(){
            if(Session.currentUser){
                this.$emit('update-goal')
                this.newPost.user = Session.currentUser;
                this.newPost.userHandle = Session.currentUserHandle;
            }
        }
    },
    mounted() {
        this.posts = GetMyFeed();
    },
    components: {
        Post,
        RecordError
    }
    
}
</script>

<style>

</style>