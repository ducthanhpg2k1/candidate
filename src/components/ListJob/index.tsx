// import SildeBanner from './SildeBanner';

import { Pagination } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

import SelectSearch from '@components/UI/SelectSearch';
import Text from '@components/UI/Text';

import FilterJob from './FilterJob';
import SearchCustom from './SearchCustom';
import SearchCustomMobile from './SearchCustomMobile';

const DataJob = [
  {
    id: 1,
    title: '[AEON HẢI PHÒNG] TRƯỞNG NHÓM TƯƠI SỐNG - CÁ',
    position: 'Group Leader',
    create_at: 'Cập nhật 5 phút trước',
    view: 8,
    location:
      'Trung tâm Thương mại Aeon Mall Hải Phòng Lê Chân, Đường Hồ Sen - Cầu Rào 2, Phường Kênh Dương, Quận Lê Chân, Thành phố Hải Phòng',
    expired: 8,
  },
  {
    id: 2,
    title: '[AEON HẢI PHÒNG] TRƯỞNG NHÓM TƯƠI SỐNG - CÁ',
    position: 'Group Leader',
    create_at: 'Cập nhật 5 phút trước',
    view: 8,
    location:
      'Trung tâm Thương mại Aeon Mall Hải Phòng Lê Chân, Đường Hồ Sen - Cầu Rào 2, Phường Kênh Dương, Quận Lê Chân, Thành phố Hải Phòng',
    expired: 8,
  },
  {
    id: 3,
    title: '[AEON HẢI PHÒNG] TRƯỞNG NHÓM TƯƠI SỐNG - CÁ',
    position: 'Group Leader',
    create_at: 'Cập nhật 5 phút trước',
    view: 8,
    location:
      'Trung tâm Thương mại Aeon Mall Hải Phòng Lê Chân, Đường Hồ Sen - Cầu Rào 2, Phường Kênh Dương, Quận Lê Chân, Thành phố Hải Phòng',
    expired: 8,
  },
  {
    id: 4,
    title: '[AEON HẢI PHÒNG] TRƯỞNG NHÓM TƯƠI SỐNG - CÁ',
    position: 'Group Leader',
    create_at: 'Cập nhật 5 phút trước',
    view: 8,
    location:
      'Trung tâm Thương mại Aeon Mall Hải Phòng Lê Chân, Đường Hồ Sen - Cầu Rào 2, Phường Kênh Dương, Quận Lê Chân, Thành phố Hải Phòng',
    expired: 8,
  },
  {
    id: 5,
    title: '[AEON HẢI PHÒNG] TRƯỞNG NHÓM TƯƠI SỐNG - CÁ',
    position: 'Group Leader',
    create_at: 'Cập nhật 5 phút trước',
    view: 8,
    location:
      'Trung tâm Thương mại Aeon Mall Hải Phòng Lê Chân, Đường Hồ Sen - Cầu Rào 2, Phường Kênh Dương, Quận Lê Chân, Thành phố Hải Phòng',
    expired: 8,
  },
  {
    id: 6,
    title: '[AEON HẢI PHÒNG] TRƯỞNG NHÓM TƯƠI SỐNG - CÁ',
    position: 'Group Leader',
    create_at: 'Cập nhật 5 phút trước',
    view: 8,
    location:
      'Trung tâm Thương mại Aeon Mall Hải Phòng Lê Chân, Đường Hồ Sen - Cầu Rào 2, Phường Kênh Dương, Quận Lê Chân, Thành phố Hải Phòng',
    expired: 8,
  },
  {
    id: 7,
    title: '[AEON HẢI PHÒNG] TRƯỞNG NHÓM TƯƠI SỐNG - CÁ',
    position: 'Group Leader',
    create_at: 'Cập nhật 5 phút trước',
    view: 8,
    location:
      'Trung tâm Thương mại Aeon Mall Hải Phòng Lê Chân, Đường Hồ Sen - Cầu Rào 2, Phường Kênh Dương, Quận Lê Chân, Thành phố Hải Phòng',
    expired: 8,
  },
];

