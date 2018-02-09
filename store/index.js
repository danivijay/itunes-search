export const state = () => ({
  album: []
})

export const mutations = {
  add (state, payload) {
    state.albums = payload
  }
}
