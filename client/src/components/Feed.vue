<template>
  <div  id="user-content">
      <ol id="list">
        <li v-for="user in users" :key="user">
          <div class="box">
              <article class="media has-background-light">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <i class="fas fa-user-astronaut fa-3x"></i>
                  </figure>
                </div>
                    <div class="media-content">
                      <div  class="content">
                        <p>
                          <strong>{{ user.name }}</strong> <small>{{ user.account }}</small> <small>{{ user.lastTime }}</small>
                          <br>
                          {{ user.status }}
                        </p>
                        <figure class="image is-128x128">
                          <img src="https://bulma.io/images/placeholders/128x128.png">
                        </figure>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item" aria-label="reply">
                            <span class="icon is-small">
                              <i class="fas fa-heart" aria-hidden="true"></i>
                            </span>
                          </a>
                          <a class="level-item" aria-label="retweet">
                            <span class="icon is-small">
                              <i class="fas fa-retweet" aria-hidden="true"></i>
                            </span>
                          </a>
                          <a class="level-item" aria-label="like">
                            <span class="icon is-small">
                              <i class="fas fa-comment" aria-hidden="true"></i>
                            </span>
                          </a>
                        </div>
                      </nav>
                    </div>  
              </article>
          </div>
        </li>
      </ol>
    </div>
</template>

<script>
export default {
    data: () => ({
        users: [
            { name: 'Jared', account: '@jfinn1800', status: 'Just ran 20 miles!! Whoe else??', lastTime: '30min'},
            { name: 'Isabella', account: '@bella1234', status: 'Good hike up lemon squeeze this morning', lastTime: '20min'},
            { name: 'Leo', account: '@Leo5678', status: '@jfinn1800 one upped you with 25!', lastTime: '40min'},
            { name: 'Luke', account: '@Luke0000', status: 'Did nothing today, lazy day.', lastTime: '1hr'}
        ]   
    })
}


</script>

<style>
.media{
    border-radius: 4px;
    padding: 10px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);;
}
#list{
    list-style: none;
}
</style>