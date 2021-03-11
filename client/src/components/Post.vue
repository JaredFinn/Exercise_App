<template>
    <div>
    <article class="media">
      <figure class="media-left">
          <p class="image is-64x64">
            <img  id="profile-image" src="https://bulma.io/images/placeholders/128x128.png">
          </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>User</strong>
            <small> @UserHandle</small>
            <br>
          </p>
          <p class="title is-3 has-text-weight-bold">{{ post.title }}</p>
          <p class="subtitle is-5">Distance: {{ post.distance }} / Time: {{ post.time }} / Difficulty: {{ post.difficulty }} / Fellow Fitters: {{ post.fellowFitter }}</p>
          <p class="content is-medium">{{post.status}}</p>
          
            <div class="box" width="50">
              <div class="card-image">
                <figure class="image">
                  <img class="is-small" frameborder="0" allowfullscreen :src="post.img" alt="Placeholder image">              
                </figure>
              </div>
            </div>
          <small><a>Like</a> · <a>Reply</a> · {{ post.time }}</small>
        </div>

        
        <div class="media-content">
        <div class="field">
          <p class="control">
            <textarea class="textarea" placeholder="Add a comment..."></textarea>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button">Post comment</button>
          </p>
        </div>
      </div>
      </div>
      
    </article>
  </div>
</template>

<script>
export default {
    props: {
      post: Object
    } 
}
</script>

<style>
a{
  color:royalblue;
}
</style>