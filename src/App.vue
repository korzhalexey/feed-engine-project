<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import "assets/styles/tailwind.postcss";

body,
html {
  height: 100%;
}

#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  @apply mx-auto;
}
</style>
