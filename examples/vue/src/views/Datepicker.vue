<template>
  <div>
    <h1>Datepicker</h1>
    <BalDatepicker placeholder="DD.MM.YYYY" v-model="value" />
    <p>{{ value }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BalDatepicker } from '@baloise/ui-library-next-vue'

export default Vue.extend({
  data: () => {
    const value = new Date()
    return { value }
  },
  watch: {
    value: (value: Date) => {
      console.log('BalDatepicker has changed', value)
    },
  },
  components: {
    BalDatepicker,
  },
})
</script>
