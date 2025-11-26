export const CommentsTitle = {
  props: {
    title: String,
    author: String,
    image: String,
    subtitle: String,
    description: String,
    likes: [String, Number],
    comments: [String, Number],
  },

  template: `
<div class="recipe-section">
      <div class="container">
        <div class="recipe-section__container">
          <div class="recipe-section__header">
            <div class="typography typography--title">
              {{title}}
            </div>
            <a href="#" class="recipe-section__author">{{author}}</a>
          </div>
          <div class="recipe-section__content">
            <div class="recipe-section__image">
              <img :src="image" alt="" />
            </div>
            <div class="recipe-section__text">
              <div class="typography typography--title-small">{{subtitle}}</div>
              <div class="typography typography--grey">
{{description}}
              </div>
            </div>
          </div>
          <div class="recipe-section__footer">
            <div class="recipe-section__likes-comments">
              <button
                id="commentBtn"
                class="metrics-button metrics-button--is-large"
              >
                <span class="metrics-button__icon material-symbols-outlined"
                  >favorite</span
                >
                <span class="metrics-button__label">{{likes}} likes</span>
              </button>

              <button
                id="commentBtn"
                class="metrics-button metrics-button--is-large"
              >
                <span class="metrics-button__icon material-symbols-outlined"
                  >comment</span
                >
                <span class="metrics-button__label">{{comments}} comments</span>
              </button>
            </div>
            <div class="recipe-section__button">
              <button class="button button--is-yellow">
                Clone to my cookbooks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
`,
};
