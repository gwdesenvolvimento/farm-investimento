<template>
  <v-app>
    <farm-navbar />
    <v-main>
      <farm-header />
      <v-container>
        <farm-filter />
        <farm-main />
      </v-container>
    </v-main>
  </v-app>
</template>

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
