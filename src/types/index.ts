import { QSelectProps } from 'quasar';

// STUB: Quasar 타입 지정
export type QSelectOptions = QSelectProps['options'];

// STUB: 자체 타입 지정
export type LanguageKeys = 'en-US' | 'ko-KR' | 'ja';
export type SidebarCategoryProps = {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
  target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop';
};
export type ThemeName = 'grey' | 'blue';
export type Resize = { width: number; height: number };
