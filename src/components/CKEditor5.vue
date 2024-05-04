<template>
  <div>
    <h1>TEST CKEDITOR5</h1>
    <ckeditor
      :editor="ClassicEditor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const editorData = ref<string>('<p>Content of the editor.</p>');
const editorConfig = {
  //
};
</script>

<style scoped></style>
