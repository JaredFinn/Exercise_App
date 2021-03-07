<template>
    <div>
    <article v-for="post in posts" :key="post"  class="media">
      <figure class="media-left">
          <p class="image is-64x64">
            <img  id="profile-image" src="https://bulma.io/images/placeholders/128x128.png">
          </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ post.name + " " }}</strong>
            <small>{{ post.account }}</small>
            <br>
              {{ post.status }}
            <br>
          </p>
            <div class="box" width="50">
              <div class="card-image">
                <figure class="image is-16by9">
                  <img class="has-ratio" frameborder="0" allowfullscreen src="https://wvtourism.com/wp-content/uploads/2018/04/Endles-Wall-4-13-18.jpg" alt="Placeholder image">              
                </figure>
              </div>
            </div>
          <small><a>Like</a> · <a>Reply</a> · {{ post.lastTime }}</small>
        </div>

        <article class="media">
          <figure class="media-left">
            <p class="image is-48x48">
              <img id="profile-image" src="https://bulma.io/images/placeholders/96x96.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Sean Brown</strong>
                <br>
                Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                <br>
                <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
              </p>
            </div>
          </div>
        </article>

        <article class="media">
          <figure class="media-left">
            <p class="image is-48x48">
              <img id="profile-image" src="https://bulma.io/images/placeholders/96x96.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Kayli Eunice </strong>
                <br>
                Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                <br>
                <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
              </p>
            </div>
          </div>      
        </article>
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
    data: () => ({
        newPost: {
            
        },
        posts: [
            {
                name:"",
                distance:"",
                time:"",
                fellowFitter:"",
                difficulty:"",
                status:"",
            }
        ]   
    }),

    methods: {
        addPost(){
            this.posts.unshift(this.newPost);
            this.newPost = { user: { } }
        }
    }
}
</script>

<style>
a{
  color:royalblue;
}
</style>