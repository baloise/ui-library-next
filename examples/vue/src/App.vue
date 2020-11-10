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
      @balInput="onSelectInput($event)"
    >
      <BalSelectOption v-for="option in options" :key="option.value" :value="option.value" :label="option.label">
        {{ option.label }}
      </BalSelectOption>
    </BalSelect>
    <p>{{ selectedOption }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BalInput, BalCheckbox, BalField, BalButton, BalSelect, BalSelectOption } from '@baloise/ui-library-next-vue'
import { BalOptionValue } from '@baloise/ui-library-next'

export const NewBalOptionValue = <T>(value: T, label: string, data?: any) => {
  return {
    value,
    label,
    data,
  }
}

export default Vue.extend({
  name: 'App',
  data() {
    const options: BalOptionValue<any>[] = []
    const selectedOption = ''
    const loading = false
    // const myValue = 'start value'
    // const error = 'Error Message'
    // const checkbox = true
    // const counter = 1
    return { options, loading, selectedOption }
  },
  watch: {
    selectedOption: function() {
      console.log('selectedOption', this.selectedOption)
    },
  },
  methods: {
    // validate: function() {
    //   this.counter = this.counter++
    //   this.error = this.error + this.counter
    // },
    onChange: function(event: any) {
      console.log('change', event)
    },
    onSelectInput: function(searchTerm: string) {
      this.loading = true
      fetch('https://swapi.dev/api/people/?search=' + searchTerm)
        .then(res => res.json())
        .then(data => {
          this.options = data.results.map((person: any, index: number) =>
            NewBalOptionValue(person.url, person.name, person),
          )
          this.loading = false
        })
    },
  },
  components: { BalInput, BalCheckbox, BalField, BalButton, BalSelect, BalSelectOption },
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
