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
                        <a v-for="tab in tabs" :key="tab" @click="selectTab(tab.title)" class="exercises" :class="{ 'is-active': selectedTab === tab.title }">{{ tab.title }}</a>
                    </li>
                    <component @update-goal="updateGoal" v-bind:is="selectedTab" :sport="selectedTab"></component>                   
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
        goal: 0,
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