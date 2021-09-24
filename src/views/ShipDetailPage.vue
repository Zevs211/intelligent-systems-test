<template>
  <div class="ship-detail">
    <div class="ship-detail__name">{{ info.name }}</div>
    <ul class="ship-detail__data">
      <li v-for="(value, name, index) in info" :key="index">
        {{ name }}: {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ShipDetailPage",
  data() {
    return {
      shipDetail: null,
      info: null,
    };
  },
  created() {
    const shipsString = localStorage.getItem("starshipName");
    const ships = JSON.parse(shipsString);
    const foundShip = ships.find((ship) => ship.id === this.$route.params.id);
    this.shipDetail = foundShip;
  },
  async mounted() {
    const inf = await axios.get(this.shipDetail.url);
    this.info = inf.data;
  },
};
</script>

<style lang="scss" scoped>
.ship-detail {
  display: flex;
  flex-direction: column;
  width: 400px;
  color: yellow;
  &__name {
    font-family: "Times New Roman", Times, serif;
    font-size: 50px;
  }
  &__data {
    font-family: "Times New Roman", Times, serif;
    font-size: 24px;
  }
}
</style>