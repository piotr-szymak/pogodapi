/*jshint esversion: 6 */
  // initial state
const axios = require('axios');

const state = () => ({
    humidity: ""
});
// mutations
const mutations = {
    setHumidity(state, response) {
    state.humidity = response;
  },
};
// actions
const actions = {
    getHumidity({commit} ){
        return axios.get("/aktualna-wilgotnosc")
        .then(response => {
          commit('setHumidity', response.data);
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    },
};
export default {
  namespaced: true,
  state,
  actions,
  mutations
};