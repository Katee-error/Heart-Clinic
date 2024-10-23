import { useEffect } from 'react';

const YandexMetrika = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (function(m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function() {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        k = e.createElement(t);
        a = e.getElementsByTagName(t)[0];
        k.async = 1;
        // Укажите локальный путь к скрипту
        k.src = '/scripts/tag.js';
        a.parentNode.insertBefore(k, a);
      })(window, document, 'script', 0, 'ym');


      ym(98379175, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });
    }
  }, []);

  return null;
};

export default YandexMetrika;
