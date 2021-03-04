<template>
<section class="hero is-info">
  <div class="hero-body">
    <p class="title has-text-centered">
            Explore
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
</section>
</template>

<script>

import ContentCard from '../components/ContentCard.vue'

export default {
  components: { ContentCard },

}
</script>

<style>
.hero {
  border-radius: 6px;
}
</style>