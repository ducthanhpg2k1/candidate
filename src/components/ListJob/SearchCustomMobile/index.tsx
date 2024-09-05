import { useState } from 'react';

import { Button } from '@nextui-org/react';
import { FunnelSimple } from '@phosphor-icons/react';
import Image from 'next/image';

import CustomSelect from '@components/UI/CustomSelect';
import Text from '@components/UI/Text';

import DrawerFilter from './DrawerFilter';


const SearchCustomMobile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='flex items-center gap-2'>
        <CustomSelect
          className='w-full'
          radius='full'
          size='lg'
          placeholder='Tất cả địa điểm'
          options={[
            {
              value: 1,
              label: 'Điểm điểm 1',
            },
            {
              value: 2,
              label: 'Địa điểm 2',
            },
            {
              value: 3,
              label: 'Địa điểm 3',
            },
          ]}
        />
        <Button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          isIconOnly
          color='default'
          size='lg'
          radius='full'
        >
          <FunnelSimple size={24} />
        </Button>
      </div>

      <div className='flex items-center bg-white rounded-full min-h-[58px] w-full border-3 border-solid border-primary'>
        <div className='flex items-center gap-3 flex-grow px-6'>
          <Image
            src={'/static/icons/ic-search.svg'}
            width={20}
            height={20}
            className='w-5 h-5'
            alt=''
          />

          <input
            className='bg-transparent outline-none text-black !font-nunito-sans w-full text-[16px] placeholder:text-[16px] placeholder:text-gray'
            type='text'
            placeholder='Nhập tên vị trí công việc'
          />
        </div>

        <Button radius='full' className='h-[54px] bg-primary mr-[-2px] px-8 rounded-l-none'>
          <Text className='text-white font-nunito-sans' type='font-17-600'>
            Tìm kiếm
          </Text>
        </Button>
      </div>
      <DrawerFilter onClose={() => setIsDrawerOpen(false)} isDrawerOpen={isDrawerOpen} />
    </div>
  );
};
export default SearchCustomMobile;
