export const TheButton = {
  props: {
    variant: String,
  },
  template: `
    <button :class="['button', variant ? 'button--' + variant : '']">
      <slot></slot>
    </button>
  `,
};
