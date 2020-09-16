<template>
  <div id="app">
    <BalCard inverted>
      <BalCardSteps inverted>
        <BalCardStep active
                     value="1">
          <h1 class="title is-1 has-text-white">Title</h1>
          <BalButton>Button</BalButton>
        </BalCardStep>
        <BalCardStep value="2">
          <h1 class="title is-1 has-text-white">Title 2</h1>
          <BalButton>Button</BalButton>
        </BalCardStep>
        <BalCardStep value="3">
          <h1 class="title is-1 has-text-white">Title 3</h1>
          <BalButton>Button</BalButton>
        </BalCardStep>
      </BalCardSteps>
    </BalCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BalButton, BalCard, BalCardStep, BalCardSteps } from '@baloise/ui-library-next-vue'

export default Vue.extend({
  name: 'App',
  components: { BalButton, BalCardSteps, BalCardStep, BalCard },
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
