import en from './en';
import es from './es';
import tr from './tr';
import ru from './ru';
import zh from './zh_cn';

const messages = {
  en,
  es,
  tr,
  ru,
  zh
};

export const langNames = {
  en: 'EN',
  es: 'ES',
  tr: 'TR',
  ru: 'RU',
  zh: '简体中文'
};

export const defaultLocale = 'en';

export const locales = Object.keys(langNames);

export default messages;
