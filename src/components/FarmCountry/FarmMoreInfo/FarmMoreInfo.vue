<template>
  <v-card width="100%">
    <v-card-title> Últimos 5 dias </v-card-title>
    <v-card-text>
      <v-simple-table fixed-header height="300px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Data</th>
              <th class="text-left">Casos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in lstLastFiveDays" :key="item.name">
              <td>{{ formatData(item.Date) }}</td>
              <td>{{ item.Cases }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "FarmMoreInfo",
  data: () => ({}),
  mounted() {},
  computed: {
    ...mapGetters(["lstLastFiveDays"]),
  },
  methods: {
    formatData(date) {
      const data = new Date(date);

      const dia = data.getDate().toString().padStart(2, "0");
      const mes = (data.getMonth() + 1).toString().padStart(2, "0");
      const ano = data.getFullYear();
      return `${dia}/${mes}/${ano}`;
    },
  },
};
</script>
