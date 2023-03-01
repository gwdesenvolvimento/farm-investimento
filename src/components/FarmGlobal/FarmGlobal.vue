<template>
    <div 
        class="d-flex justify-center"
    >
        <v-card 
            class="country"
        >
            <v-card-title 
                class="justify-center"
            >
                Informações Globais
            </v-card-title>
            <v-card-text>
                <v-row >
                    <farm-global-card-info 
                        title="Total Confirmados" 
                        :value="globalData.TotalConfirmed"
                    />
                    <farm-global-card-info 
                        title="Total de Mortes" 
                        :value="globalData.TotalDeaths"
                    />
                    <farm-global-card-info 
                        title="Total de Recuperados" 
                        :value="globalData.TotalRecovered"
                    />
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
    name: 'FarmGlobal',
    data: () => ({
        //
    }),
    props: {
        globalData: {
            type: Object,
            required: false
        }
    },
};
</script>
