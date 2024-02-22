<template>
  <v-app>
    <v-app-bar style="padding: 0px 90px;" app color="white" light elevation="6" elevate-on-scroll>
      <v-toolbar-title>
        Vuetify App
      </v-toolbar-title> </v-app-bar>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
