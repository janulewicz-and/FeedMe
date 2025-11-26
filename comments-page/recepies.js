export const RecipeCard = {
  props: {
    author: String,
    title: String,
    description: String,
    likes: [String, Number],
    comments: [String, Number],
    views: [String, Number],
    image: String,
  },

  template: `
    <div class="recepies-section-recipe-card">
            <div class="recipe-card">
              <div class="recipe-card__image">
                <img
                  :src= "image"
                  alt=""
                  class="card-image"
                />
              </div>
              <div class="recipe-card__content">
                <a href="#" class="recipe-card__title"
                  >{{title}}</a
                >
                <div class="recipe-card__author">{{author}}</div>
                <div class="recipe-card-text">
                  {{description}}
                </div>
                <div class="recepi-card__footer">
                  <div class="recepi-card__metrics">
                    <button
                      id="commentBtn"
                      class="metrics-button metrics-button--is-small"
                    >
                      <span
                        class="metrics-button__icon material-symbols-outlined"
                        >favorite</span
                      >
                      <span class="metrics-button__label">{{likes}} likes</span>
                    </button>

                    <button
                      id="commentBtn"
                      class="metrics-button metrics-button--is-small"
                    >
                      <span
                        class="metrics-button__icon material-symbols-outlined"
                        >comment</span
                      >
                      <span class="metrics-button__label">{{comments}} comments</span>
                    </button>

                    <div class="metrics-button metrics-button--is-small">
                      <span
                        class="metrics-button__icon material-symbols-outlined"
                        >visibility</span
                      >
                      <span class="metrics-button__label">{{views}} views</span>
                    </div>
                  </div>
                  <div class="recipe-card__button">
                    <button class="button button--is-outlined">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  `,
};
