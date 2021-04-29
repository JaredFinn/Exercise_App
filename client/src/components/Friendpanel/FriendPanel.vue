<template>
  <article id="friend-panel" class="panel is-success">
    <p class="panel-heading">
        Friends
    </p>

    <li class="panel-tabs" >
        <a v-for="(tab, i) in tabs" :key="i" @click="selectTab(tab.title)" :class="{ 'is-active': selectedTab === tab.title }">{{ tab.title }}</a>
    </li>
    <component v-bind:is="selectedTab"></component>

  </article>
</template>

<script>
import All from "../Friendpanel/All"
import Messages from "../Friendpanel/Messages"
import Likes_Comments from "../Friendpanel/Likes_Comments"

export default {
  components: { 
      All,
      Likes_Comments,
      Messages
    },
    data: () => ({
        tabs: [
            {title: "All"},
            {title: "Messages"},
            {title: "Likes_Comments"},
        ],
        selectedTab: "All",
    }),
    methods: {
      selectTab(tab){
            this.selectedTab = tab;
      },
    },
    

}
</script>

<style>
#friend-panel{
    margin-right: 30px;
    margin-top: 10px;
    height: 730px;
}
</style>