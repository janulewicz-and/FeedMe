import { CommentsSection } from "./CommentsSection.js";
import { TheComment } from "./TheComment.js";
import { RecipeCard } from "./RecipeCard.js";
import { RecipeSection } from "./RecipeSection.js";
import { PostForm } from "./PostForm.js";
import { RecepiesSection } from "./RecepiesSection.js";
import { CommentsArr } from "./data.js";
import { RecepiesArr } from "./data.js";

const { createApp } = window.Vue;

createApp({
  data() {
    return {
      comments: CommentsArr,
      recepies: RecepiesArr,
    };
  },

  components: {
    RecipeCard,
    TheComment,
    PostForm,
    RecipeSection,
    RecepiesSection,
    CommentsSection,
  },
}).mount("#app");
