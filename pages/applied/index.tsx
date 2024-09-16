import { ReactElement } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Applied from '@components/Applied';
import MainLayout from '@layout/MainLayout';

const AppliedPage = () => {
  return <Applied />;
};

AppliedPage.getLayout = function getLayout(page: ReactElement) {
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

export default AppliedPage;
