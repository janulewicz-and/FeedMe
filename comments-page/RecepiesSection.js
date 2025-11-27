import { RecipeCard } from "./RecipeCard.js";
import { TheContainer } from "./TheContainer.js";

export const RecepiesSection = {
  components: { RecipeCard, TheContainer },
  template: `    
    <div class="recepies-section-recipe-card">
      <TheContainer>
        <div class="recepies-section__container">
        <slot></slot>
        </div>
      </TheContainer>
    </div>
`,
};
