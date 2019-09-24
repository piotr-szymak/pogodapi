<template>
  <div class="wrapper">
    <div id="app">
      <div id="nav">
        <v-app id="pogoda">
          <!-- <v-img :aspect-ratio="16/9" src="@/assets/lato.jpg"> -->

          <div>
            <v-app-bar dark :color="'#'+colorData">
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
.pro-bar-wiosna .v-progress-circular {
  color: #d97ea8;
}
.pro-bar-lato .v-progress-circular {
  color: #12a697;
}
.pro-bar-jesien .v-progress-circular {
  color: #733702;
}
.pro-bar-zima .v-progress-circular {
  color: #c1d4d9;
}
.pro-bar-mroz .v-progress-circular {
  color: #a3bfd9;
}
.pro-bar-upal .v-progress-circular {
  color: #593325;
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
  /* background-image: url("../assets/lato.jpg");  */
  /* */
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
    temperatura: "",
   
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
    colorData: function() {
      // return "d97ea8" ? this.bgTemp.bgwiosna == true : !true;
      // return "12a697" ? this.bgTemp.bglato == true : !true;
      // return "733702" ? this.bgTemp.bgjesien == true : !true;
      // return "c1d4d9" ? this.bgTemp.bgzima == true : !true;
      // return "593325" ? this.bgTemp.bgupal == true : !true;
      // return "a3bfd9" ? this.bgTemp.bgmroz == true : !true;
       

      // if (this.bgTemp.bgwiosna == true){
      //   return "d97ea8";
      // }
      // else if (this.bgTemp.bglato == true){
      //   return "12a697";
      // }
      //  else if (this.bgTemp.bgjesien == true){
      //   return "733702";
      // }
      //  else if (this.bgTemp.bgzima == true){
      //   return "c1d4d9";
      // }
      // else  if (this.bgTemp.bgupal == true){
      //   return "593325";
      // }
      //  else if (this.bgTemp.bgmroz == true){
      //   return "a3bfd9";
      // }

      return {
        "d97ea8":this.bgTemp.bgwiosna,
        "12a697":this.bgTemp.bglato,
        "733702":this.bgTemp.bgjesien,
        "c1d4d9":this.bgTemp.bgzima,
        "a3bfd9":this.bgTemp.bgupal,
        "593325":this.bgTemp.bgmroz 
      };
    },
    // colorProp: function(this.colorData, true) {
    //   return Object.keys(colorData).find(key => colorData[key] === true)
    // }
    
    // getKeyByValue: function(object, value) {
    // return Object.keys(object).find(key => object[key] === value);
    // }

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
          console.log(getKeyByValue(this.colorData, true));
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
