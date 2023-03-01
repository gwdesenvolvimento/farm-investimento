<template>
    
    <div class="d-flex justify-center">
        <v-card class="country">
            <v-card-title class="justify-center">
                {{ country.Country }}
            </v-card-title>
            <v-card-text>
                <v-row >
                    <farm-card-info title="Total de Casos" :value="country.TotalConfirmed"/>
                    <farm-card-info title="Mortes" :value="country.TotalDeaths"/>
                    <farm-card-info title="Fatalidade" :value="percentualDeath" :showPercentual="true"/>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
    
</template>
<style scoped>
    .country {
        width: 70%;
        border: 1px solid var(--light);
        margin-top: 1rem;
        
    }
    .v-card__title  {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--gray);
    }
</style>

<script>
export default {
    name: 'FarmCountry',
    data: () => ({
        //
    }),
    props: {
        country: {
            type: Object,
            required: true
        }
    },
    computed: {
        percentualDeath() {
            return (this.country.TotalDeaths * 100 / this.country.TotalConfirmed).toFixed(2)
        }
    }
};
</script>
