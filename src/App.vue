<template>
  <div id="app">
    <topbar></topbar>
    <page></page>
  </div>
</template>

<script>
import Topbar from './components/topbar/topbar.vue'
import Page from './components/page/page.vue'

export default {
  name: 'App',

  components: {
    Topbar,
    Page
  }
}
</script>
