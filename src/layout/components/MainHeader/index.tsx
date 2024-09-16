import React, { useMemo, useState } from 'react';

import { Avatar, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { List } from '@phosphor-icons/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Text from '@components/UI/Text';

import ContentProfile from './ContentProfile';
import MenuMobile from '../MenuMobile';

export const MENUS = [
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const pathName = useMemo(() => {
    return router.pathname;
  }, [router]);

  const handelRedirectPage = (url: string) => {
    router.push(url);
  };

  const handleClickOpenMenu = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className='w-full sticky backdrop-blur transition-all z-50 top-0'>
        <div className='max-w-[1200px] px-4 md:px-6 flex justify-between items-center mx-auto py-4'>
          <Image
            src={'/static/images/logo-aeon.png'}
            width={160}
            height={45}
            alt='logo-aeon'
            className='cursor-pointer w-[160px] h-[45px]'
          />
          <div className='flex items-center gap-8'>
            <div className='md:flex hidden  items-center gap-8'>
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
            </div>
            <div className='flex items-center gap-2'>
              <Popover placement='bottom-end'>
                <PopoverTrigger>
                  <Avatar className='w-10 h-10 cursor-pointer' />
                </PopoverTrigger>
                <PopoverContent className='!p-0'>
                  <ContentProfile />
                </PopoverContent>
              </Popover>

              {/* <Button
                onClick={() => router.push(ROUTE_PATH.SIGN_IN)}
                radius='full'
                className='py-[9px] px-6 md:px-[33px] bg-primary'
              >
                <Text type='font-14-600' className='text-white'>
                  Đăng nhập
                </Text>
              </Button> */}
              <div onClick={handleClickOpenMenu} className='block md:hidden'>
                <List size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MenuMobile onClose={() => setIsDrawerOpen(false)} isDrawerOpen={isDrawerOpen} />
    </>
  );
};

export default Header;
