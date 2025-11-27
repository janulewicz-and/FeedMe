export const MetricsButton = {
  props: {
    variant: String,
    number: [String, Number],
    symbol: String,
  },

  template: `
    <button
      :class="['metrics-button', variant && ('metrics-button--' + variant)]"
    >
      <span class="metrics-button__icon material-symbols-outlined">
        {{ symbol }}
      </span>
      <span class="metrics-button__label">
        {{ number }} <slot></slot>
      </span>
    </button>
  `,
};
