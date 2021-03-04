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
    <TabContent/>
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
import TabContent from "../components/TabContent"

export default {
  name: 'Home',
  components: {
    NavFooter,
    TabContent,
    ContentCard
  }
}
</script>
