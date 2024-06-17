<template>
  <q-layout view="lHh Lpr lFf" style="height: 100vh">
    <!-- ANCHOR: 1. 상단 헤더 -->
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
        <q-toolbar-title>{{ i18n.t('main.title') }}</q-toolbar-title>
        <q-select
          v-model="selectTheme"
          :options="themeOptions"
          @update:model-value="onUpdateChangeTheme"
          filled
          dense
          options-dense
          standout
        >
          <q-tooltip>
            <span v-html="i18n.t('main.modeDescriptionGuide')" />
          </q-tooltip>
        </q-select>
        <q-select
          v-model="selectLanguage"
          :options="languageOptions"
          text-color="white"
          @update:model-value="onUpdateChangeLanguage"
          filled
          dense
          options-dense
        >
          <q-tooltip>
            <span v-html="i18n.t('main.modeDescriptionGuide')" />
          </q-tooltip>
        </q-select>
        <q-toggle
          v-model="darkMode"
          color="warning"
          :icon="darkMode ? 'dark_mode' : 'light_mode'"
          @update:model-value="onUpdateSettingLightAndDarkMode"
          >{{ darkMode ? i18n.t('main.lightMode') : i18n.t('main.darkMode') }}
          <q-tooltip>
            <span
              v-html="
                darkMode
                  ? i18n
                      .t('main.changeTo')
                      .replace('$CONTENT$', i18n.t('main.lightMode'))
                  : i18n
                      .t('main.changeTo')
                      .replace('$CONTENT$', i18n.t('main.darkMode'))
              "
            />
          </q-tooltip>
        </q-toggle>
      </q-toolbar>
      <q-resize-observer :debounce="500" @resize="onResizeHeader" />
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <Sidebar v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>
    <!-- ANCHOR: 3. 본문 -->
    <q-page-container>
      <router-view
        :left-drawer-open="leftDrawerOpen"
        :header-height="headerSize.height"
      />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { QResizeObserver, QSelect, colors, setCssVar, useQuasar } from 'quasar';
import Sidebar from 'components/Sidebar.vue';
import { useI18n } from 'vue-i18n';
import languages from 'quasar/lang/index.json';
import { useAppStore } from 'src/stores/app';
import { LanguageKeys, Resize, ThemeName } from 'src/types';
import enUS from 'quasar/lang/en-US.js';
import koKR from 'quasar/lang/ko-KR.js';
import ja from 'quasar/lang/ja.js';

const $q = useQuasar();
const { getPaletteColor } = colors;
const primaryGrey = getPaletteColor('grey');
const primaryBlue = getPaletteColor('blue');
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

// NOTE: 테마 메인 칼라 설정
const selectTheme = ref<ThemeName>('grey');
const themeOptions = ['grey', 'blue'];
function onUpdateChangeTheme() {
  // 스토어 저장
  store.app.setThemeName(selectTheme.value);

  // 메인 테마 칼라 변경
  switch (selectTheme.value) {
    case 'blue': {
      setCssVar('primary', primaryBlue);
      break;
    }
    default: {
      setCssVar('primary', primaryGrey);
      break;
    }
  }
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

    // 스토어의 언어 세팅 및 저장
    await store.app.setLanguage(selectLanguage.value.value);
  } catch (error) {
    console.error(
      `Failed to change language to ${selectLanguage.value.value}:`,
      error
    );
  }
}

// NOTE: 라이트모드, 다크모드
const darkMode = ref<boolean>(false);
function onUpdateSettingLightAndDarkMode() {
  $q.dark.set(darkMode.value);
}

// NOTE: 사이즈 구하기
// 헤더
const headerSize = ref<Resize>({ width: 0, height: 0 });
function onResizeHeader(size: Resize) {
  headerSize.value = size;
}
// 카테고리
const categorySize = ref<Resize>({ width: 0, height: 0 });
function onResizeCategoryTitle(size: Resize) {
  categorySize.value = size;
}

// NOTE: life-cycle
onBeforeMount(() => {
  // light/dark 모드 세팅
  $q.dark.set(store.app.getUserDarkMode);
  darkMode.value = store.app.getUserDarkMode;
});
</script>
