<template>
    <v-layout row>
      <v-flex xs12 sm8 md6 offset-sm2 offset-md3>
        <h3>Searched for  <v-chip color="primary" text-color="white">{{ $route.params.id }}</v-chip></h3>
        <div v-if="albumExists">
          <album-card
            v-for="(album, index) in $store.state.albums"
            :key="index"
            :artist="album.artistName"
            :collection="album.collectionName"
            :url="album.collectionViewUrl"
            :imageUrl="album.artworkUrl100"
          />
          {{ $store.state.albums }}
        </div>
        <div v-else>
          <h2>Sorry.. No results found!</h2>
        </div>
      </v-flex>
    </v-layout>
</template>

<script>
import AlbumCard from '@/components/AlbumCard.vue'
export default {
  middleware: ['search'],
  components: {
    AlbumCard
  },
  computed: {
    albumExists () {
      return this.$store.state.albums.length > 0
    }
  }
}
</script>

<style>

</style>
