<template>
    <div class="navbar-container"> <!--nav-->

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <router-link class="home" to="/">CABASA</router-link>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

              <li class="nav-item" v-if="!authUser">
                  <router-link class="nav-link" to="/signup">Sign Up</router-link>
              </li>
              <li class="nav-item" v-if="!authUser">
                  <router-link class="nav-link" to="/login">Login</router-link>
              </li>

              <li class="nav-item dropdown" v-if="authUser">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hey! {{ $root.auth.name }} </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" @click="logOut()">Log out</a>
                </div>
              </li>

            </ul>

          </div>
        </nav>

    </div>
</template>

<script>
export default {
  name: 'nav-head-section',
  mounted() {
      // console.log(this.$root);
  },
  computed: {
      authUser() {
          return this.$root.auth.name
      }
  },
  methods: {
      logOut() {
          localStorage.removeItem('auth');        // clear users credentials from local storage on the browser
          this.$root.auth = {};                   // clear users credentials from root hence assign root to empty string
          this.$router.push('/login');
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar-container {
    width: 100%;
    padding: 0;
}

nav {
    padding: 0.7% 10%;
}

.home {
    text-decoration: none;
    color: #000000;
    font-size: 25px;
}


</style>
