<template>
  <div>
    <h1>Input</h1>
    <BalInput v-model="value" />
    <p>{{ value }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BalInput } from '@baloise/ui-library-next-vue'

export default Vue.extend({
  data: () => {
    const value = 'Value'
    return { value }
  },
  watch: {
    value: (value: boolean) => {
      console.log('BalInput has changed', value)
    }
  },
  components: {
    BalInput,
  },
})
</script>
