<template>
  <button
    :class="['metrics-button', variant ? `metrics-button--${variant}` : '']"
  >
    <span class="metrics-button__icon material-symbols-outlined">
      {{ symbol }}
    </span>
    <span class="metrics-button__label"> {{ number }} {{ label }} </span>
  </button>
</template>

<script>
export default {
  name: "MetricsButton",
  props: {
    variant: String,
    number: [String, Number],
    symbol: String,
    label: String,
  },
};
</script>

<style scoped>
.metrics-button:active {
  font-weight: bold !important;
}

.metrics-button:active .metrics-button__icon {
  font-weight: bold;
}
.metrics-button {
  display: flex;
  align-items: top;
  border-width: 0px;
  background-color: transparent;
  font-size: 16px;
  color: grey;
  cursor: pointer;
  gap: 10px;
}

.metrics-button__label:active {
  font-weight: bold;
}

.metrics-button--is-small {
  font-size: 14px;
}

.metrics-button__text {
  font-size: 18px;
  font-family: nunito;
  vertical-align: middle;
}

.metrics-button__text--is-card {
  font-size: 14px;
}

.metrics-button:active {
  font-weight: bold;
}
.metrics-button--large-size {
  font-size: 30px;
  background-color: #fcfaf8;
}
</style>
