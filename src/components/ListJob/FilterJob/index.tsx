/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable unicorn/consistent-function-scoping */
import { CheckboxGroup } from '@nextui-org/react';

import CheckboxCustom from '@components/UI/CheckboxCustom';
import Text from '@components/UI/Text';

export const DataCity = [
  {
    value: 'hn',
    label: 'Hà nội',
    total: 314,
  },
  {
    value: 'hcm',
    label: 'Hồ Chí Minh',
    total: 314,
  },
  {
    value: 'hp',
    label: 'Hải Phòng',
    total: 314,
  },
  {
    value: 'bd',
    label: 'Bình Dương',
    total: 314,
  },
  {
    value: 'hy',
    label: 'Hưng Yên',
    total: 314,
  },
];

export const DataTime = [
  {
    value: 'part-time',
    label: 'Toàn thời gian',
    total: 123,
  },
  {
    value: 'full-time',
    label: 'Bán thời gian',
    total: 1502,
  },
];

export const DataHeadquarters = [
  {
    value: 'supermarket',
    label: 'Khối siêu thị',
    total: 2852,
  },
  {
    value: 'office',
    label: 'Khối văn phòng (sử dụng tiếng Anh)',
    total: 3785,
  },
];

const FilterJob = ({ masterData, onChange }: any) => {
  const onChangeFilterPosition = (e: any) => {
    console.log(e, 'e');
  };
  const onChangeTypeOfWorks = (e: any) => {
    console.log(e, 'e');
  };

  return (
    <div className='flex flex-col w-full'>
      <div className='p-4 bg-primary border-b-0 rounded-b-none rounded-2xl'>
        <Text type='font-16-700' className='text-white font-nunito-sans !font-black'>
          Bộ lọc nhanh:
        </Text>
      </div>
      <div className='border-1 border-solid border-gray-100 border-b-0 border-t-0 py-3 px-4 flex flex-col gap-4'>
        <Text type='font-14-700' className='text-black font-nunito-sans !font-black'>
          Tỉnh/Thành phố
        </Text>
        <div className='flex flex-col ml-2'>
          <CheckboxGroup
            onChange={onChangeFilterPosition}
            classNames={{
              wrapper: 'gap-4',
            }}
          >
            {masterData?.data?.provinces?.slice(0, 5)?.map((item: any) => {
              return (
                <CheckboxCustom size='lg' radius='sm' key={item?.id} value={item?.id}>
                  <Text type='font-13-400' className='text-black'>
                    {item?.name}
                  </Text>
                </CheckboxCustom>
              );
            })}
          </CheckboxGroup>
        </div>
      </div>
      <div className='border-1 border-solid border-gray-100 border-b-0 py-3 px-4 flex flex-col gap-5'>
        <Text type='font-14-700' className='text-black font-nunito-sans  !font-black'>
          Loại hình
        </Text>
        <div className='flex flex-col  ml-2'>
          <CheckboxGroup
            classNames={{
              wrapper: 'gap-4',
            }}
            onChange={onChangeTypeOfWorks}
          >
            {masterData?.data?.type_of_works?.slice(0, 5)?.map((item: any) => {
              return (
                <CheckboxCustom size='lg' radius='sm' key={item?.id} value={item?.id}>
                  <Text type='font-13-400' className='text-black'>
                    {item?.name}
                  </Text>
                </CheckboxCustom>
              );
            })}
          </CheckboxGroup>
        </div>
      </div>
      <div className='border-1 border-solid border-gray-100 rounded-2xl rounded-t-none py-3 px-4 flex flex-col gap-5'>
        <Text type='font-14-700' className='text-black font-nunito-sans  !font-black'>
          Trụ sở
        </Text>
        <div className='flex flex-col gap-4 ml-2'>
          {DataHeadquarters?.map((item) => {
            return (
              <div key={item?.value} className='flex justify-between items-center gap-8'>
                <CheckboxCustom size='lg' radius='sm'>
                  <Text type='font-13-400' className='text-black'>
                    {item?.label}
                  </Text>
                </CheckboxCustom>
                <Text type='font-12-400' className='text-gray'>
                  {item?.total}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default FilterJob;
