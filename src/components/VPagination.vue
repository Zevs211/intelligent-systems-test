<template>
  <div class="container">
    <div>
      <v-ship v-for="ship in shipList" :key="ship.id" :shipData="ship" />
    </div>
    <div class="container__pagination">
      <div @click="decrementPage" class="arrow"><span>❮</span></div>
      <span>{{ paginationText }}</span>
      <div @click="incrementPage" class="arrow"><span>❯</span></div>
    </div>
  </div>
</template>

<script>
import VShip from "./VShip.vue";
import { starShipsList, deepClone } from "@/helpers";

export default {
  name: "v-list",
  props: {
    filteredShips: {
      type: Array,
      required: true,
    },
  },
  components: {
    VShip,
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 0,
      shipList: [],
      shipsPerPage: [],
      totalListShips: [],
    };
  },
  computed: {
    paginationText() {
      return `${this.currentPage} of ${this.totalPages}`;
    },
  },

  watch: {
    filteredShips(newValue) {
      this.shipList = newValue;
    },
  },
  methods: {
    paginate() {
      const shipsPerPage = this.shipsPerPage;
      const shipList = this.totalListShips.slice(
        (this.currentPage - 1) * shipsPerPage.length,
        this.currentPage * shipsPerPage.length
      );
      this.shipsPerPage = deepClone(shipList);
      this.$emit("on-ships-fetch", this.shipsPerPage);
    },
    decrementPage() {
      this.currentPage = Math.max(this.currentPage - 1, 1);
      this.paginate();
    },
    incrementPage() {
      this.currentPage = Math.min(this.currentPage + 1, this.totalPages);
      this.paginate();
    },
  },
  async mounted() {
    this.shipList = await starShipsList();

    const copyList = deepClone(this.shipList);
    this.shipsPerPage = copyList.slice(0, 3);
    this.totalPages = Math.ceil(
      this.shipList.length / this.shipsPerPage.length
    );
    console.log(this.shipList);
    this.totalListShips = this.shipList;
    this.$emit("on-ships-fetch", this.shipsPerPage);
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;
  &__pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    color: yellow;
    .arrow {
      padding: 0 8px;
      color: lawngreen;
      cursor: pointer;
    }
  }
}
</style>