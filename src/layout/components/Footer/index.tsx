import React from 'react';

import { Button } from '@nextui-org/react';
import Image from 'next/image';

import Text from '@components/UI/Text';

const Footer = () => {
  return (
    <div className="w-full min-h-[287px] bg-[url('/static/images/bg-footer.png')]  bg-no-repeat bg-cover">
      <div className='max-w-[1200px] px-6 mx-auto flex items-center h-full'>
        <div className='flex flex-col gap-4'>
          <Image
            src={'/static/images/logo-aeon-recruitment.png'}
            width={122}
            height={59}
            alt='logo'
            className='w-[122px] h-[59px]'
          />
          <div className='grid gap-8 grid-cols-8'>
            <div className='flex flex-col gap-3 col-span-5'>
              <Text className='text-white font-nunito-sans' type='font-18-700'>
                Văn Phòng Chính
              </Text>
              <div className='flex items-center gap-2'>
                <Image
                  src={'/static/icons/ic-location.svg'}
                  className='w-5 h-5'
                  width={20}
                  height={20}
                  alt=''
                />
                <Text className='text-white/80 hover:underline cursor-pointer' type='font-14-400'>
                  30 Tân Thắng, Phường Sơn Kỳ, Quận Tân Phú, Tp.Hồ Chí Minh.
                </Text>
              </div>
              <div className='flex items-center gap-2'>
                <Image
                  src={'/static/icons/ic-email.svg'}
                  className='w-5 h-5'
                  width={20}
                  height={20}
                  alt=''
                />

                <Text className='text-white/80  hover:underline cursor-pointer' type='font-14-400'>
                  tuyendung@aeon.com.vn
                </Text>
              </div>
              <div className='flex items-center gap-2'>
                <Image
                  src={'/static/icons/ic-phone.svg'}
                  className='w-5 h-5'
                  width={20}
                  height={20}
                  alt=''
                />

                <Text className='text-white/80  hover:underline cursor-pointer' type='font-14-400'>
                  (028) 6288 7711
                </Text>
              </div>
              <div className='flex items-center gap-2'>
                <Image
                  src={'/static/icons/ic-website.svg'}
                  className='w-5 h-5'
                  width={20}
                  height={20}
                  alt=''
                />

                <Text className='text-white/80  hover:underline cursor-pointer' type='font-14-400'>
                  https://www.aeon.com.vn/
                </Text>
              </div>
            </div>

            <div className='flex flex-col gap-[10px]'>
              <Text className='text-white w-max font-nunito-sans' type='font-18-700'>
                Follow Us
              </Text>
              <div className='flex items-center gap-5'>
                <Button isIconOnly size='md' radius='full' variant='light'>
                  <Image
                    src={'/static/icons/ic-facebook.svg'}
                    className='w-6 h-6'
                    width={24}
                    height={24}
                    alt=''
                  />
                </Button>
                <Button isIconOnly size='md' radius='full' variant='light'>
                  <Image
                    src={'/static/icons/ic-instagram.svg'}
                    className='w-6 h-6'
                    width={24}
                    height={24}
                    alt=''
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
