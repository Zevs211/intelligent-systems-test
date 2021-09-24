<template>
  <div class="ship" @click="openShipUrl">
    <span class="ship__name">Ship name: {{ shipData.name }}</span>
    <span class="ship__model">Ship model:{{ shipData.model }}</span>
  </div>
</template>

<script>
export default {
  name: "v-ship",
  props: ["shipData"],

  methods: {
    openShipUrl() {
      this.$router.push({
        name: "ship-detail-page",
        params: { id: this.shipData.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ship {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 400px;
  border-radius: 5px;
  background-color: rgb(184, 206, 248);
  margin-top: 15px;
  cursor: pointer;
  &__name {
    font-family: "Times New Roman", Times, serif;
    font-size: 24px;
  }
  &__model {
    font-family: "Times New Roman", Times, serif;
    font-size: 14;
  }
  &:hover {
    background-color: rgb(156, 186, 243);
  }
}
</style>