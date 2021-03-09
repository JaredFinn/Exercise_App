<template>
  <nav id="navBarID" class="navbar is-light" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item has-text-weight-bold is-size-3">
                    FinnFit
                </router-link>
            
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
            
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">

                <router-link to="/explore" class="navbar-item">Explore</router-link>
                
            
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                    More
                    </a>
            
                    <div class="navbar-dropdown">
                    <router-link to="/about" class="navbar-item">
                        About
                    </router-link>
                    <a class="navbar-item">
                        Jobs
                    </a>
                    <a class="navbar-item">
                        Contact
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                        Report an issue
                    </a>
                    </div>
                </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <LoginBadge />
                    </div>
                </div>
            </div>
    </nav>
</template>

<script>
import LoginBadge from './LoginBadge.vue'
export default {
  components: { LoginBadge },

}
</script>

<style>
#navBarID{
    margin-bottom: 20px;
}
</style>