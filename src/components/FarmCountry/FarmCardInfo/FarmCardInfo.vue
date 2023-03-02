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
.v-card__title {
  font-size: 0.785rem;
  font-weight: 400;
  color: var(--gray);
}
@media only screen and (max-width: 600px) {
  .v-card__title {
    font-size: 0.55rem;
    line-height: 10px;
  }
  .value-span {
    font-size: 0.675rem;
    font-weight: bold;
  }
}
</style>
<script>
export default {
  name: "FarmCardInfo",
  data: () => ({
    //
  }),
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: Number,
    },
    showPercentual: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    formatedValue() {
      return this.value.toLocaleString("pt-BR");
    },
  },
};
</script>
