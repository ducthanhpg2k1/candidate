import { ReactNode } from 'react';

import Image from 'next/image';

interface AuthLayoutProps {
  children: ReactNode;
}
const AuthLayout = (props: AuthLayoutProps) => {
  const { children } = props;
  return (
    <div className='w-full bg-white h-screen overflow-auto grid grid-cols-1 lg:grid-cols-2 relative z-10 '>
      <div className="bg-[url('/images/bg-auth.png')] hidden lg:block bg-center bg-no-repeat bg-[length:100%_100%] w-full h-full"></div>
      <div className='flex justify-center items-center relative'>
        <div className='flex items-center gap-[10px] absolute lg:left-[60px] top-6 left-5 lg:top-20'>
          <Image
            src={'/static/images/logo-aeon.png'}
            alt='logo'
            className='cursor-pointer w-10 h-8'
            width={40}
            height={32}
          />
        </div>
        <div className='w-full lg:w-8/12 p-5'>{children}</div>
      </div>
    </div>
  );
};
export default AuthLayout;
