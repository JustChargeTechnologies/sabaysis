import { useEffect } from 'react';

const SITE_NAME = 'Sabaysis Sports & Infra';

export function usePageTitle(pageTitle: string) {
  useEffect(() => {
    if (pageTitle) {
      document.title = `${pageTitle} | ${SITE_NAME}`;
    } else {
      document.title = SITE_NAME;
    }
  }, [pageTitle]);
}


