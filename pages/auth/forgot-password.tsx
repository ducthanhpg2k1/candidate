import { ReactElement } from 'react';

import ForgotPassword from '@components/Auth/ForgotPassword';
import AuthLayout from '@layout/AuthLayout';

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
