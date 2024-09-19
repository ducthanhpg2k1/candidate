/* eslint-disable no-console */
// import SildeBanner from './SildeBanner';

import { useRef, useState } from 'react';

import { Pagination, Tab, Tabs } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

import SelectSearch from '@components/UI/SelectSearch';
import Text from '@components/UI/Text';

import FilterJob from './FilterJob';
import SearchCustom from './SearchCustom';
import SearchCustomMobile from './SearchCustomMobile';
import ListViewDetailJob from './ListViewDetailJob';
import ListViewJob from './ListViewJob';

export const DataJob = [
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
  const divRef: any = useRef();
  const [tab, setTab] = useState('list');

  const scrollToDiv = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const onChangeTabs = (tab: any) => {
    setTab(tab);
  };

  return (
    <div className='flex-col gap-8 flex' ref={divRef}>
      <div className='flex md:justify-center items-center'>
        {isMobile ? <SearchCustomMobile /> : <SearchCustom />}
      </div>
      <div className='grid grid-cols-4 gap-8'>
        {!isMobile && <FilterJob />}
        <div className='col-span-4 lg:col-span-3 w-full flex flex-col gap-6'>
          {!isMobile && (
            <div className='flex gap-4 md:justify-between items-center'>
              <div className='border-1 rounded-2xl  border-gray-100 border-solid pl-4 pr-2 py-1 flex gap-3 justify-center items-center'>
                <Text type='font-15-700' className='font-nunito-sans !font-black'>
                  Bộ lọc:
                </Text>
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
              <div className='flex items-center gap-2'>
                <div className='border-1 rounded-2xl border-gray-100 border-solid pl-4 pr-2 py-1 flex gap-3 justify-center items-center'>
                  {!isMobile && (
                    <Text type='font-15-700' className='font-nunito-sans !font-black'>
                      Sắp xếp theo:
                    </Text>
                  )}
                  <SelectSearch
                    colorSelectorIcon='text-black'
                    className='min-w-[120px] w-max'
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
                <Tabs
                  classNames={{
                    tabList: ['min-h-[44px] gap-0'],
                    tab: ['w-full'],
                  }}
                  selectedKey={tab}
                  onSelectionChange={onChangeTabs}
                  radius='md'
                  size='lg'
                  color='default'
                >
                  <Tab
                    key='list'
                    title={
                      <Image
                        src={'/static/icons/ic-list.svg'}
                        width={24}
                        height={24}
                        alt=''
                        className='w-6 h-6'
                      />
                    }
                  />
                  <Tab
                    key='view'
                    title={
                      <Image
                        src={'/static/icons/ic-view.svg'}
                        width={24}
                        height={24}
                        alt=''
                        className='w-6 h-6'
                      />
                    }
                  />
                </Tabs>
              </div>
            </div>
          )}
          {tab === 'list' ? <ListViewJob /> : <ListViewDetailJob />}

          <div className='flex justify-center items-center'>
            <Pagination
              classNames={{
                cursor: ['bg-primary'],
              }}
              onChange={() => {
                scrollToDiv();
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
