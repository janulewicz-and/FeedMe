import { TheContainer } from "./TheContainer.js";
import { TheTypography } from "./TheTypography.js";
import { PostForm } from "./PostForm.js";
import { CommentsArr } from "./data.js";
import { TheComment } from "./TheComment.js";

export const CommentsSection = {
  data() {
    return {
      comments: CommentsArr,
    };
  },

  methods: {
    commentsLength() {
      return this.comments.length;
    },
  },

  components: {
    TheContainer,
    TheTypography,
    PostForm,
    TheComment,
  },
  template: `
    <div class="comments-section">
      <TheContainer>
        <div class="comments-section__container">
          <TheTypography variant="subtitle">
            ({{commentsLength()}}) Comments
          </TheTypography>
          <div class="comments-section__post-form">
            <PostForm></PostForm>
          </div>
          <div class="comments-section__comments">
            <the-comment
              v-for="c in comments"
              :key="c.id"
              :image-src="c.imageSrc"
              :author="c.author"
              :time="c.time"
              :text="c.text"
            ></the-comment>
          </div>
        </div>
      </TheContainer>
    </div>
  `,
};
