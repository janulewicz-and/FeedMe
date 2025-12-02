<template>
  <div class="comments-section">
    <TheContainer>
      <div class="comments-section__container">
        <TheTypography variant="subtitle" content="Comments">
          ({{ commentsLength() }})
        </TheTypography>
        <div class="comments-section__post-form">
          <PostForm button="Post"></PostForm>
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
</template>

<script>
import TheContainer from "./TheContainer.vue";
import TheTypography from "./TheTypography.vue";
import PostForm from "./PostForm.vue";
import { comments } from "./data.js";
import TheComment from "./TheComment.vue";

export default {
  name: "CommentsSection",
  data() {
    return {
      comments: comments,
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
};
</script>

<style scoped>
.comments-section__container {
  display: flex;
  flex-direction: column;
  padding: 100px 0px 80px 0;
}

.comments-section__post-form {
  margin-top: 40px;
}
.comments-section__comments {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px 0;
}
</style>
