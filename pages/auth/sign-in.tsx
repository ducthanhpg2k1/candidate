import { ReactElement } from 'react';

import AuthLayout from '@layout/AuthLayout';
import SignIn from '@components/Auth/SignIn';

const SignInPage = () => {
  return <SignIn />;
};

SignInPage.getLayout = function getLayout(page: ReactElement) {
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

export default SignInPage;
