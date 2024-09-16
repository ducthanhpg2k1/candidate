import { ReactElement } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import ListCv from '@components/ListCv';
import MainLayout from '@layout/MainLayout';

const ListCvPage = () => {
  return <ListCv />;
};

ListCvPage.getLayout = function getLayout(page: ReactElement) {
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

export default ListCvPage;
