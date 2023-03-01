<template>
    <div class="d-flex justify-center">
        <v-card class="filter">
            <v-card-title class="justify-center">
                Filtrar dados sobre um país 
            </v-card-title>
            <v-card-text>
                <div class="pr-16 pl-16">
                    <v-text-field
                        label="Filtrar dados sobre um país "
                        placeholder="Digite o nome do País"
                        prepend-inner-icon="mdi-magnify"
                        color="#d34542"
                        v-model="countryName"
                        @change="filterCountry"
                    ></v-text-field>
                </div>
                
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
    }),
    methods: {
        filterCountry() {
            this.$store.dispatch('filterLstCovidCases', this.countryName);
        },
    }
};
</script>