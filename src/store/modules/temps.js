/*jshint esversion: 6 */
  // initial state
const axios = require('axios');

const state = () => ({
    temperatura: ""
});


// mutations
const mutations = {
    setTemps (state, response) {
    state.temperatura = response;
  },

};
// actions
const actions = {
    getTemps({commit}){
        return axios.get("http://192.168.1.31/temperatura-10")
        .then(res => {
         const data = res.data.temp;
            var prevlab = 0;
         for (let key in data) {
        //console.log(data);
        this.dataset.push(data[key]);
        //this.labels.xLabels.push(moment(data[key]).format("HH"));
        var lab = key;
        if (lab != prevlab) {
          this.labels.xLabels.push(key.substring(0, 5));
        } else {
          this.labels.xLabels.push("");
        }
        prevlab = lab;
         }
        }).then(commit('setTemps', this.res))
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