import { ReactNode } from 'react';

import { Button } from '@nextui-org/react';
import { ArrowLeft } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Text from '@components/UI/Text';
import { ROUTE_PATH } from '@utils/common';

interface AuthLayoutProps {
  children: ReactNode;
}
const AuthLayout = (props: AuthLayoutProps) => {
  const router = useRouter();
  const { children } = props;
  return (
    <div className='w-full bg-white h-screen overflow-auto grid grid-cols-1 lg:grid-cols-2 relative z-10 '>
      <div className="bg-[url('/banner.png')] hidden lg:block bg-center bg-no-repeat bg-[length:100%_100%] w-full h-full"></div>
      <div className='flex justify-center items-center relative'>
        <div className='flex items-center gap-[10px] absolute lg:left-[60px] top-6 left-5 lg:top-20'>
          <Image
            onClick={() => router.push(ROUTE_PATH.HOME)}
            src={'/static/images/logo-aeon.png'}
            alt='logo'
            className='cursor-pointer w-[160px] h-[45px]'
            width={160}
            height={45}
          />
        </div>
        <div className='flex items-center gap-[10px] absolute lg:right-[60px] top-6 right-5 lg:top-20'>
          <Button
            onClick={() => router.push(ROUTE_PATH.HOME)}
            color='primary'
            radius='full'
            variant='bordered'
          >
            <ArrowLeft size={16} />
            <Text type='font-14-600' className='text-back'>
              Quay lại
            </Text>
          </Button>
        </div>

        <div className='w-full lg:w-8/12 p-5'>{children}</div>
      </div>
    </div>
  );
};
export default AuthLayout;
