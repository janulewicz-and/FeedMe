export const CommentsCard = {
  props: {
    image: String,
    author: String,
    time: String,
    text: String,
  },

  components: {},
  template: `<div class="comment">
                <button class="comment__image-button">
                  <img
                    :src="image"
                    class="comment__img"
                  />
                </button>
                <div class="comment__content">
                  <div class="comment__info">
                    <a href="#" class="comment__author">{{author}}</a>
                    <div class="comment__time">{{time}}</div>
                  </div>
                  <div class="comment__text">
                    {{text}}
                  </div>
                </div>
              </div>`,
};
