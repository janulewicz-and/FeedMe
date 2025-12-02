<template>
  <div class="app">
    <RecipeSection />
    <RecepiesSection />
    <CommentsSection />
  </div>
</template>

<script>
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
};
</script>

<style>
.app {
  padding: 40px 0;
}
</style>
