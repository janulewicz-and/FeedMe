<template>
  <button :class="['button', variant ? 'button--' + variant : '']">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TheButton",
  props: {
    variant: String,
  },
};
</script>

<style scoped>
.button {
  background-color: transparent;
  height: 48px;
  border-radius: 10px;
  border-width: 0;
  padding: 0 15px;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
}

.button:active {
  font-weight: 700;
}

.button--is-yellow {
  background-color: #f7b602;
  color: black;
}

.button--is-outlined {
  color: #f7b602;
  border-width: 1px;
  border-style: solid;
  border-color: #f7b602;
}
</style>
