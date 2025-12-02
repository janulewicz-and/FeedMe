<template>
  <div class="post-form__input-field">
    <textarea
      ref="growingText"
      v-model="text"
      class="post-form__growing-textarea-field"
      rows="1"
      placeholder="Express yoursef..."
      @input="autoGrow"
    ></textarea>
  </div>
</template>
<script>
export default {
  name: "GrowingTextArea",
  methods: {
    autoGrow() {
      const area = this.$refs.growingText;
      area.style.height = "auto";
      area.style.height = area.scrollHeight + "px";
      this.$emit("update:text", area.value);
    },
  },
};
</script>
<style>
.post-form__growing-textarea-field {
  background-color: #ffffff;
  border-radius: 10px;
  border-width: 1px;
  border-color: #e1e1e1;
  height: 48px;
  border-style: solid;
  padding: 10px 15px;
  width: 100%;
  vertical-align: middle;
  min-height: 48px;
  font-size: 16px;
  color: grey;
  resize: none;
  overflow: hidden;
}
</style>
