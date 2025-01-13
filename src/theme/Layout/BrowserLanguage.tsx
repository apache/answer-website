import React, {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const LANGUAGE_PREFERENCE_KEY = '_lang_browser_';

export default function BrowserLanguageRedirect() {
  const {
    siteConfig: {
      i18n: {defaultLocale, locales},
    },
  } = useDocusaurusContext();

  useEffect(() => {
    window.addEventListener('languagechange', () => {
      localStorage.setItem(LANGUAGE_PREFERENCE_KEY, navigator.language);
    })

    const currentPath = window.location.pathname;
    const storageLocale = localStorage.getItem('_lang_user_') || localStorage.getItem(LANGUAGE_PREFERENCE_KEY);
    const storageLocaleIsDefault = storageLocale === defaultLocale;

    if (storageLocale) {
      if (storageLocaleIsDefault) {
        if (currentPath === '/') return;
        return;
      } else {
        if (currentPath.startsWith(`/${storageLocale}`)) {
          return;
        } else {
          window.location.pathname = `/${storageLocale}${currentPath}`;
          return;
        }
      }
    } else {
      const browserLanguage = navigator.language.toLowerCase();
      const matchedLocale = locales.find(locale =>
        browserLanguage === locale.toLowerCase() ||
        browserLanguage.startsWith(locale.toLowerCase() + '-')
      );
      if (matchedLocale) {
        localStorage.setItem(LANGUAGE_PREFERENCE_KEY, matchedLocale);
        window.location.pathname = `/${matchedLocale}${currentPath}`;
      } else {
        window.location.pathname = currentPath;
      }
    }

    // remove the event listener
    return () => {
      window.removeEventListener('languagechange', () => {
        localStorage.setItem(LANGUAGE_PREFERENCE_KEY, navigator.language);
      })
    }
  }, []);

  return null;
}
