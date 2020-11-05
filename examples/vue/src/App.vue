<template>
  <div id="app" class="container">
    <BalField :validation-message="error">
      <BalInput v-model="myValue"></BalInput>
    </BalField>
    <BalButton @click="validate($event)">Validate</BalButton>
    <p>{{error}}</p>
    <!-- <hr />
    <BalCheckbox v-model="checkbox"></BalCheckbox>
    <br />
    <h4>{{ checkbox }}</h4>
    <br />
    <hr />
    <br />
    <BalInput v-model="myValue"></BalInput>
    <br />
    <input type="text" v-model="myValue" />
    <h4>{{ myValue }}</h4> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BalInput, BalCheckbox, BalField, BalButton } from '@baloise/ui-library-next-vue'

export default Vue.extend({
  name: 'App',
  data() {
    const myValue = 'start value'
    const error = 'Error Message'
    const checkbox = true
    const counter = 1
    return { myValue, error, checkbox, counter }
  },
  methods: {
    validate: function() {
      this.counter = this.counter++
      this.error = this.error + this.counter
    },
  },
  components: { BalInput, BalCheckbox, BalField, BalButton },
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
