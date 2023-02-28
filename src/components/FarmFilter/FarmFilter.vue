<template>
    <div class="d-flex justify-center">
        <v-card class="filter">
            <v-card-title class="justify-center">
                Filtrar dados sobre um país 
            </v-card-title>
            <v-card-text>
                <v-text-field append-icon="fa-solid fa-search" placeholder="Digite o nome do país"/>
            </v-card-text>
        </v-card>
    </div>
</template>
<style scoped>
    .filter {
        width: 70%;
        margin-top: -100px;
        border: 1px solid var(--light);
    }

</style>
<script>
export default {
    name: 'FarmFilter',
    data: () => ({
        //
    }),
};
</script>