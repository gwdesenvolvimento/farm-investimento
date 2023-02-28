<template>
    <v-col class="d-flex justify-center">
        <v-card>
            <v-card-title class="title-info">{{ title }}</v-card-title>
            <v-card-text class="d-flex justify-center">
                <span class="value-span">{{ value }}</span>
            </v-card-text>
        </v-card>
    </v-col>
</template>
<style scoped>
    .value-span {
        color: var(--orange);
        font-weight: bold;
    }   
    .title-info {
        padding: 0.2rem;
    } 
</style>
<script>
export default {
    name: 'FarmCardInfo',
    data: () => ({
        //
    }),
    props: {
        title: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: Number
        }
    }
};
</script>
