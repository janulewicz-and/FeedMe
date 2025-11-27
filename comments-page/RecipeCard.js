import { MetricsButton } from "./MetricsButton.js";
import { TheButton } from "./TheButton.js";

export const RecipeCard = {
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

  template: `
<div class="recipe-card">
  <div class="recipe-card__image">
    <img :src="image" alt="" class="recipe-card__image-content" />
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
        >
          comments
        </MetricsButton>
        <MetricsButton
          variant="is-small"
          :number="likes"
          symbol="favorite"
        >
          likes
        </MetricsButton>
        <MetricsButton
          variant="is-small"
          :number="views"
          symbol="visibility"
        >
          views
        </MetricsButton>
      </div>
      <div class="recipe-card__button">
          <TheButton variant="is-outlined">Save</TheButton>
      </div>
    </div>
  </div>
</div>
  `,
};
