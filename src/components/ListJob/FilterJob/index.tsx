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

const FilterJob = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='p-4 bg-primary border-b-0 rounded-b-none rounded-2xl'>
        <Text type='font-16-700' className='text-white font-lato'>
          Bộ lọc nhanh:
        </Text>
      </div>
      <div className='border-1 border-solid border-gray-100 border-b-0 border-t-0 py-3 px-4 flex flex-col gap-5'>
        <Text type='font-14-700' className='text-black font-lato'>
          Tỉnh/Thành phố
        </Text>
        <div className='flex flex-col gap-4 ml-2'>
          {DataCity?.map((item) => {
            return (
              <div key={item?.value} className='flex justify-between items-center'>
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
      <div className='border-1 border-solid border-gray-100 border-b-0 py-3 px-4 flex flex-col gap-5'>
        <Text type='font-14-700' className='text-black font-lato'>
          Loại hình
        </Text>
        <div className='flex flex-col gap-4 ml-2'>
          {DataTime?.map((item) => {
            return (
              <div key={item?.value} className='flex justify-between items-center'>
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
      <div className='border-1 border-solid border-gray-100 rounded-2xl rounded-t-none py-3 px-4 flex flex-col gap-5'>
        <Text type='font-14-700' className='text-black font-lato'>
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
