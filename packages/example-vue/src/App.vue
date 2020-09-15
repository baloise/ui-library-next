<template>
  <div id="app"
       class="bal-app">
    <img alt="Vue logo"
         src="./assets/logo.png">
    <h1 class="title is-1">Title</h1>
    <BalButton>Button</BalButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BalButton } from '@baloise/ui-library-next-vue'

export default Vue.extend({
  name: 'App',
  components: { BalButton },
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
