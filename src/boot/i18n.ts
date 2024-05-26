import { createI18n } from 'vue-i18n';
import { boot } from 'quasar/wrappers';
import { LanguageKeys } from 'src/types';
import messages from 'src/i18n';

export type MessageSchema = (typeof messages)['en-US'];

export const i18n = createI18n<MessageSchema, LanguageKeys>({
  locale: 'en-US',
  fallbackLocale: 'en-US', // 다국어 작동이 안될때 사용하는 언어.
  legacy: false, // script에서 사용할 경우 false??
  messages,
});

export default boot(({ app }) => {
  app.use(i18n);
});
