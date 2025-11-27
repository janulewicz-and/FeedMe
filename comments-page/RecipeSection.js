import { TheContainer } from "./TheContainer.js";
import { TheTypography } from "./TheTypography.js";
import { MetricsButton } from "./MetricsButton.js";
import { TheButton } from "./TheButton.js";

export const RecipeSection = {
  props: {
    title: String,
    author: String,
    image: String,
    subtitle: String,
    text: String,
    likes: [String, Number],
    comments: [String, Number],
  },

  components: { TheContainer, TheTypography, MetricsButton, TheButton },

  template: `    <div class="recipe-section">
      <TheContainer>
        <div class="recipe-section__container">
          <div class="recipe-section__header">
            <TheTypography variant="title">
              {{ title }}
            </TheTypography>
            <a href="#" class="recipe-section__author">{{ author }}</a>
          </div>
          <div class="recipe-section__content">
            <div class="recipe-section__image">
              <img :src="image" alt="" />
            </div>
            <div class="recipe-section__text">
              <TheTypography variant="title-small">
                {{ subtitle }}
              </TheTypography>
              <TheTypography variant="grey">
                {{ text }}
              </TheTypography>
            </div>
          </div>
          <div class="recipe-section__footer">
            <div class="recipe-section__likes-comments">
              <MetricsButton
                variant="large"
                :number="likes"
                symbol="favorite"
              >
                likes
              </MetricsButton>
              <MetricsButton
                variant="large"
                :number="comments"
                symbol="comment"
              >
                comments
              </MetricsButton>
            </div>
            <div class="recipe-section__button">         
              <TheButton variant="is-yellow">Buy</TheButton>             
            </div>
          </div>
        </div>
      </TheContainer>
    </div>`,
};
