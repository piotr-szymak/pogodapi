<template>
  <div id="progressbar">
    <div class="text-center">
      <v-progress-circular
        class="value-text"
        :value="shortTemp"
        :size="200"
        :rotate="-90"
        :width="20"
      >{{ shortTemp }}</v-progress-circular>
    </div>
  </div>
</template>


<style scoped>
.v-progress-circular {
  top: 40px;
  color: #12a697;
  z-index: 999;
}

.v-progress-circular:before {
  content: "";
  display:block;
  position: absolute;
  background: rgba(255, 255, 255, 0.349);
  border-radius: 100%;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.value-text {
  font-size: 4rem;
}
</style>


<script>

import {store} from '@/store'
import { mapState} from 'vuex';
export default {
  store,
  // data: () => ({
  //   temperatura: ""
  // }),
  // created() {
  //   this.allRecords();
  // },
  // computed: {
  //   // a computed getter
  //   shortTemp: function() {
  //     return this.temperatura.substring(0, 2) + "°C";
  //   }
  // },
  // methods: {
  //   allRecords: function() {
  //     axios
  //       .get("http://192.168.1.31/aktualna-temperatura")
  //       .then(response => {
  //         this.temperatura = response.data;
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   }
  // }
  // created() {
  //   this.$store.dispatch('oneTemp/getRecords')
   
    
  // },
    computed: {
      ...mapState({
        temperatura: state => state["oneTemp"].temperatura,
      }),
      shortTemp: function() {
      return this.temperatura.substring(0, 2) + "°C";
      }
  },
};
</script>