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

        <NavFooter/>
        
        

        <router-view/>
    </section>
    <!--dynamic component-->
    <component v-bind:is="currentTab"></component>
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
import NavFooter from "../components/NavFooter"
import Feed from "../components/Feed"
import DailyActivity from "../components/Activity"
import Record from "../components/Record"


export default {
  data: () => ({
      currentTab: "Feed",

  }),
  methods: {
    //want to recieve value of selectedTab from NavFooter.vue. this should be method
    switchTab (value) {
      this.currentTab = value
    }
  },

  name: 'Home',
  components: {
    NavFooter,
    ContentCard,
    Feed,
    DailyActivity,
    Record,
  }
}
</script>
