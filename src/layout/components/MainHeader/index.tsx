import React, { useMemo } from 'react';

import { Button } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Text from '@components/UI/Text';

const MENUS = [
  {
    id: 1,
    href: '/',
    title: 'Việc làm',
  },
  {
    id: 2,
    href: '/event',
    title: 'Sự kiện',
  },
  {
    id: 3,
    href: '/about-us',
    title: 'Về chúng tôi',
  },
];

const Header = () => {
  const router = useRouter();

  const pathName = useMemo(() => {
    return router.pathname;
  }, [router]);

  const handelRedirectPage = (url: string) => {
    router.push(url);
  };

  return (
    <div className='w-full sticky backdrop-blur transition-all z-50 top-0'>
      <div className='container  flex justify-between items-center mx-auto py-4'>
        <Image
          src={'/static/images/logo-aeon.png'}
          width={160}
          height={45}
          alt='logo-aeon'
          className='cursor-pointer w-[160px] h-[45px]'
        />
        <div className='flex items-center gap-8'>
          {MENUS?.map((item) => {
            return (
              <div
                key={item?.id}
                onClick={() => handelRedirectPage(item.href)}
                className='cursor-pointer'
              >
                <Text
                  fontFamily='font-montserrat'
                  color='text-black'
                  className={clsx('hover:!text-primary', {
                    'text-primary': pathName === item?.href,
                  })}
                  type='font-15-600'
                >
                  {item?.title}
                </Text>
              </div>
            );
          })}
          <Button radius='full' className='py-[9px] px-[33px] bg-primary'>
            <Text type='font-14-600' className='text-white'>
              Đăng nhập
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
