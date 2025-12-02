<template>
  <div class="recipe-card">
    <div class="recipe-card__image">
      <img :src="image" />
    </div>
    <div class="recipe-card__content">
      <a href="#" class="recipe-card__title">{{ title }}</a>
      <div class="recipe-card__author">{{ author }}</div>
      <div class="recipe-card__text">{{ text }}</div>
      <div class="recipe-card__footer">
        <div class="recipe-card__metrics">
          <MetricsButton
            variant="is-small"
            :number="comments"
            symbol="comment"
            label="comments"
          >
          </MetricsButton>
          <MetricsButton
            variant="is-small"
            :number="likes"
            symbol="favorite"
            label="likes"
          >
          </MetricsButton>
          <MetricsButton
            variant="is-small"
            :number="views"
            symbol="visibility"
            label="views"
          >
          </MetricsButton>
        </div>
        <div class="recipe-card__button">
          <TheButton variant="is-outlined">Save</TheButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MetricsButton from "./MetricsButton.vue";
import TheButton from "./TheButton.vue";

export default {
  name: "RecipeCard",
  props: {
    author: String,
    title: String,
    text: String,
    likes: [String, Number],
    comments: [String, Number],
    views: [String, Number],
    image: String,
  },

  components: {
    MetricsButton,
    TheButton,
  },
};
</script>

<style scoped>
.recipe-card {
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: row;
  padding: 20px;
  gap: 30px;
}
.recipe-card__image {
  min-width: 235px;
  width: 235px;
  min-height: 178px;
  height: 178px;
  overflow: hidden;
  border-radius: 10px;
}

.recipe-card__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
}
.recipe-card__title {
  font-size: 24px;
  font-weight: 600;
  color: black;
  cursor: pointer;
  text-decoration: none;
}
.recipe-card__author {
  font-size: 12px;
  font-weight: 400;
  color: #626262;
  margin-bottom: 10px;
}
.recipe-card__text {
  font-size: 14px;
  color: #404040;
  margin-bottom: 10px;
  width: 100%;
}
.recipe-card__footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.recipe-card__metrics {
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: end;
}
.recipe-card__button {
  display: flex;
  width: 80px;
}
</style>
