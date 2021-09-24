<template>
  <div>
    <input class="input" :placeholder="placeholder" v-model="search" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholder: "Search Ship",
      inputValue: "",
    };
  },
  computed: {
    search: {
      get() {
        return this.inputValue;
      },
      set(value) {
        this.inputValue = value;
        this.$emit("input", this.inputValue);
      },
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  height: 32px;
  margin-top: 15px;
  outline: none;
  border: none;
  box-shadow: 2px 2px 3px gray;
  border-radius: 5px;

  color: #000000;
  font-size: 16px;
}
</style>