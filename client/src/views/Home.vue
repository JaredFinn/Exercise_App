<template>
  <div class="home">
    <section class="hero is-info is-fullwidth">
        <div class="hero-body">
          <div class="container">
            <p class="title has-text-centered">
            Fit some Fitness in today.
            </p>
            <p class="subtitle has-text-centered">
            Record and share your exercises!
            </p>

            <div class="columns is-inline-flex">
                <div class="column">
                    <content-card/>
                </div>
                <div class="column">
                    <content-card/>
                </div>
                <div class="column">
                    <content-card/>
                </div>
                <div class="column">
                    <content-card/>
                </div>
            </div>
          </div>
        </div>

        <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
                                                <!--@clicked="onClickButton", unsure if this statement is valid -->
              <li @click="selectTab(tab.title)"  v-for="tab in tabs" :key="tab.title" :class="{ 'is-active': selectedTab === tab.title }">
                <a class="has-text-light" :class="{ 'has-text-grey-dark': selectedTab === tab.title }">{{ tab.title }}</a>
              </li>
            </ul>
          </div>
        </nav>  
    </div>
        
        

        <router-view/>
    </section>
    <!--dynamic component-->
    <component v-bind:is="selectedTab"></component>
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
import DailyActivity from "../components/Activity"
import Record from "../components/Record"


export default {
  data: () => ({ 
      tabs: [
            {title: "Feed"},
            {title: "DailyActivity"},
            {title: "Record"}
        ],
        selectedTab: "Feed",
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
    DailyActivity,
    Record,
  }    

}
</script>
