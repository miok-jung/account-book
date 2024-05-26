<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-translate" elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>{{ i18n.tm('appTitle') }}</q-toolbar-title>
        <q-select
          v-model="selectLanguage"
          :options="languageOptions"
          @update:model-value="onUpdateChangeLanguage"
          filled
          dense
          options-dense
        >
          <q-tooltip>
            언어 선택을 통해 페이지 번역을 확인하실 수 있습니다.
          </q-tooltip>
        </q-select>
        <q-toggle
          v-model="darkMode"
          color="warning"
          :icon="darkMode ? 'dark_mode' : 'light_mode'"
          @update:model-value="onUpdateSettingLightAndDarkMode"
          >{{ darkMode ? i18n.tm('darkMode') : i18n.tm('lightMode') }}
          <q-tooltip
            >Change to {{ darkMode ? 'Light' : 'Dark' }} Mode</q-tooltip
          >
        </q-toggle>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <Sidebar v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { QSelect, useQuasar } from 'quasar';
import Sidebar from 'components/Sidebar.vue';
import { useI18n } from 'vue-i18n';
import languages from 'quasar/lang/index.json';
import { useAppStore } from 'src/stores/app';
import { SidebarCategoryProps, LanguageKeys } from 'src/types';

import enUS from 'quasar/lang/en-US.js';
import koKR from 'quasar/lang/ko-KR.js';
import ja from 'quasar/lang/ja.js';

const $q = useQuasar();
const i18n = useI18n();
const store = {
  app: useAppStore(),
};

const linksList: SidebarCategoryProps[] = [
  {
    title: 'CK Editor5',
    caption: 'Test to CK Editor5',
    icon: 'mode_edit',
    link: '/test',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// NOTE: 언어 설정

const selectLanguage = ref<{ label: string; value: LanguageKeys }>({
  label: 'English (US)',
  value: 'en-US',
});
const appLanguages = languages.filter((lang) =>
  ['en-US', 'ko-KR', 'ja'].includes(lang.isoName)
);
const languageOptions = appLanguages.map((lang) => ({
  label: lang.nativeName,
  value: lang.isoName,
}));

// NOTE: 라이트모드, 다크모드
const darkMode = ref<boolean>(false);
function onUpdateSettingLightAndDarkMode() {
  $q.dark.set(darkMode.value);
}

async function onUpdateChangeLanguage() {
  try {
    // i18n, quasar lang 세팅
    i18n.locale.value = selectLanguage.value.value;
    let langModule;
    switch (selectLanguage.value.value) {
      case 'ko-KR':
        langModule = koKR;
        break;
      case 'ja':
        langModule = ja;
        break;
      case 'en-US':
        langModule = enUS;
        break;
      default:
        langModule = enUS;
        throw new Error(
          '지원되지 않는 언어로 인하여 강제로 영어로 표기됩니다.'
        );
    }
    $q.lang.set(langModule);

    console.log('language', i18n.locale.value, $q.lang.isoName);
    // 스토어의 언어 세팅 및 저장
    await store.app.setLanguage(selectLanguage.value.value);
  } catch (error) {
    console.error(
      `Failed to change language to ${selectLanguage.value.value}:`,
      error
    );
  }
}

// NOTE: life-cycle
onBeforeMount(() => {
  // light/dark 모드 세팅
  $q.dark.set(darkMode.value);
});
</script>
