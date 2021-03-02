<template>
  <div id="app">
        <MyNav/>
        <div class="container">
          <router-view/>
        </div>
        <MyFooter/>
    </div>
</template>

<script>
import MyNav from "./components/Nav";
import MyFooter from "./components/Footer"

export default {
  components: {
    MyNav,
    MyFooter
  }  
}
</script>
<style lang="scss">

</style>
