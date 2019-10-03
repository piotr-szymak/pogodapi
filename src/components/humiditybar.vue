<template>
  <div id="humiditybar">
    <div class="text-center">
      <v-progress-circular
        class="value-text"
        :value="shortHumi"
        :size="200"
        :rotate="-90"
        :width="20"
      >{{ shortHumi }}</v-progress-circular>
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
import axios from "axios";

export default {
  data: () => ({
    humidity: ""
  }),
  created() {
    this.allRecords();
  },
  computed: {
    // a computed getter
    shortHumi: function() {
      return this.humidity.substring(0, 2) + "%";
    }
  },
  methods: {
    allRecords: function() {
      axios
        .get("http://192.168.1.31/aktualna-wilgotnosc")
        .then(response => {
          this.humidity = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>