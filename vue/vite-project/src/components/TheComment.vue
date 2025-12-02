<template>
  <div class="comment">
    <button class="comment__image-button">
      <img :src="imageSrc" class="comment__img" />
    </button>
    <div class="comment__content">
      <div class="comment__info">
        <a href="#" class="comment__author">{{ author }}</a>
        <div class="comment__time">{{ time }}</div>
      </div>
      <div class="comment__text">
        {{ text }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheComment",
  props: {
    imageSrc: String,
    author: String,
    time: String,
    text: String,
  },
};
</script>
<style scoped>
.comment {
  width: 100%;
  display: flex;
  gap: 15px;
}

.comment__image-button {
  background-color: transparent;
  border-width: 0;
  cursor: pointer;
}

.comment__img {
  object-fit: cover;
  width: 76px;
  min-width: 76px;
  height: 76px;
  overflow: hidden;
  border-radius: 10px;
}

.comment__info {
  display: flex;
  gap: 15px;
  align-items: baseline;
}
.comment__author {
  color: #f7b602;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
}
.comment__time {
  font-size: 12px;
  font-weight: 400;
  color: #7e7e7e;
}
.comment__text {
  color: #2f2f2f;
  font-size: 16px;
  font-weight: 400;
}
</style>
