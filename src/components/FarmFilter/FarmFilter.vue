<template>
    <div class="d-flex justify-center">
        <v-card class="filter">
            <v-card-title class="justify-center">
                Filtrar dados sobre um país 
            </v-card-title>
            <v-card-text>
                <v-row class="pr-16 pl-16">
                    <v-col cols="7" xs="12">
                        <v-text-field
                            label="Filtrar dados sobre um país "
                            placeholder="Digite o nome do País"
                            prepend-inner-icon="mdi-magnify"
                            color="primary"
                            v-model="countryName"
                            @change="filterCountry"
                        />
                    </v-col>
                    <v-col xs=12>
                        <v-radio-group 
                            v-model="optionOrder"
                            @change="orderCountries"
                        >
                            <v-radio
                                label="Ordenar A|Z"
                                value="ASC|COUNTRY"
                            />
                            <v-radio
                                label="Ordenar Z|A"
                                value="DESC|COUNTRY"
                            />
                            <v-radio
                                label="Maiores Totais de Casos"
                                value="ASC|TOTAIS"
                            />
                            <v-radio
                                label="Maiores Totais de Mortes"
                                value="ASC|MORTES"
                            />
                            <v-radio
                                label="Maiores Fatalidades"
                                value="ASC|FATALIDADES"
                            />
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
        margin-top: -80px;
        border: 1px solid var(--light);
    }

    .v-card__title  {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--gray);
    }

</style>
<script>
export default {
    name: 'FarmFilter',
    data: () => ({
        countryName: '',
        optionOrder: 'ASC'
    }),
    methods: {
        filterCountry() {
            this.$store.dispatch('filterLstCovidCases', this.countryName);
        },
        orderCountries() {
            this.$store.dispatch('orderListOfCountries', this.optionOrder)
        }
    }
};
</script>