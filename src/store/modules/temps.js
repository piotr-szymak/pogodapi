//  data: () => ({
//     temperatura: ""
//   }),
//   created() {
//     this.allRecords();
//   },
//   // bgImage() {
//   //   this.background();
//   // },
//   computed: {
//     // a computed getter
//     shortTemp: function() {
//       return this.temperatura.substring(0, 2) + "°C";
//     },
//     poraRoku: function() {
//       return {
//         wiosna:
//           this.temperatura.substring(0, 2) > 15 &&
//           this.temperatura.substring(0, 2) <= 25,
//         lato:
//           this.temperatura.substring(0, 2) > 25 &&
//           this.temperatura.substring(0, 2) <= 40,
//         jesien:
//           this.temperatura.substring(0, 2) > 0 &&
//           this.temperatura.substring(0, 2) < 15,
//         zima:
//           this.temperatura.substring(0, 2) > -20 &&
//           this.temperatura.substring(0, 2) <= 0,
//         upal: this.temperatura.substring(0, 2) > 40,
//         mroz: this.temperatura.substring(0, 2) <= -20
//       };
//     }

//     //   colorProp: function() {
//     //     return Object.keys(this.colorData).find(
//     //       key => this.colorData[key] === true
//     //     );
//     //   }
//   },

//   methods: {
//     allRecords: function() {
//       axios
//         .get("http://192.168.1.31/aktualna-temperatura")
//         .then(response => {
//           this.temperatura = response.data;
//         })
//         .catch(function(error) {
//           console.log(error);
//         });
//     }
//   }
const axios = require('axios');
  // initial state
const state = {
  data: () => ({
    temperatura: ""
  }),
}

// mutations
const mutations = {
  setRecords (state, response) {
    state.temperatura = response;
  }
}

// actions
const actions = {
    // allRecords: function() {
        getRecords({commit} ){
        console.log('dupa');
        axios.get("http://192.168.1.31/aktualna-temperatura")
        .then(response => {
          commit('setRecords', response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
}



export default {
  namespaced: true,
  state,
  actions,
  mutations
}