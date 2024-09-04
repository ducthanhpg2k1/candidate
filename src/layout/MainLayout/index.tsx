import dynamic from 'next/dynamic';

import SildeBanner from './SildeBanner';

const MainHeader = dynamic(() => import('../components/MainHeader'));

const Footer = dynamic(() => import('../components/Footer'));

const MainLayout = ({ children }: any) => {
  return (
    <div className='w-full h-screen flex flex-col overflow-auto'>
      <MainHeader />
      <div className='w-full flex-1 mt-[40px]'>
        <SildeBanner />
        <div className='container mx-auto py-[40px]'>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
