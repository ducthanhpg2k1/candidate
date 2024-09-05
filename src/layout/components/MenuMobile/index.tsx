import { useMemo } from 'react';

import clsx from 'clsx';
import { useRouter } from 'next/router';

import Drawer from '@components/UI/Drawer';
import Text from '@components/UI/Text';

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

const MenuMobile = ({
  onClose,
  isDrawerOpen,
}: {
  onClose: VoidFunction;
  isDrawerOpen: boolean;
}) => {
  const router = useRouter();

  const pathName = useMemo(() => {
    return router.pathname;
  }, [router]);

  const handelRedirectPage = (url: string) => {
    router.push(url);
  };

  return (
    <Drawer isOpen={isDrawerOpen} onClose={onClose}>
      <div className='flex flex-col gap-6 p-4 mt-4'>
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
    </Drawer>
  );
};
export default MenuMobile;
