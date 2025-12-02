<template>
  <div class="app">
    <RecipeSection :recipe="recepies.at(0)" />
    <RecepiesSection :recepies="recepies" />
    <CommentsSection />
  </div>
</template>

<script>
import { recipies } from "./data.js";
import RecipeSection from "./components/RecipeSection.vue";
import RecepiesSection from "./components/RecepiesSection.vue";
import CommentsSection from "./components/CommentsSection.vue";

export default {
  name: "App",
  components: {
    RecipeSection,
    RecepiesSection,
    CommentsSection,
  },
  data() {
    return { recepies: recipies };
  },
};
</script>

<style>
.app {
  padding: 40px 0;
}
</style>
