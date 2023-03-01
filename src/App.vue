<template>
  <v-app>
    <farm-navbar />
    <v-main>
      <farm-header />
      <v-container>
        <farm-filter />
        
        <div class="d-flex justify-center mt-2 mb-2" v-if="showLoading">
          <v-progress-circular 
            indeterminate 
            color="#d34542"
            size="70"
          >
          </v-progress-circular>
        </div>

        <div v-if="!showLoading && !isCachingInProgress">
          <div v-for="country in lstFilteredCovidCases" :key="country.ID" >
            <farm-country :country="country" />
          </div>
        </div>
        
        <div v-if="isCachingInProgress">
          <v-row class="mt-5 justify-center">
            <v-alert type="warning">
              O servidor está cacheando novas informação, mas você não ficará sem os dados, exibiremos para você os dados globais por enquanto ok?
            </v-alert>
          </v-row>
          
          <farm-global 
            :global-data="lstFilteredCovidCases.Global"
          />
        </div>
        
        
      </v-container>
    </v-main>
  </v-app>
</template>
<style>
  .v-toolbar__content {
    background-color: #fff;
  }
  .alert-width{
     width: 70%;
  }
</style>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  data: () => ({
  }),
  mounted() {
    this.$store.dispatch('fetchLstCovidCases');
  },
  computed: {
    ...mapGetters(['lstFilteredCovidCases','apiMessage', 'showLoading', 'isCachingInProgress'])
  }
};
</script>
