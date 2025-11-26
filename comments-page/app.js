import { CommentCard } from "./comments.js";
import { RecipeCard } from "./recepies.js";
import { CommentsTitle } from "./commentsTitle.js";
import { TextAreaAutoGrow } from "./text-area.js";

const { createApp } = window.Vue;

createApp({
  components: {
    RecipeCard,
  },
}).mount("#recipeCardApp");

createApp({
  components: {
    CommentCard,
  },
}).mount("#comments-section");

createApp({
  components: {
    TextAreaAutoGrow,
  },
}).mount("#comments-page-text-area");

createApp({
  components: {
    CommentsTitle,
  },
}).mount("#comments-page-title");
