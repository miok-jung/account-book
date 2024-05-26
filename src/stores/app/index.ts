import { defineStore } from 'pinia';
import { LanguageKeys } from 'src/types';

interface UserState {
  language: string;
}

export const useAppStore = defineStore('app', {
  state: (): { user: UserState } => ({
    user: {
      language: 'en-US', // 기본 언어 설정
    },
  }),
  actions: {
    async setLanguage(language: LanguageKeys) {
      this.user.language = language;
    },
  },
});
