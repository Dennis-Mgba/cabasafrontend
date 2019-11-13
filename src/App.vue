<template>
  <div id="app">
      <navHeadSection></navHeadSection>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
 import navHeadSection from './components/navHeadSection.vue'

export default {
  name: 'app',
  components: {
      navHeadSection,
  },

}
</script>

<style>
* {
    font-family: "poppins";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #f8f9fa;
}
</style>
