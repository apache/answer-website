import { useEffect, useState, type MouseEvent } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, { translate } from '@docusaurus/Translate';
import CloseButton from '@theme/AnnouncementBar/CloseButton';

const DISMISS_KEY = '_lang_banner_dismissed_';
// Written by NavbarNavLink when the user picks a language in the navbar,
// and by the banner switch link below.
const USER_PREF_KEY = '_lang_user_';

// Only suggest the switch for Simplified Chinese browsers: the site has no
// Traditional Chinese (zh-TW/zh-HK) version.
function isSimplifiedChinese(lang: string): boolean {
  const lower = lang.toLowerCase();
  return (
    lower === 'zh' ||
    lower.startsWith('zh-cn') ||
    lower.startsWith('zh-hans') ||
    lower.startsWith('zh-sg')
  );
}

export default function BrowserLanguageBanner() {
  const [visible, setVisible] = useState(false);
  const zhCNPath = useBaseUrl('/zh-CN');

  useEffect(() => {
    const zhRoot = zhCNPath.replace(/\/$/, '');
    const { pathname, search, hash } = window.location;
    // The locale root itself has no trailing slash.
    if (pathname === zhRoot || pathname.startsWith(`${zhRoot}/`)) {
      return;
    }

    // An explicit language choice (banner switch or navbar dropdown) is
    // final: never show the banner again.
    const userPref = localStorage.getItem(USER_PREF_KEY);
    if (userPref) {
      if (userPref === 'zh-CN') {
        window.location.replace(`${zhRoot}${pathname}${search}${hash}`);
      }
      return;
    }

    const dismissed = sessionStorage.getItem(DISMISS_KEY) === 'true';

    if (!dismissed && isSimplifiedChinese(navigator.language)) {
      setVisible(true);
    }
  }, [zhCNPath]);

  if (!visible) {
    return null;
  }

  const { pathname, search, hash } = window.location;
  const switchHref = `${zhCNPath.replace(/\/$/, '')}${pathname}${search}${hash}`;

  const handleSwitch = (event: MouseEvent) => {
    // Only remember the choice on a plain left click; modified clicks
    // (Cmd/Ctrl-click opens a new tab) should not change this tab's
    // language preference.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    localStorage.setItem(USER_PREF_KEY, 'zh-CN');
  };

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, 'true');
    setVisible(false);
  };

  return (
    <div
      className="alert alert--secondary margin-bottom--none browser-language-alert"
      role="status"
      lang="zh-CN">
      <Translate id="theme.browserLanguage.message">
        你的浏览器语言是中文，是否切换到简体中文？
      </Translate>{' '}
      <a href={switchHref} onClick={handleSwitch}>
        <Translate id="theme.browserLanguage.switch">切换</Translate>
      </a>
      <CloseButton
        onClick={handleDismiss}
        aria-label={translate({
          id: 'theme.browserLanguage.closeAriaLabel',
          message: '关闭',
        })}
      />
    </div>
  );
}
