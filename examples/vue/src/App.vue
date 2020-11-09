<template>
  <div id="app" class="container">
    <!-- <BalField :validation-message="error">
      <BalInput v-model="myValue"></BalInput>
    </BalField>
    <BalButton @click="validate($event)">Validate</BalButton>
    <p>{{ error }}</p>
    <hr /> -->
    <BalSelect
      remote
      typeahead
      placeholder="Start typing"
      v-model="selectedOption"
      :loading="loading"
      :options="options"
      @balInput="onSelectInput($event)"
    ></BalSelect>
    <p>{{ selectedOption && selectedOption.text }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BalInput, BalCheckbox, BalField, BalButton, BalSelect } from '@baloise/ui-library-next-vue'
import { BalOptionValue } from '@baloise/ui-library-next/dist/types/components/bal-select-option/bal-select-option.type'

export default Vue.extend({
  name: 'App',
  data() {
    const myValue = 'start value'
    const error = 'Error Message'
    const options: BalOptionValue<number>[] = []
    const selectedOption: BalOptionValue<number> | null = null
    const loading = false
    const checkbox = true
    const counter = 1
    return { myValue, error, checkbox, counter, options, loading, selectedOption }
  },
  watch: {
    selectedOption: function() {
      console.log('selectedOption', this.selectedOption)
    },
  },
  methods: {
    validate: function() {
      this.counter = this.counter++
      this.error = this.error + this.counter
    },
    onChange: function(event: any) {
      console.log('change', event)
    },
    onSelectInput: function(searchTerm: string) {
      // console.log('onSelectInput', searchTerm)
      this.loading = true
      fetch('https://swapi.dev/api/people/?search=' + searchTerm)
        .then(res => res.json())
        .then(data => {
          this.options = data.results.map((person: any, index: number) => ({
            value: index,
            text: person.name,
          }))
          this.loading = false
        })
    },
  },
  components: { BalInput, BalCheckbox, BalField, BalButton, BalSelect },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
