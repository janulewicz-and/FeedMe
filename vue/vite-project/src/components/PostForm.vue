<template>
  <div class="post-form">
    <GrowingTextArea></GrowingTextArea>
    <div class="post-form__button">
      <TheButton variant="is-yellow">{{ submitLabel }}</TheButton>
    </div>
  </div>
</template>
<script>
import TheButton from "./TheButton.vue";
import GrowingTextArea from "./GrowingTextArea.vue";

export default {
  props: {
    submitLabel: String,
  },
  name: "PostForm",
  components: {
    TheButton,
    GrowingTextArea,
  },
};
</script>

<style scoped>
.post-form {
  display: flex;
  flex-direction: row;
}
.post-form__input-field {
  width: 100%;
}

.post-form__button {
  width: 134px;
  height: 48px;
}
</style>
