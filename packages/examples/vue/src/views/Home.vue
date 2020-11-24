<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <BalButton>Bubu</BalButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { BalButton } from '@baloise/ui-library-next-vue'

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
    BalButton,
  },
})
</script>
