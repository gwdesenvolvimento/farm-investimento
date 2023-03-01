<template>
  <v-app>
    <farm-navbar />
    <v-main>
      <farm-header />
      <v-container>
        <farm-filter />
        
        <div v-for="country in lstFilteredCovidCases" :key="country.ID" >
          <farm-country :country="country" />
        </div>
        
        <v-row class="d-flex flex-column justify-center">
          <v-col>
            <v-alert
              type="warning"
              class="alert-width"
              v-if="showLoading"
            >
              {{ apiMessage }}
            </v-alert>
          </v-col>
          
        </v-row>
        

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
    ...mapGetters(['lstFilteredCovidCases','apiMessage', 'showLoading'])
  }
};
</script>
