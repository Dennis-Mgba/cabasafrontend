<template>
    <div class="navbar-container"> <!--nav-->
        <!-- <ul class="nav-content">
         <li class="home"><router-link to="/">CABASA</router-link></li>
        <div class="nav-right">
            <li><router-link to="/signup">Sign Up</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
        </div>
        </ul> -->

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <router-link class="home" to="/">CABASA</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <router-link class="nav-link" to="/signup">Sign Up</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/login">Login</router-link>
              </li>
              <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Hey! Person
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                </div>
              </li> -->

            </ul>

          </div>
        </nav>

    </div>
</template>

<script>
export default {
  name: 'nav-head-section',

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
