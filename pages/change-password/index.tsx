import { ReactElement } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import ChangePassword from '@components/ChangePassword';
import MainLayout from '@layout/MainLayout';

const ChangePasswordPage = () => {
  return <ChangePassword />;
};

ChangePasswordPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}

export default ChangePasswordPage;
