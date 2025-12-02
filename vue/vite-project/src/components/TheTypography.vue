<template>
  <div :class="['typography', variant ? 'typography--' + variant : '']">
    <slot></slot>{{ content }}
  </div>
</template>

<script>
export default {
  name: "TheTypography",
  props: {
    variant: String,
    content: String,
  },
};
</script>
<style scoped>
.typography {
  font-family: Nunito;
  font-size: 16px;
  font-weight: 400;
  color: black;
}

.typography--grey {
  color: #575757;
}

.typography--title {
  font-size: 56px;
  font-weight: 700;
}

.typography--subtitle {
  font-size: 36px;
  font-weight: 600;
}
.typography--title-small {
  font-size: 26px;
  font-weight: 600;
}
</style>
