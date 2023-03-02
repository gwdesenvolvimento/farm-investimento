<template>
  <div class="d-flex justify-center">
    <v-card class="filter">
      <v-card-title class="justify-center"> Filtrar dados sobre um país </v-card-title>
      <v-card-text>
        <v-row class="pr-md-16 pl-md-16">
          <v-col class="col-md-7 col-12">
            <v-text-field
              label="Filtrar dados sobre um país "
              placeholder="Digite o nome do País"
              prepend-inner-icon="mdi-magnify"
              color="primary"
              data-testid="input-field"
              v-model="countryName"
              @keydown="filterCountry"
              @keyup="filterCountry"
            />
          </v-col>
          <v-col xs="12">
            <v-radio-group
              v-model="optionOrder"
              @change="orderCountries"
              label="Ordenação"
            >
              <v-radio label="A|Z" value="ASC|COUNTRY" />
              <v-radio label="Z|A" value="DESC|COUNTRY" />
              <v-radio label="Totais de Casos" value="ASC|TOTAIS" />
              <v-radio label="Totais de Mortes" value="ASC|MORTES" />
              <v-radio label="Fatalidades" value="ASC|FATALIDADES" />
            </v-radio-group>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<style scoped>
.filter {
  width: 70%;
  border: 1px solid var(--light);
}

.filter-row {
  padding-left: 120px;
}

.v-card__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gray);
}

@media only screen and (max-width: 600px) {
  .filter {
    width: 100%;
    margin-top: 0px;
  }
  .v-card__title {
    font-size: 0.875rem;
  }
}
</style>
<script>
import { mapActions } from "vuex";

export default {
  name: "FarmFilter",
  data: () => ({
    countryName: "",
    optionOrder: "ASC|COUNTRY",
  }),
  methods: {
    ...mapActions(["filterLstCovidCases", "orderListOfCountries"]),
    filterCountry() {
      this.$store.dispatch("filterLstCovidCases", this.countryName);
    },
    orderCountries() {
      this.$store.dispatch("orderListOfCountries", this.optionOrder);
    },
  },
};
</script>
