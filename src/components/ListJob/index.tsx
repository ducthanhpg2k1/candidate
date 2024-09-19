/* eslint-disable no-console */
// import SildeBanner from './SildeBanner';

import { useRef, useState } from 'react';

import { Pagination, Tab, Tabs } from '@nextui-org/react';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

import SelectSearch from '@components/UI/SelectSearch';
import Text from '@components/UI/Text';

import FilterJob from './FilterJob';
import ListViewDetailJob from './ListViewDetailJob';
import ListViewJob from './ListViewJob';
import SearchCustom from './SearchCustom';
import SearchCustomMobile from './SearchCustomMobile';
import { useGetListJob } from './service';

const ListJob = () => {
  const divRef: any = useRef();
  const [tab, setTab] = useState('list');
  const { dataListJob, onChange } = useGetListJob();

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
              <div className='border-1 transition-all hover:border-primary rounded-2xl  border-gray-100 border-solid pl-4 pr-2 py-1 flex gap-3 justify-center items-center'>
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
                <div className='border-1 transition-all hover:border-primary rounded-2xl border-gray-100 border-solid pl-4 pr-2 py-1 flex gap-3 justify-center items-center'>
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
          {tab === 'list'
            ? (
              <ListViewJob dataListJob={dataListJob} />
            )
            : (
              <ListViewDetailJob dataListJob={dataListJob} />
            )}

          <div className='flex justify-center items-center'>
            <Pagination
              classNames={{
                cursor: ['bg-primary'],
              }}
              onChange={(page: number) => {
                scrollToDiv();
                onChange(page);
              }}
              size='lg'
              showControls
              initialPage={1}
              total={dataListJob?.data?.pagination?.per_page}
              page={dataListJob?.data?.pagination?.current_page}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListJob;