const ListJob = () => {
  return (
    <div className='flex-col gap-8 flex'>
      <div className='flex md:justify-center items-center'>
        {isMobile ? <SearchCustomMobile /> : <SearchCustom />}
      </div>
      <div className='grid grid-cols-4 gap-8'>
        {!isMobile && <FilterJob />}
        <div className='col-span-4 lg:col-span-3 w-full flex flex-col gap-6'>
          {!isMobile && (
            <div className='flex gap-4 md:justify-between items-center'>
              <div className='border-1 rounded-2xl  border-gray-100 border-solid pl-4 pr-2 py-1 flex gap-3 justify-center items-center'>
                <Text type='font-15-700'>Bộ lọc:</Text>
                <SelectSearch
                  colorSelectorIcon='text-black'
                  className='min-w-[200px] w-max'
                  placeholder='Tất cả vị trí công việc'
                  options={[
                    {
                      value: 1,
                      label: 'Kinh doanh',
                    },
                    {
                      value: 2,
                      label: 'Sales',
                    },
                    {
                      value: 3,
                      label: 'Bán hàng',
                    },
                  ]}
                />
              </div>
              <div className='border-1 rounded-2xl border-gray-100 border-solid pl-4 pr-2 py-1 flex gap-3 justify-center items-center'>
                {!isMobile && <Text type='font-15-700'>Sắp xếp theo:</Text>}
                <SelectSearch
                  colorSelectorIcon='text-black'
                  className='min-w-[200px] w-max'
                  placeholder='Mới nhất'
                  options={[
                    {
                      value: 1,
                      label: 'Mới nhất',
                    },
                    {
                      value: 2,
                      label: 'Cũ nhất',
                    },
                  ]}
                />
              </div>
            </div>
          )}

          <div className='flex flex-col  border-1 border-solid border-gray-100 rounded-2xl'>
            <div className='p-4 lg:p-5 flex justify-between items-center border-b border-b-gray-100 border-solid'>
              <Text type='font-20-700' className='text-primary'>
                TẤT CẢ VIỆC LÀM
              </Text>
              <Text type='font-15-600' className='text-primary'>
                350 công việc
              </Text>
            </div>
            {DataJob?.map((item, index) => {
              return (
                <div
                  key={item?.id}
                  className={clsx(
                    'flex flex-col cursor-pointer gap-2 px-6 lg:px-9 border-b border-solid pt-5 pb-5 border-b-gray-100',
                    {
                      'border-b-0': index === DataJob?.length - 1,
                    },
                  )}
                >
                  <Text type='font-15-700' className='uppercase text-primary'>
                    {item?.title}
                  </Text>
                  <div className='flex items-center justify-between'>
                    <Text type='font-14-400' className='uppercase text-disable'>
                      {item?.position}
                    </Text>
                    <Text type='font-14-400' className='text-disable'>
                      {item?.create_at}
                    </Text>
                  </div>
                  <div className='flex items-center gap-[10px]'>
                    <Image
                      src={'/static/icons/ic-eye.svg'}
                      alt=''
                      className='w-4 h-4'
                      width={16}
                      height={16}
                    />
                    <Text type='font-15-700' className='text-primary'>
                      {item?.view}{' '}
                      <Text element='span' type='font-15-400' className='text-black'>
                        người đã xem
                      </Text>
                    </Text>
                  </div>
                  <div className='flex items-center gap-[10px]'>
                    <Image
                      className='w-4 h-4'
                      src={'/static/icons/ic-dollar.svg'}
                      alt=''
                      width={16}
                      height={16}
                    />
                    <Text
                      type='font-15-400'
                      className='text-black hover:underline hover:text-primary'
                    >
                      Đăng nhập để xem chi tiết
                    </Text>
                  </div>
                  <div className='flex items-center gap-[10px]'>
                    <Image
                      className='w-4 h-4'
                      src={'/static/icons/ic-location-primary.svg'}
                      alt=''
                      width={16}
                      height={16}
                    />
                    <Text type='font-15-400' className='text-black'>
                      {item?.location}
                    </Text>
                  </div>
                  <div className='rounded-full w-max bg-disable-01 py-[6px] px-[10px] flex justify-center items-center'>
                    <Text type='font-14-400' className='text-back'>
                      Còn{' '}
                      <Text element='span' type='font-14-700' className='text-primary'>
                        {item?.expired}
                      </Text>{' '}
                      ngày để ứng tuyển
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='flex justify-center items-center'>
            <Pagination
              classNames={{
                cursor: ['bg-primary'],
              }}
              size='lg'
              showControls
              total={10}
              initialPage={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListJob;
