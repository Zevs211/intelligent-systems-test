<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;

  background-color: rgb(107, 92, 192);
}
</style>
