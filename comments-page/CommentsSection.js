import { TheContainer } from "./TheContainer.js";
import { TheTypography } from "./TheTypography.js";
import { PostForm } from "./PostForm.js";

export const CommentsSection = {
  props: {
    commentsNumber: [String, Number],
  },

  components: {
    TheContainer,
    TheTypography,
    PostForm,
  },
  template: `
    <div class="comments-section">
      <TheContainer>
        <div class="comments-section__container">
          <TheTypography variant="subtitle">Comments ({{commentsNumber}})</TheTypography>
          <div class="comments-section__post-form">
           <PostForm></PostForm>
          </div>
          <div class="comments-section__comments">
           <slot></slot>
          </div>
        </div>
      </TheContainer>
    </div>
  `,
};
