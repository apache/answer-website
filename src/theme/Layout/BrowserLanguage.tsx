import { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const LANGUAGE_PREFERENCE_KEY = '_lang_browser_';

export default function BrowserLanguageRedirect() {
  const {
    siteConfig: {
      i18n: { defaultLocale },
    },
  } = useDocusaurusContext();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const storageLocale = localStorage.getItem('_lang_user_') || localStorage.getItem(LANGUAGE_PREFERENCE_KEY);

    const isZhCN = navigator.language.toLowerCase() === 'zh-cn';
    const isStoredZhCN = storageLocale === 'zh-CN';

    if ((isZhCN || isStoredZhCN) && !currentPath.startsWith('/zh-CN')) {
      if (isZhCN) {
        localStorage.setItem(LANGUAGE_PREFERENCE_KEY, 'zh-CN');
      }
      if (isStoredZhCN || storageLocale === null) {
        window.location.pathname = `/zh-CN${currentPath}`;
      }
    }

    const handleLanguageChange = () => {
      if (navigator.language.toLowerCase() === 'zh-cn') {
        localStorage.setItem(LANGUAGE_PREFERENCE_KEY, 'zh-CN');
      }
    };
    window.addEventListener('languagechange', handleLanguageChange);

    return () => {
      window.removeEventListener('languagechange', handleLanguageChange);
    };
  }, [defaultLocale]);

  return null;
}
