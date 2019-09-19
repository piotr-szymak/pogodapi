<template>
  <div class="wrapper">
    <div id="app">
      <div id="nav">
        <v-app 
         
        id="pogoda">
          <!-- <v-img :aspect-ratio="16/9" src="@/assets/lato.jpg"> -->

          <div>
            <v-app-bar color="#12A697" dark>
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

          <progressbar></progressbar>

          <v-layout column wrap class="my-12" align-center>
            <v-flex xs12 sm4 class="my-4">
              <div class="text-center">
                <h2 class="headline white--text">Sunbath time!</h2>
              </div>
            </v-flex>
            <v-flex xs12 sm4>
              <TwojaTemperatura></TwojaTemperatura>
            </v-flex>
          </v-layout>
          <!-- </v-img> -->
        </v-app>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style scoped>
 
#pogoda {
  background-image: url("../assets/lato.jpg");
  height: 100vh;
   background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
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
  }
};
</script>
