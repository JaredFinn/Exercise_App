<template>
    <div class="record">
        <form :newpost="newPost" @submit.prevent="addPost">
            <article class="box">
                <div class="progress-box">
                    <p class="progress-percent">You are <strong class="is-size-4">{{ goalPercentage }}%</strong> done with your weekly goal of 5 exercises!</p>
                    <progress class="progress is-success" :value="goalPercentage" max="100">{{ goalPercentage }}%</progress>
                </div>
                    
                <article class="panel is-info">
                    <p class="panel-heading">
                        Record Your Workout
                    </p>
                    <li class="panel-tabs" >
                        <a v-for="(tab, i) in tabs" :key="i" @click="selectTab(tab.title)" class="exercises" :class="{ 'is-active': selectedTab === tab.title }">{{ tab.title }}</a>
                    </li>
                    <div v-if="Session.user">
                        <component @update-goal="updateGoal" v-bind:is="selectedTab" :sport="selectedTab"></component>       
                    </div>
                    <!--<div v-else>
                        <article class="message" id="login-message">
                            <div class="message-header">
                                <p>Daily Activity cannot be reached</p>
                            </div>
                            <div class="message-body has-text-centered is-size-6">
                                You must be logged in to see your daily Activity.
                            </div>
                            <div class="has-text-centered">
                                <router-link to="/login" class="button is-info has-text-centered">
                                        Log in Here!
                                </router-link>
                            </div>
                        </article>
                    </div>    -->          
                </article>
            </article>
        </form>
    </div>
    
</template>

<script>
import RunWalk from "../components/Exercises/Run-Walk"
import Bike from "../components/Exercises/Bike"
import Swim from "../components/Exercises/Swim"
import SkiSnowboard from "../components/Exercises/Ski-Snowboard"
import Gym from "../components/Exercises/Gym"
import Session from "../models/Session";


export default {
    data: () => ({
        tabs: [
            {title: "Run-Walk"},
            {title: "Swim"},
            {title: "Bike"},
            {title: "Gym"},
            {title: "Ski-Snowboard"}
        ],
        selectedTab: "Run-Walk",
        posts: [],
        newPost: {
            
        },
        goal: 0,
        Session
    }),
    components: {
        RunWalk,
        Bike,
        Swim,
        SkiSnowboard,
        Gym,
    },
    methods: {
      selectTab(tab){
            this.selectedTab = tab;
      },
      updateGoal(){
          this.goal += 1;
      }
    },
    computed: {
        goalPercentage(){
          return (this.goal / 5) * 100;  
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