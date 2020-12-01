<template>
  <div>
    <h1>Select</h1>
    <BalSelect v-model="value">
      <BalSelectOption label="Label 1" value="1">Label 1</BalSelectOption>
      <BalSelectOption label="Label 2" value="2">Label 2</BalSelectOption>
    </BalSelect>
    <p>{{ value }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BalSelect, BalSelectOption } from '@baloise/ui-library-next-vue'

export default Vue.extend({
  data: () => {
    const value = ['1']
    return { value }
  },
  watch: {
    value: (value: Date) => {
      console.log('BalSelect has changed', value)
    },
  },
  components: {
    BalSelect,
    BalSelectOption,
  },
})
</script>
