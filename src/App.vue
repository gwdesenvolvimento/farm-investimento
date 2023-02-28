<template>
  <v-app>
    <farm-navbar />
    <v-main>
      <farm-header />
     
      <v-container>

        <farm-filter />

        <div v-for="country in lstCountry" :key="country.ID">
          <farm-country :country="country" />
        </div>
        

      </v-container>
      
    </v-main>
  </v-app>
</template>
<style>
  .v-toolbar__content {
    background-color: #fff;
  }
</style>

<script>
import client from '@/services/http/client'
export default {
  name: 'App',
  data: () => ({
    lstCountry : []
  }),
  mounted() {
    this.fetchCountry();
  },  
  methods: {
    fetchCountry() {
      client.get('https://api.covid19api.com/summary')
        .then(response => {
          this.lstCountry = response.data.Countries
      })
    },
    filterCountry() {
      this.lstCountry = this.lstCountry.filter(item => item.Country == 'Brazil')
    }
  }
};
</script>
