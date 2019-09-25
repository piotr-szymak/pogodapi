<template>
  <div class="wrapper">
    <div id="app">
      <div id="nav">
        <v-app id="pogoda">
          <!-- <v-img :aspect-ratio="16/9" src="@/assets/lato.jpg"> -->

          <div>
            <v-app-bar dark :color="'#'+colorProp">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>

              <v-toolbar-title>Temperatura</v-toolbar-title>

              <div class="flex-grow-1"></div>

              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-app-bar>
          </div>

          <div class="bg" v-bind:class="bgTemp">
            <v-container fluid fill-height>
              <v-layout wrap justify-center>
                <v-flex xs12>
                  <progressbar v-bind:class="progressbar" />
                </v-flex>
                <v-flex fluid align-self-end sm10>
                  <TwojaTemperatura v-bind:class="colorChart" />
                </v-flex>
              </v-layout>
            </v-container>

            <!-- </v-img> -->
          </div>
        </v-app>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style>
:root {
  --colorWiosna: #d97ea8;
  --colorLato: #12a697;
  --colorJesien: #733702;
  --colorZima: #c1d4d9;
  --colorMroz: #a3bfd9;
  --colorUpal: #593325;
}

.pro-bar-wiosna .v-progress-circular {
  color: var(--colorWiosna);
}
.pro-bar-lato .v-progress-circular {
  color: var(--colorLato);
}
.pro-bar-jesien .v-progress-circular {
  color: var(--colorMroz);
}
.pro-bar-zima .v-progress-circular {
  color: var(--colorZima);
}
.pro-bar-mroz .v-progress-circular {
  color: var(--colorMroz);
}
.pro-bar-upal .v-progress-circular {
  color: var(--colorUpal);
}

.chartWiosna .temp-chart .grid line,
.temp-chart .labels line {
  stroke: var(--colorWiosna);
}
.chartLato .temp-chart .grid line,
.temp-chart .labels line {
  stroke: var(--colorLato);
}
.chartJesien .temp-chart .grid line,
.temp-chart .labels line {
  stroke: var(--colorJesien);
}
.chartZima .temp-chart .grid line,
.temp-chart .labels line {
  stroke: var(--colorZima);
}
.chartMroz .temp-chart .grid line,
.temp-chart .labels line {
  stroke: var(--colorMroz);
}
.chartUpal .temp-chart .grid line,
.temp-chart .labels line {
  stroke: var(--colorUpal);
}

.chartWiosna .curve-temp .stroke {
  stroke: var(--colorWiosna);
}
.chartLato .curve-temp .stroke {
  stroke: var(--colorLato);
}
.chartJesien .curve-temp .stroke {
  stroke: var(--colorJesien);
}
.chartZima .curve-temp .stroke {
  stroke: var(--colorZima);
}
.chartMroz .curve-temp .stroke {
  stroke: var(--colorMroz);
}
.chartUpal .curve-temp .stroke {
  stroke: var(--colorUpal);
}

.chartWiosna .colorGradPory {
  stop-color: var(--colorWiosna);
}
.chartLato .colorGradPory {
  stop-color: var(--colorLato);
}
.chartJesien .colorGradPory {
  stop-color: var(--colorJesien);
}
.chartZima .colorGradPory {
  stop-color: var(--colorZima);
}
.chartMroz .colorGradPory {
  stop-color: var(--colorMroz);
}
.chartUpal .colorGradPory {
  stop-color: var(--colorUpal);
}
</style>

<style scoped>
.wrapper {
  background: #12a697;
}
#pogoda {
  height: 100vh;
}
.bg {
  
  height: 100vh;
  width: 100%;
  background-position: center;
  background-position-y: 40%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.bglato {
  background-image: url("../assets/lato.jpg");
}
.bgwiosna {
  background-image: url("../assets/wiosna.jpg");
}
.bgjesien {
  background-image: url("../assets/jesien.jpg");
}
.bgzima {
  background-image: url("../assets/zima2.jpg");
}
.bgupal {
  background-image: url("../assets/goraco.jpg");
}
.bgmroz {
  background-image: url("../assets/zima.jpg");
}
a {
  text-decoration: none;
}

.navbar {
  z-index: 999;
}
</style>

<script>
// @ is an alias to /src
import TwojaTemperatura from "@/components/TwojaTemperatura.vue";
import progressbar from "@/components/progressbar.vue";

export default {
  name: "home",
  components: {
    TwojaTemperatura,
    progressbar
  },

  data: () => ({
    temperatura: ""
  }),
  created() {
    this.allRecords();
  },
  // bgImage() {
  //   this.background();
  // },
  computed: {
    // a computed getter
    shortTemp: function() {
      return this.temperatura.substring(0, 2) + "°C";
    },
    bgTemp: function() {
      return {
        bgwiosna:
          this.temperatura.substring(0, 2) > 15 &&
          this.temperatura.substring(0, 2) < 25,
        bglato:
          this.temperatura.substring(0, 2) > 25 &&
          this.temperatura.substring(0, 2) < 45,
        bgjesien:
          this.temperatura.substring(0, 2) > 0 &&
          this.temperatura.substring(0, 2) < 15,
        bgzima:
          this.temperatura.substring(0, 2) > -20 &&
          this.temperatura.substring(0, 2) < 0,
        bgupal: this.temperatura.substring(0, 2) > 45,
        bgmroz: this.temperatura.substring(0, 2) < -20
      };
    },

    progressbar: function() {
      return {
        "pro-bar-wiosna": this.bgTemp.bgwiosna,
        "pro-bar-lato": this.bgTemp.bglato,
        "pro-bar-jesien": this.bgTemp.bgjesien,
        "pro-bar-zima": this.bgTemp.bgzima,
        "pro-bar-upal": this.bgTemp.bgupal,
        "pro-bar-mroz": this.bgTemp.bgmroz
      };
    },

    colorChart: function() {
      return {
        chartWiosna: this.bgTemp.bgwiosna,
        chartLato: this.bgTemp.bglato,
        chartJesien: this.bgTemp.bgjesien,
        chartZima: this.bgTemp.bgzima,
        chartUpal: this.bgTemp.bgupal,
        chartMroz: this.bgTemp.bgmroz
      };
    },
    colorData: function() {
     
      return {
        d97ea8: this.bgTemp.bgwiosna,
        "12a697": this.bgTemp.bglato,
        "733702": this.bgTemp.bgjesien,
        c1d4d9: this.bgTemp.bgzima,
        "593325": this.bgTemp.bgupal,
        a3bfd9: this.bgTemp.bgmroz
      };
    },
    colorProp: function() {
      return Object.keys(this.colorData).find(
        key => this.colorData[key] === true
      );
    }

    
  },

  methods: {
    allRecords: function() {
      axios
        .get("http://192.168.1.31/aktualna-temperatura")
        .then(response => {
          this.temperatura = response.data;
          console.log(this.temperatura);
          console.log(this.bgTemp);
          console.log(this.progressbar);
          console.log(this.colorData);

          console.log(this.colorProp);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
