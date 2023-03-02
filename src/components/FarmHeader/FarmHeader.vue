<template>
    <v-row 
        class="d-flex justify-space-between main-background"
    >
        <v-col 
            class="d-flex flex-column justify-center right-col col-12 col-md-6"
        >
            <h3 
                class="title"
            >
                Conheça o Covidômetro
            </h3>
            <span 
                class="content"
            >
                Fique atualizado com velocidade e transparência. O Covidômetro é uma 
                ferramenta que mostra para você em tempo real o número de casos e óbitos 
                relacionados a pandemia da COVID-19 ao redor do mundo.
            </span>
        </v-col>
        <v-col 
            class="left-col col-12 col-md-6"
        >
            <img src="../../assets/img/doctors.svg" class="">
        </v-col>
    </v-row>
</template>

<style scoped>
    .main-background {
        background: linear-gradient(170deg, rgba(221,177,171,0.17970938375350143) 0%, rgba(255,255,255,1) 65%);
    }
    .right-col{
        padding-left: 5.625rem;
    }
    .left-col{
        padding-right: 5.625rem;
        display: flex;
        justify-content: flex-end;
    }
    img {
        width:50%;
    }
    .title {
        font-size: 3.2rem !important;
        color: var(--gray) !important;
        font-weight: 700;
        line-height: 3rem;
        margin-bottom: 1rem;
    }
    .content {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 500;
        color: var(--gray);
        margin-bottom: 16px;
    }
    @media only screen and (max-width: 600px) {
        .title {
            font-size: 2.5rem !important;
            color: var(--gray) !important;
            font-weight: 700;
            line-height: 3rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }

        .right-col{
            padding-left: 2.625rem;
        }

        .left-col{
            padding-right: 0;
            display: flex;
            justify-content: center;
        }
    }
</style>
<script>
export default {
    name: 'FarmHeader',
};
</script>