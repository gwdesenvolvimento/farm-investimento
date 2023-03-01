<template>
    <v-row 
        class="d-flex justify-space-between main-background"
    >
        <v-col 
            class="d-flex flex-column justify-center ml-16"
        >
            <h3 
                class="title"
            >
                Conheça o Covidômetro
            </h3>
            <span 
                class="content mb-16"
            >
                Fique atualizado com velocidade e transparência. O Covidômetro é uma 
                ferramenta que mostra para você em tempo real o número de casos e óbitos 
                relacionados a pandemia da COVID-19 ao redor do mundo.
            </span>
        </v-col>
        <v-col 
            class="d-flex fle-column justify-end mr-16"
        >
            <img src="../../assets/img/doctors.svg">
        </v-col>
    </v-row>
</template>

<style scoped>
    .main-background {
        background: linear-gradient(170deg, rgba(221,177,171,0.17970938375350143) 0%, rgba(255,255,255,1) 65%);
    }

    .title {
        font-size: 3.2rem !important;
        color: var(--gray) !important;
        font-weight: 700;
        line-height: 6rem;
    }

    .content {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 500;
        color: var(--gray);
    }
</style>
<script>
export default {
    name: 'FarmHeader',
};
</script>