<template>
  <new-post/>
</template>

<script>
import NewPost from './newPost.vue'
export default {
    data: () => ({

    }),
    components: {
      NewPost
    }
}


</script>

<style>
.media{
    margin-top: 20px;
    border-radius: 4px;
    padding: 10px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);;
}
#list{
    list-style: none;
}
#profile-image {
  border-radius: 6px;
}
</style>