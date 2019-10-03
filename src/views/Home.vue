<template>
  <div id="bgRok" v-bind:class="poraRoku">
    <div id="app" class="wrapper">
      <div id="nav">
        <v-app id="pogoda">
          <!-- <v-img :aspect-ratio="16/9" src="@/assets/lato.jpg"> -->

          <div>
            <v-app-bar>
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
                  <v-list-item>
                    <v-list-item-title>Wilgotność</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Temperatura</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Historia</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-app-bar>
          </div>

          <div class="bg">
            <v-container fluid fill-height>
              <v-layout wrap justify-center>
                <v-flex xs6>
                  <progressbar />
                </v-flex>
                <v-flex xs6>
                  <humiditybar />
                </v-flex>
                <div class="chartBackground"></div>
                <v-flex fluid align-self-end sm10 class="chartTemp">
                  <TwojaTemperatura />
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
.v-menu { 
  z-index: 9999;
}

@media (min-width: 600px) {
  .wrapper {
    margin: auto;
    width: 500px;
    height: 100%;
  }

  .wiosna .wrapper {
    box-shadow: 1px 3px 15px 5px var(--colorWiosna);
  }
  .lato .wrapper {
    box-shadow: 1px 3px 15px 5px var(--colorLato);
  }
  .jesien .wrapper {
    box-shadow: 1px 3px 15px 5px var(--colorJesien);
  }
  .zima .wrapper {
    box-shadow: 1px 3px 15px 5px var(--colorZima);
  }
  .upal .wrapper {
    box-shadow: 1px 3px 15px 5px var(--colorUpal);
  }
  .mroz .wrapper {
    box-shadow: 1px 3px 15px 5px var(--colorMroz);
  }
}

#bgRok.wiosna {
  background-image: url(../assets/wiosna.jpg);
}
#bgRok.lato {
  background-image: url(../assets/lato.jpg);
  background-size: cover;
}
#bgRok.jesien {
  background-image: url(../assets/jesien.jpg);
  background-size: cover;
  background-position-y: -300px;
}
#bgRok.zima {
  background-image: url(../assets/zima2.jpg);
  background-position-y: -350px;
}
#bgRok.upal {
  background-image: url(../assets/goraco.jpg);
  background-position-y: -2580px;
}
#bgRok.mroz {
  background-image: url(../assets/zima.jpg);
  background-position-y: -350px;
}
:root {
  --colorWiosna: #d97ea8;
  --colorLato: #12a697;
  --colorJesien: #733702;
  --colorZima: #c1d4d9;
  --colorMroz: #a3bfd9;
  --colorUpal: #593325;
}
.v-app-bar.theme--light.v-sheet,
.theme--light.v-btn.v-btn--icon {
  color: white;
}

.wiosna .v-app-bar.theme--light.v-sheet {
  background-color: var(--colorWiosna);
}
.lato .v-app-bar.theme--light.v-sheet {
  background-color: var(--colorLato);
}
.jesien .v-app-bar.theme--light.v-sheet {
  background-color: var(--colorJesien);
}
.zima .v-app-bar.theme--light.v-sheet {
  background-color: var(--colorZima);
}
.mroz .v-app-bar.theme--light.v-sheet {
  background-color: var(--colorMroz);
}
.upal .v-app-bar.theme--light.v-sheet {
  background-color: var(--colorUpal);
}

.chartBackground {
  background: rgba(255, 255, 255, 0.397);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: block;
  /* background-image: url('http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_527bf56961712_1.JPG'); */
  width: 120%;
  height: 45%;
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -o-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(20px);
  overflow: hidden;
}
.chartTemp {
  z-index: 9999;
}

.wiosna .v-progress-circular {
  color: var(--colorWiosna);
}
.lato .v-progress-circular {
  color: var(--colorLato);
}
.jesien .v-progress-circular {
  color: var(--colorJesien);
}
.zima .v-progress-circular {
  color: var(--colorZima);
}
.mroz .v-progress-circular {
  color: var(--colorMroz);
}
.upal .v-progress-circular {
  color: var(--colorUpal);
}

.wiosna .temp-chart .grid line,
.temp-chart .labels line {
  stroke: var(--colorWiosna);
}
.lato .temp-chart .grid line,
.temp-chart .labels line {
  stroke: var(--colorLato);
}
.jesien .temp-chart .grid line,
.temp-chart .labels line {
  stroke: var(--colorJesien);
}
.zima .temp-chart .grid line,
.temp-chart .labels line {
  stroke: var(--colorZima);
}
.mroz .temp-chart .grid line,
.temp-chart .labels line {
  stroke: var(--colorMroz);
}
.upal .temp-chart .grid line,
.temp-chart .labels line {
  stroke: var(--colorUpal);
}

.wiosna .curve-temp .stroke {
  stroke: var(--colorWiosna);
}
.lato .curve-temp .stroke {
  stroke: var(--colorLato);
}
.jesien .curve-temp .stroke {
  stroke: var(--colorJesien);
}
.zima .curve-temp .stroke {
  stroke: var(--colorZima);
}
.mroz .curve-temp .stroke {
  stroke: var(--colorMroz);
}
.upal .curve-temp .stroke {
  stroke: var(--colorUpal);
}

.wiosna .colorGradPory {
  stop-color: var(--colorWiosna);
}
.lato .colorGradPory {
  stop-color: var(--colorLato);
}
.jesien .colorGradPory {
  stop-color: var(--colorJesien);
}
.zima .colorGradPory {
  stop-color: var(--colorZima);
}
.mroz .colorGradPory {
  stop-color: var(--colorMroz);
}
.upal .colorGradPory {
  stop-color: var(--colorUpal);
}
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
.lato .bg {
  background-image: url("../assets/lato.jpg");
}
.wiosna .bg {
  background-image: url("../assets/wiosna.jpg");
}
.jesien .bg {
  background-image: url("../assets/jesien.jpg");
}
.zima .bg {
  background-image: url("../assets/zima2.jpg");
}
.upal .bg {
  background-image: url("../assets/goraco.jpg");
}
.mroz .bg {
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
import humiditybar from "@/components/humiditybar.vue";

export default {
  name: "home",
  components: {
    TwojaTemperatura,
    progressbar,
    humiditybar
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
    poraRoku: function() {
      return {
        wiosna:
          this.temperatura.substring(0, 2) > 15 &&
          this.temperatura.substring(0, 2) <= 25,
        lato:
          this.temperatura.substring(0, 2) > 25 &&
          this.temperatura.substring(0, 2) <= 40,
        jesien:
          this.temperatura.substring(0, 2) > 0 &&
          this.temperatura.substring(0, 2) < 15,
        zima:
          this.temperatura.substring(0, 2) > -20 &&
          this.temperatura.substring(0, 2) <= 0,
        upal: this.temperatura.substring(0, 2) > 40,
        mroz: this.temperatura.substring(0, 2) <= -20
      };
    }

    //   colorProp: function() {
    //     return Object.keys(this.colorData).find(
    //       key => this.colorData[key] === true
    //     );
    //   }
  },

  methods: {
    allRecords: function() {
      axios
        .get("http://192.168.1.31/aktualna-temperatura")
        .then(response => {
          this.temperatura = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
