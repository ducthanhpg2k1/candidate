import { useEffect, useRef, useState } from 'react';

import { Button } from '@nextui-org/react';
import { CaretUp } from '@phosphor-icons/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import SildeBanner from './SildeBanner';

const MainHeader = dynamic(() => import('../components/MainHeader'));

const Footer = dynamic(() => import('../components/Footer'));

const MainLayout = ({ children }: any) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const divRef: any = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current.scrollTop > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    if (divRef.current) {
      divRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (divRef.current) {
        divRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (divRef.current) {
      divRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      ref={divRef}
      className='w-full h-screen overflow-x-auto flex flex-col overflow-auto relative'
    >
      <MainHeader />
      <div className='w-full flex-1 mt-4 md:mt-[40px]'>
        {router.pathname === '/' && <SildeBanner />}
        <div className='max-w-[1200px] px-4 md:px-6 mx-auto py-8 md:py-[40px]'>{children}</div>
      </div>
      <Footer />
      {isVisible && (
        <div className='border-2 shadow-circle border-disable-01 border-solid rounded-full flex flex-col gap-2 fixed bottom-10 right-10'>
          <Button onClick={scrollToTop} isIconOnly radius='full' size='lg' className='bg-white'>
            <CaretUp size={24} color='#b31e8d' weight='light' />
          </Button>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
