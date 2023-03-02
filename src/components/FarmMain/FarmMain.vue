<template>
  <div>
    <div class="d-flex justify-center mt-2 mb-2" v-if="showLoading">
      <v-progress-circular indeterminate color="#d34542" size="70" />
    </div>

    <div v-if="!showLoading && !(apiMessage !== '')">
      <v-expansion-panels accordion style="border: none !important">
        <v-col>
          <div v-for="country in lstFilteredCovidCases" :key="country.ID">
            <farm-country :country="country" />
          </div>
        </v-col>
      </v-expansion-panels>
    </div>

    <div v-if="apiMessage !== ''">
      <v-row class="mt-5 justify-center">
        <v-alert type="warning">
          {{ apiMessage }}
        </v-alert>
      </v-row>
    </div>
  </div>
</template>
<style>
.v-toolbar__content {
  background-color: #fff;
}

.alert-width {
  width: 70%;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
  name: "FarmMain",
  data: () => ({}),
  mounted() {
    this.$store.dispatch("fetchLstCovidCases");
  },
  computed: {
    ...mapGetters([
      "lstFilteredCovidCases",
      "apiMessage",
      "showLoading",
      "isCachingInProgress",
    ]),
  },
};
</script>
