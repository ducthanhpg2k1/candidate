import { Avatar } from '@nextui-org/react';
import { SignOut } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import Text from '@components/UI/Text';
import { ROUTE_PATH } from '@utils/common';

const DATA_PROFILE = [
  {
    id: 1,
    label: 'Hồ sơ cá nhân',
    href: ROUTE_PATH.PROFILE,
  },
  {
    id: 2,
    label: 'Công việc đã ứng tuyển',
    href: ROUTE_PATH.APPLIED,
  },
  {
    id: 3,
    label: 'Danh sách CV của bạn',
    href: ROUTE_PATH.LIST_CV,
  },
  {
    id: 4,
    label: 'Thay đổi mật khẩu',
    href: ROUTE_PATH.CHANGE_PASSWORD,
  },
  {
    id: 4,
    href: '',
    label: 'Log Out',
  },
];

const ContentProfile = () => {
  const router = useRouter();
  const handleRedirectPage = (url: string) => {
    router.push(url);
  };
  return (
    <div className='border-1 border-[#CED4DA] rounded-xl min-w-[250px]'>
      <div className='border-b border-1 border-b-[#CED4DA] p-4 justify-center items-center flex flex-col gap-1'>
        <Avatar className='w-9 h-9' />
        <Text type='font-14-600'>Đức Thành</Text>
        <Text type='font-14-400' className='text-gray'>
          ducthanhpg@gmail.com
        </Text>
      </div>
      <div className='flex flex-col'>
        {DATA_PROFILE?.map((item, index) => {
          return (
            <div
              onClick={() => handleRedirectPage(item?.href)}
              className={clsx(
                'p-4 hover:bg-disable-01 cursor-pointer duration-300 transition-all border-l-0 border-r-0 border-b-0 border-1 border-solid border-disable-01',
                {
                  'justify-center rounded-xl  rounded-tl-none rounded-tr-none items-center flex':
                    index === DATA_PROFILE?.length - 1,
                },
              )}
              key={item?.id}
            >
              <div className='flex items-center gap-2'>
                {index === DATA_PROFILE?.length - 1 && <SignOut size={16} />}

                <Text type='font-14-400'>{item?.label}</Text>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ContentProfile;
