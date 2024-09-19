import { Button } from '@nextui-org/react';
import Image from 'next/image';

import SelectSearch from '@components/UI/SelectSearch';
import Text from '@components/UI/Text';

const SearchCustom = () => {
  return (
    <div className='flex items-center bg-white hover:opacity-90 rounded-full min-h-[58px] w-8/12 border-3 border-solid border-primary'>
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

      <div className='w-[3px] bg-primary mx-8 h-8'></div>

      <div className='flex items-center px-4 gap-3'>
        <Image
          src={'/static/icons/ic-GeoAlt.svg'}
          width={20}
          height={20}
          className='w-5 h-5'
          alt=''
        />
        <SelectSearch
          className='min-w-52'
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
      </div>
      <Button radius='full' className='h-[54px] bg-primary mr-[-2px] px-8 rounded-l-none'>
        <Text className='text-white font-nunito-sans' type='font-17-600'>
          Tìm kiếm
        </Text>
      </Button>
    </div>
  );
};
export default SearchCustom;
