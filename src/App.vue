<template>
  <v-app>
    <farm-navbar />
    <v-main>
      <farm-header />
      <v-container>
        <farm-filter />
        <farm-main />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
  mounted() {},
};
</script>
