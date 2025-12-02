<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TheContainer",
};
</script>

<style scoped>
.container {
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
