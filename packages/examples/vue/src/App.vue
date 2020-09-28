<template>
  <div id="app">
    <BalCheckbox v-model="checkbox"></BalCheckbox>
    <br />
    <h4>{{ checkbox }}</h4>
    <br />
    <br />
    <BalInput v-model="myValue"></BalInput>
    <br />
    <input type="text" v-model="myValue" />
    <h4>{{ myValue }}</h4>
    <!-- <BalCard inverted>
      <BalCardSteps inverted>
        <BalCardStep active value="1">
          <h1 class="title is-1 has-text-white">Title</h1>
          <BalCheckbox v-model="checkbox" inverted value="car"></BalCheckbox>
          <span class="has-text-white">{{ checkbox }}</span>
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
    </BalCard>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BalInput, BalCheckbox } from '@baloise/ui-library-next-vue'

export default Vue.extend({
  name: 'App',
  components: { BalInput, BalCheckbox },
  data() {
    const myValue = 'start value'
    const checkbox = true
    return { myValue, checkbox }
  },
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
