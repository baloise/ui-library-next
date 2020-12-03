<template>
  <div>
    <h1>Select</h1>
    <BalSelect v-model="value">
      <BalSelectOption label="Label 1" value="1">Label 1</BalSelectOption>
      <BalSelectOption label="Label 2" value="2">Label 2</BalSelectOption>
    </BalSelect>
    <p>{{ value }}</p>

    <hr />

    <BalField label="Year" expanded >
      <BalSelect id="bal-select-year" typeahead placeholder="select a year">
        <BalSelectOption value="1995" label="1995">1995</BalSelectOption>
        <BalSelectOption value="1996" label="1996">1996</BalSelectOption>
        <BalSelectOption value="1997" label="1997">1997</BalSelectOption>
        <BalSelectOption value="1998" label="1998">1998</BalSelectOption>
        <BalSelectOption value="1999" label="1999">1999</BalSelectOption>
        <BalSelectOption value="2000" label="2000">2000</BalSelectOption>
      </BalSelect>
    </BalField>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BalSelect, BalSelectOption, BalField } from '@baloise/ui-library-next-vue'

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
    BalField,
  },
})
</script>
