import { ca } from './ca';
import { es } from './es';
import { en } from './en';

export const dictionaries = { ca, es, en } as const;
export type Lang = keyof typeof dictionaries;
export const defaultLang: Lang = 'ca';
export const locales: Lang[] = ['ca', 'es', 'en'];

export const localeMeta: Record<Lang, { code: string; label: string; htmlLang: string }> = {
  ca: { code: 'CA', label: 'Català', htmlLang: 'ca' },
  es: { code: 'ES', label: 'Español', htmlLang: 'es' },
  en: { code: 'EN', label: 'English', htmlLang: 'en' },
};

export function useTranslations(lang: Lang) {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}

export function localizedPath(lang: Lang, path = '') {
  const clean = path.replace(/^\/+/, '');
  if (lang === defaultLang) {
    return clean ? `/${clean}` : '/';
  }
  return clean ? `/${lang}/${clean}` : `/${lang}/`;
}
