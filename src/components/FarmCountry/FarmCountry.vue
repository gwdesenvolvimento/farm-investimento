<template>
  <v-expansion-panel>
    <v-expansion-panel-header @click="fetchMoreDetails">
      <v-row class="d-flex flex-column justify-center">
        <v-card class="country">
          <v-card-title class="justify-center">
            {{ country.Country }}
          </v-card-title>
          <v-card-text>
            <v-row>
              <farm-card-info
                class="col-4"
                title="Total de Casos"
                :value="parseFloat(country.TotalConfirmed)"
              />
              <farm-card-info
                title="Mortes"
                class="col-4"
                :value="parseFloat(country.TotalDeaths)"
              />
              <farm-card-info
                title="Fatalidade"
                class="col-4"
                :value="country.fatalidadePercentual"
                :showPercentual="true"
              />
            </v-row>
          </v-card-text>
        </v-card>
      </v-row>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row class="d-flex flex-column justify-center" @click="alert('teste')">
        <v-col>
          <farm-more-info style="margin-left: -10px" v-if="!isLoadingDetails" />

          <div class="d-flex justify-center mt-2 mb-2" v-if="isLoadingDetails">
            <v-progress-circular indeterminate color="#d34542" size="70" />
          </div>
        </v-col>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<style scoped>
.country {
  border: 1px solid var(--light);
  margin-top: 1rem;
}
.v-card__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gray);
}

@media only screen and (max-width: 600px) {
  .country {
    width: 100%;
  }
  .v-card__title {
    font-size: 1rem;
  }
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FarmCountry",
  data: () => ({
    panel: null,
  }),
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["isLoadingDetails"]),
  },
  methods: {
    fetchMoreDetails() {
      this.$store.dispatch("fetchLstCovidCasesByCountry", this.country.Country);
    },
  },
};
</script>
