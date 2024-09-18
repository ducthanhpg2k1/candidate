import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import SildeBanner from './SildeBanner';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@nextui-org/react';
import { ArrowUp } from '@phosphor-icons/react';

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
        <Button
          onClick={scrollToTop}
          isIconOnly
          radius='full'
          size='lg'
          className='fixed bottom-10 right-10'
        >
          <ArrowUp size={24} weight='light' />
        </Button>
      )}
    </div>
  );
};

export default MainLayout;
