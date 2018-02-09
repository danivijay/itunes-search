<template>
  <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
    <v-layout row wrap>
      <v-flex xs12>
        <v-card target="_blank" :href="url" color="purple" class="white--text">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                <div>
                  <div class="headline">{{ collection }}</div>
                  <div>{{ artist }}</div>
                </div>
              </v-flex>
              <v-flex xs5>
                  <v-card-media
                    :src="imageUrl"
                    height="100px"
                    contain
                  ></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['artist', 'collection', 'url', 'imageUrl']
}
</script>

<style>

</style>
