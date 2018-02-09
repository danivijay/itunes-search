<template>
  <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="purple" class="white--text">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                <div>
                  <div class="headline">Halycon Days</div>
                  <div>Ellie Goulding</div>
                </div>
              </v-flex>
              <v-flex xs5>
                  <v-card-media
                    src="/static/doc-images/cards/halcyon.png"
                    height="125px"
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

}
</script>

<style>

</style>
