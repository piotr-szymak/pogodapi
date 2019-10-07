/*jshint esversion: 6 */
  // initial state
const axios = require('axios');

const state = () => ({
    temperatura: ""
});

const getters = {
    poraRoku: state => {
        return { wiosna:
          state.temperatura.substring(0, 2) > 15 &&
          state.temperatura.substring(0, 2) <= 25,
        lato:
          state.temperatura.substring(0, 2) > 25 &&
          state.temperatura.substring(0, 2) <= 40,
        jesien:
          state.temperatura.substring(0, 2) > 0 &&
          state.temperatura.substring(0, 2) < 15,
        zima:
          state.temperatura.substring(0, 2) > -20 &&
          state.temperatura.substring(0, 2) <= 0,
        upal: state.temperatura.substring(0, 2) > 40,
        mroz: state.temperatura.substring(0, 2) <= -20
        };
  }
};
// mutations
const mutations = {
    setRecords (state, response) {
    state.temperatura = response;
  },

};
// actions
const actions = {
    getRecords({commit} ){
        return axios.get("http://192.168.1.31/aktualna-temperatura")
        .then(response => {
          commit('setRecords', response.data);
        })
        .catch(function(error) {
          console.error(error);
        });
    },
};

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
};