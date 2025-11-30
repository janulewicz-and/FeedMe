import { TheContainer } from "./TheContainer.js";
import { TheTypography } from "./TheTypography.js";
import { MetricsButton } from "./MetricsButton.js";
import { TheButton } from "./TheButton.js";
import { recipeHeaderData } from "./data.js";

export const RecipeSection = {
  data() {
    return { recipeHeaderData };
  },

  computed: {
    RecipeData() {
      return this.recipeHeaderData[0];
    },
  },

  components: { TheContainer, TheTypography, MetricsButton, TheButton },

  template: `    <div class="recipe-section">
      <TheContainer>
        <div class="recipe-section__container">
          <div class="recipe-section__header">
            <TheTypography variant="title">
              {{ RecipeData.title }}
            </TheTypography>
            <a href="#" class="recipe-section__author">{{ RecipeData.author }}</a>
          </div>
          <div class="recipe-section__content">
            <div class="recipe-section__image">
              <img :src="RecipeData.imageSrc" alt="" />
            </div>
            <div class="recipe-section__text">
              <TheTypography variant="title-small">
                {{ RecipeData.subtitle }}
              </TheTypography>
              <TheTypography variant="grey">
                {{ RecipeData.text }}
              </TheTypography>
            </div>
          </div>
          <div class="recipe-section__footer">
            <div class="recipe-section__likes-comments">
              <MetricsButton
                variant="large"
                :number="RecipeData.likes"
                symbol="favorite"
                label="likes"
              >
                
              </MetricsButton>
              <MetricsButton
                variant="large"
                :number="RecipeData.comments"
                symbol="comment"
                label="comments"
              >
                
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
