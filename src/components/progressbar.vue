<template>
  <div id="progressbar">
    <div class="text-center">
      <v-progress-circular
        class="value-text"
        :value="shortTemp"
        color="#12A697"
        :size="250"
        :rotate="-90"
        :width="30"
      >{{ shortTemp }}</v-progress-circular>
    </div>
  </div>
</template>


<style scoped>
.v-progress-circular {
  top: 50px;
}
.value-text {
  font-size: 5rem;
}
</style>


<script>
import axios from "axios";

export default {
  data: () => ({
    temperatura: ""
  }),
  created() {
    this.allRecords();
  },
  computed: {
    // a computed getter
    shortTemp: function() {
      return this.temperatura.substring(0, 2) + "°C";
    }
  },
  methods: {
    allRecords: function() {
      axios
        .get("http://192.168.1.31/aktualna-temperatura")
        .then(response => {
          this.temperatura = response.data;
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>