import { defineStore } from 'pinia';
import { LanguageKeys, ThemeName } from 'src/types';

type UserInformation = {
  language: string;
  theme: string;
  darkMode: boolean;
};

export const useAppStore = defineStore('app', {
  state: (): { user: UserInformation } => ({
    user: {
      language: 'en-US', // 기본 언어 설정
      theme: 'grey', // 테마 설정
      darkMode: false, // 다크모드 설정
    },
  }),
  getters: {
    getUserThemeName: (state) => {
      return state.user.theme;
    },
    getUserDarkMode: (state) => {
      return state.user.darkMode;
    },
  },
  actions: {
    async setLanguage(language: LanguageKeys) {
      this.user.language = language;
    },
    setThemeName(themeName: ThemeName) {
      this.user.theme = themeName;
    },
  },
});
