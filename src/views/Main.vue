<template>
  <div class="container">
    <div class="container__search">
      <!-- <v-search @input="onSearch" /> -->
    </div>
    <!-- <v-pagination
      @on-ships-fetch="onShipsFetch"
      :filteredShips="shipsInParent"
    /> -->
    <v-pagination />
  </div>
</template>

<script>
import VPagination from "@/components/VPagination.vue";
// import VSearch from "@/components/VSearch.vue";

export default {
  name: "Main",
  components: {
    VPagination,
    // VSearch,
  },
  data() {
    return {
      allShips: [],
      shipsInParent: [],
    };
  },
  methods: {
    // onSearch(value) {
    //   const filteredShips = this.allShips.filter((shipIterator) =>
    //     shipIterator.name.toLowerCase().includes(value)
    //   );
    //   this.shipsInParent = filteredShips;
    // },
    // onShipsFetch(value) {
    //   this.shipsInParent = value;
    //   this.allShips = value;
    // },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 400px;
  display: flex;
  flex-direction: column;
}
</style>
