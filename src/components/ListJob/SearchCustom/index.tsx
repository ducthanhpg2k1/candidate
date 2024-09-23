import { useState } from 'react';

import { Button } from '@nextui-org/react';
import Image from 'next/image';

import SelectSearch from '@components/UI/SelectSearch';
import Text from '@components/UI/Text';

const SearchCustom = ({ masterData, onChange }: any) => {
  const [valueSearch, setValueSearch] = useState<string>('');
  const [valuePosition, setValuePosition] = useState<string>('');

  const handleChangeInputSearch = (e: any) => {
    setValueSearch(e.target.value);
  };
  const onChangeSelect = (e: any) => {
    setValuePosition(e.target.value);
  };

  const handleSearch = () => {
    const filters = {
      keyword_search: valueSearch,
      area_ids: valuePosition,
    };
    onChange(1, filters);
  };
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
          onChange={handleChangeInputSearch}
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
          onChange={onChangeSelect}
          options={
            masterData?.data?.provinces?.map((item: any) => {
              return {
                value: item?.id,
                label: item?.name,
              };
            }) || []
          }
        />
      </div>
      <Button
        onClick={handleSearch}
        radius='full'
        className='h-[54px] bg-primary mr-[-2px] px-8 rounded-l-none'
      >
        <Text className='text-white font-nunito-sans' type='font-17-600'>
          Tìm kiếm
        </Text>
      </Button>
    </div>
  );
};
export default SearchCustom;
