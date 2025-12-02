<template>
  <div class="recepies-section">
    <TheContainer>
      <div class="recepies-section__container">
        <TheTypography variant="subtitle" content="Recipies"></TheTypography>
        <recipe-card
          v-for="r in recepies"
          :key="r.id"
          :title="r.title"
          :author="r.author"
          :text="r.text"
          :likes="r.likes"
          :comments="r.comments"
          :views="r.views"
          :image="r.image"
        ></recipe-card>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard.vue";
import TheContainer from "./TheContainer.vue";
import { recipies } from "./data.js";
import TheTypography from "./TheTypography.vue";

export default {
  name: "RecepiesSection",
  data() {
    return { recepies: recipies };
  },
  components: { RecipeCard, TheContainer, TheTypography },
};
</script>

<style scoped>
.recepies-section__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
