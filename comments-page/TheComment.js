export const TheComment = {
  props: {
    imageSrc: String,
    author: String,
    time: String,
    text: String,
  },

  template: `<div class="comment">
                <button class="comment__image-button">
                  <img
                    :src="imageSrc"
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
