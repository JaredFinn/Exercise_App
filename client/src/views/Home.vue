<template>
  <div class="home">
    <div class="columns">
      <div class="column is-one-quarter">
        <div class="content is-pulled-left">
          <FriendPanel/>
        </div>
      </div>

      <div class="column is-three-quarters">
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
                        <!--displays only 3 most recent posts-->
                        <content-card v-if="i < 3" :post="post"/>
                    </div>
                </div>
              </div>
            </div>
            <div class="hero-foot">
              <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                  <ul>
                    <li @click="selectTab(tab.title)"  v-for="tab in tabs" :key="tab.title" :class="{ 'is-active': selectedTab === tab.title }">
                      <a class="has-text-light" :class="{ 'has-text-grey-dark': selectedTab === tab.title }">{{ tab.title }}</a>
                    </li>
                  </ul>
                </div>
              </nav>  
            </div> 
        </section>
        <!--dynamic component-->
    <component v-bind:is="selectedTab"></component>
      </div>
    </div>

    
    
  </div>
</template>

<style>
.hero-foot{
  margin-left: 50px;
  margin-right: 50px;
}

</style>
<script>
import ContentCard from '../components/ContentCard.vue'
import Feed from "../components/Feed"
import YourActivity from "../components/Activity"
import Record from "../components/Record"
import Vue from "vue"
//import { GetMyFeed } from "../models/Posts";
import FriendPanel from "../components//Friendpanel/FriendPanel";

export default Vue.extend({
  data: () => ({ 
      tabs: [
            {title: "Feed"},
            {title: "YourActivity"},
            {title: "Record"}
        ],
      selectedTab: "Feed",
      posts: []
  }),

  methods: {
    selectTab(tab){
        this.selectedTab = tab;
      },
  },
  name: 'Home',
  components: {
    ContentCard,
    Feed,
    YourActivity,
    Record,
    FriendPanel
  },
  mounted() {
        //this.posts = GetMyFeed();
    }   

})
</script>
