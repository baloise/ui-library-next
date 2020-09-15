<template>
  <div id="app"
       class="bal-app">
    <img alt="Vue logo"
         src="./assets/logo.png">
    <h1 class="title">Title</h1>
    <MyComponent first="Stencil"
                 last="'Don't call me a framework' JS"></MyComponent>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MyComponent } from '@baloise/ui-library-next-vue'

export default Vue.extend({
  name: 'App',
  components: { MyComponent },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
