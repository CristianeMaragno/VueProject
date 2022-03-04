<template>
  <div class="content">
    <h1>Hi!</h1>

    <b-button v-on:click="getValue()" variant="success">Click me!</b-button>
    <p class="message">{{test}}</p>
  </div>
</template>

<script src="./page.js"></script>
<style scoped src="./page.css"></style>