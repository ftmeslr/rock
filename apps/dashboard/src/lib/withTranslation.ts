import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const withTranslation = (namespaces: string[] = ['common']) => {
  return async ({ locale }: { locale: string }) => ({
    props: {
      ...(await serverSideTranslations(locale, namespaces)),
    },
  });
};