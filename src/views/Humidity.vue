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

<script>
import TwojaTemperatura from "@/components/TwojaTemperatura.vue";
import progressbar from "@/components/progressbar.vue";
import humiditybar from "@/components/humiditybar.vue";
import {store} from '@/store';
import {mapState, mapGetters} from 'vuex';



export default {
   name: "humidity",
   store,
  components: {
    TwojaTemperatura,
    progressbar,
    humiditybar,
    
  },
  created() {
    this.$store.dispatch('oneTemp/getRecords')
    console.log(this.poraRoku);
  },
  computed: {
      ...mapState({
        temperatura: state => state["oneTemp"].temperatura,
      }),
      ...mapGetters({
        poraRoku: 'oneTemp/poraRoku'
      })
  },
  // methods: {
  //   ...mapActions({
  //     poraRoku: 'oneTemp/getPoraRoku',
  //   }),
  // }
}

</script>