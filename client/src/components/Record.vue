<template>
    <div class="record" >
        <form :newpost="newPost" @submit.prevent="addPost">
            <article class="box">
                <div class="progress-box">
                    <p class="progress-percent">You are <strong class="is-size-4">60%</strong> done with your daily goal!</p>
                    <progress class="progress is-success" value="60" max="100">60%</progress>
                </div>
                    
                <article class="panel is-info">
                <p class="panel-heading">
                    Record Your Workout
                </p>
                <p class="panel-tabs">
                    <a class="exercises is-active">Run/Walk</a>
                    <a class="exercises">Swim</a>
                    <a class="exercises">Bike</a>
                    <a class="exercises">Gym</a>
                    <a class="exercises">Ski/Snowboard</a>
                </p>

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
                            <i class="fas fa-running"></i>
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
                    <button class="button is-info">Post</button>
                    </div>
                    <div class="control">
                    <button class="button is-info is-light">Cancel</button>
                    </div>
                </div>
                </article>
            </article>
        </form>

        <div class="content-item" v-for="(post, i) in posts" :key="i">
            <Post :post="post" @delete="deletePost(i)"/>
        </div>    

        <div class="content-item">
            <Post :post="newPost"/>
        </div>       

    </div>
    
</template>

<script>
import Post from "./Post"

export default {
    components: {
        Post
    },
    data: () => ({
        newPost: {
            
        },
        posts: [
            {
                title:"Morning Run",
                distance:"3 Miles",
                time:"20 min",
                fellowFitter:"@Leo",
                difficulty:"Too Easy",
                status:"Felt good this morning!!",
                img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-running-1597413181.jpg?crop=0.812xw:0.795xh;0.0294xw,0&resize=640:*"
            },
            {
                title:"Night Run",
                distance:"4 Miles",
                time:"30 min",
                fellowFitter:"",
                difficulty:"Too Hard",
                status:"It was Dark!",
                img:"https://www.marinij.com/wp-content/uploads/2020/04/MIJ-L-HIKE-0420-02.jpg"
            }
        ]
    }),

    methods: {
        addPost(){
            this.posts.unshift(this.newPost);
            this.newPost = {}
        }
    }
}
</script>

<style>
.feed{
    margin-left: 75px;
    margin-right: 75px;
    padding-top: 20px;
}
.field{
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 10px;
}
.progress-box{
    margin-bottom: 20px;
}
.control{
    margin-bottom: 10px;
}
.exercises{
    color: gray;
}
</style>