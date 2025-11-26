export const TextAreaAutoGrow = {
  mounted() {
    const areas = document.querySelectorAll(".growing-textarea-field");

    areas.forEach((area) => {
      area.addEventListener("input", () => {
        area.style.height = "auto";
        area.style.height = area.scrollHeight + "px";
      });
    });
  },

  template: `
    <div>
      <slot></slot>
    </div>
  `,
};
