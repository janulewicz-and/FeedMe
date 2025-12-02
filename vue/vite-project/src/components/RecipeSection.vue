<template>
  <div class="recipe-section">
    <TheContainer>
      <div class="recipe-section__container">
        <div>
          <TheTypography variant="title">
            {{ recipe.title }}
          </TheTypography>
          <a href="#" class="recipe-section__author">{{ recipe.author }}</a>
        </div>
        <div class="recipe-section__content">
          <div class="recipe-section__image">
            <img :src="recipe.imageSrc" alt="" />
          </div>
          <div class="recipe-section__text">
            <TheTypography variant="title-small">
              {{ recipe.subtitle }}
            </TheTypography>
            <TheTypography variant="grey">
              {{ recipe.text }}
            </TheTypography>
          </div>
        </div>
        <div class="recipe-section__footer">
          <div class="recipe-section__likes-comments">
            <MetricsButton
              variant="large"
              :number="recipe.likes"
              symbol="favorite"
              label="likes"
            >
            </MetricsButton>
            <MetricsButton
              variant="large"
              :number="recipe.comments"
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
  </div>
</template>

<script>
import TheContainer from "./TheContainer.vue";
import TheTypography from "./TheTypography.vue";
import MetricsButton from "./MetricsButton.vue";
import TheButton from "./TheButton.vue";

export default {
  name: "RecipeSection",
  props: {
    recipe: Object,
  },

  components: { TheContainer, TheTypography, MetricsButton, TheButton },
};
</script>

<style scoped>
.recipe-section {
  padding: 80px 0 100px 0;
}

.recipe-section__container {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.recipe-section__author {
  font-size: 24px;
  font-weight: 600;
  color: #f7b602;
  text-decoration: none;
  cursor: pointer;
}
.recipe-section__content {
  display: flex;
  gap: 40px;
}

.recipe-section__image {
  min-height: 350px;
  max-height: 350px;
  width: 525px;
  min-width: 525px;
  overflow: hidden;
  border-radius: 10px;
}
.recipe-section__image img {
  object-fit: contain;
}

.recipe-section__text {
  display: flex;
  flex-direction: column;
}

.recipe-section__footer {
  display: flex;
  justify-content: space-between;
}

.recipe-section__likes-comments {
  max-width: 525px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.recipe-section__button {
  min-width: 210px;
}
</style>
