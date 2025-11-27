import { CommentsSection } from "./CommentsSection.js";
import { CommentsCard } from "./CommentsCard.js";
import { RecipeCard } from "./RecipeCard.js";
import { RecipeSection } from "./RecipeSection.js";
import { PostForm } from "./PostForm.js";
import { RecepiesSection } from "./RecepiesSection.js";
import { CommentsArr } from "./CommentsArr.js";
import { RecepiesArr } from "./RecepiesArr.js";

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
    CommentsCard,
    PostForm,
    RecipeSection,
    RecepiesSection,
    CommentsSection,
    CommentsArr,
  },
}).mount("#app");
