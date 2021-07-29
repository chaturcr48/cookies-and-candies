<template>
  <div>
    <AppNavigation />

    <v-container class="router-container" id="routerContainer">
      <v-tabs>
        <v-tab
          v-for="(item, index) in routingItems"
          :key="index"
          color='purple'
          :to="item.path"
        >
        {{item.name}}
          <!-- <router-link class="router-link" :to="item.path">
            <span>{{ item.name }} </span>
          </router-link> -->
        </v-tab>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
import AppNavigation from "./AppNavigation.vue";

export default {
  components: {
    AppNavigation,
  },
  data() {
    return {
      routingItems: [
        { path: "/", name: "Home" },
        { path: "/dailyBid", name: "Daily Bid" },
        { path: "/newestArrival", name: "Newest Arrival" },
        { path: "/addProduct", name: "Add Product" },
      ],
    };
  },
  methods: {},
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.router-link {
  margin: 0px 5px;
  text-decoration: none;
  padding: 5px;
  border-radius: 8px;
}
</style>
