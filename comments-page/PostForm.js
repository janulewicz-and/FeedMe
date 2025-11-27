import { TheButton } from "./TheButton.js";

export const PostForm = {
  components: {
    TheButton,
  },

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
    
              <div class="post-form">
                <div class="post-form__input-field">
                  <textarea
                    class="growing-textarea-field"
                    rows="1"
                    placeholder="Express yoursef..."
                  >
                  </textarea>
                </div>

                <div class="post-form__button">
                <TheButton variant="is-yellow">Post</TheButton>
                  
                </div>
              </div>

  `,
};
