<template>
  <div style="width: 500px; height: calc(100vh - 50px); overflow-y: auto">
    <ckeditor
      :id="porps.id"
      :editor="ClassicEditor"
      v-model="editorData"
      :config="editorConfig"
    >
    </ckeditor>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import {
  Bold,
  Italic,
  Code,
  Subscript,
} from '@ckeditor/ckeditor5-basic-styles';
import { Link } from '@ckeditor/ckeditor5-link';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext';

// NOTE: props
const porps = withDefaults(
  defineProps<{
    id: string;
    editorHeight?: string;
  }>(),
  {
    id: 'ck-editor',
    editorHeight: '100px',
  }
);

// NOTE: CSS
const editorHeight = computed(() => porps.editorHeight);

// NOTE: Classic Editor Info
const editorData = ref<string>('<p>Test Editor</p>');
const editorConfig = {
  plugins: [
    Essentials,
    Bold,
    Italic,
    Link,
    Paragraph,
    Code,
    Subscript,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
  ],
  toolbar: [
    'undo',
    'redo',
    '|',
    'bold',
    'italic',
    'code',
    'subscript',
    '|',
    'link',
    '|',
    'specialCharacters',
  ],
};
</script>
<style scoped lang="scss">
::v-deep(.ck-content) {
  height: v-bind(editorHeight);
}
</style>
