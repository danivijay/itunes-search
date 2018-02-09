<template>
  <v-layout row>
    <v-flex xs12 sm8 md6 offset-sm2 offset-md3>
      <v-card>
        <v-card-text>
          <v-text-field
            label="Ask something..."
            @keyup.enter="onSearch"
            v-model="searchString"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn
              class="pink"
              @click="onSearch"
            >
            Search
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
    onSearch () {
      this.$router.push(`results/${this.searchString}`)
    }
  }
}
</script>

