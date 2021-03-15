<template>
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
</template>

<script>

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
    }
}        
</script>

<style>
</style>