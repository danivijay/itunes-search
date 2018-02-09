<template>
  <v-app dark>
    <v-toolbar fixed app>
      <router-link tag="v-toolbar-title" to="/" v-text="title"></router-link>
      <v-spacer></v-spacer>
      <v-btn to="/"
        fab
        flat
        small
      >
      <v-icon>refresh</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        title: 'iTunes Search'
      }
    }
  }
</script>
