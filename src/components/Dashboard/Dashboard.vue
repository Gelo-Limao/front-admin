<template>
  <v-row>
    <p>Dashboard</p>
  </v-row>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({}),

  computed: {
    ...mapGetters({}),
  },

  mounted() {},

  async created() {
    await this.initialize();
  },

  methods: {
    ...mapActions({}),
    async initialize() {},
  },
};
</script>