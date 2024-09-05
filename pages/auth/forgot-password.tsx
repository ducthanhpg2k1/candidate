import { ReactElement } from 'react';

import AuthLayout from '@layout/AuthLayout';
import ForgotPassword from '@components/Auth/ForgotPassword';

const ForgotPasswordPage = () => {
  return <ForgotPassword />;
};

ForgotPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout>
      <>{page}</>
    </AuthLayout>
  );
};

// export async function getStaticProps({ locale }: any) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common', 'home'])),
//       // Will be passed to the page component as props
//     },
//   };
// }

export default ForgotPasswordPage;
