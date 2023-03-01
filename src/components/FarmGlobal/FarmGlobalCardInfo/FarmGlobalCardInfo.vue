<template>
    <v-col class="d-flex justify-center">
        <v-card class="border-none">
            <v-card-title class="d-flex title-info justify-center">{{ title }}</v-card-title>
            <v-card-text class="d-flex justify-center">
                <span class="value-span">
                    {{ formatedValue }}
                    <span v-if="showPercentual">%</span>
                </span>
            </v-card-text>
        </v-card>
    </v-col>
</template>
<style scoped>
    .value-span {
        color: var(--orange);
        font-size: 2rem;
    }   
    .title-info {
        padding: 0.2rem;
    } 
    .v-card__title  {
        font-size: 0.785rem;
        font-weight: 400;
        color: var(--gray);
    }
</style>
<script>
export default {
    name: 'FarmGlobalCardInfo',
    data: () => ({
        //
    }),
    props: {
        title: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: Number
        },
        showPercentual: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        formatedValue() {
            return this.value.toLocaleString('pt-BR')
        }
    }
};
</script>
