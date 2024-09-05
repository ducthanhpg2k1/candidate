import { ReactElement } from 'react';

import SignUp from '@components/Auth/SignUp';
import AuthLayout from '@layout/AuthLayout';

const SignUpPage = () => {
  return <SignUp />;
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
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

export default SignUpPage;
