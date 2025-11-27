export const TheTypography = {
  props: {
    variant: String,
    content: String,
  },

  template: `
<div :class="[  'typography', variant ? 'typography--' + variant : '' ]">
    <slot>{{ content }}</slot>
</div>
  `,
};
