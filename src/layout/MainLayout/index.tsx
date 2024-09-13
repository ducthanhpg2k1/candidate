import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import SildeBanner from './SildeBanner';

const MainHeader = dynamic(() => import('../components/MainHeader'));

const Footer = dynamic(() => import('../components/Footer'));

const MainLayout = ({ children }: any) => {
  const router = useRouter();
  return (
    <div className='w-full h-screen overflow-x-auto flex flex-col overflow-auto'>
      <MainHeader />
      <div className='w-full flex-1 mt-4 md:mt-[40px]'>
        {router.pathname === '/' && <SildeBanner />}
        <div className='max-w-[1200px] px-4 md:px-6 mx-auto py-8 md:py-[40px]'>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
