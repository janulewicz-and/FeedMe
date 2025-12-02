import { RecipeCard } from "./RecipeCard.js";
import { TheContainer } from "./TheContainer.js";
import { RecepiesArr } from "./data.js";

export const RecepiesSection = {
  data() {
    return { recepies: RecepiesArr };
  },
  components: { RecipeCard, TheContainer },
  template: `    
    <div class="recepies-section-recipe-card">
      <TheContainer>
        <div class="recepies-section__container">
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
`,
};
