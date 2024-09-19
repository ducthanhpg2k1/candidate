import Text from '@components/UI/Text';
import { DataJob } from '..';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

const ListViewDetailJob = () => {
  const [dataViewDetail, setDataViewDetail] = useState<any>(DataJob?.[0]);
  const handleViewDetailJob = (data: any) => {
    setDataViewDetail(data);
  };
  return (
    <div className='grid grid-cols-6 gap-3'>
      <div className='col-span-2 flex flex-col gap-3'>
        {DataJob?.map((item) => {
          return (
            <div
              key={item?.id}
              onClick={() => handleViewDetailJob(item)}
              className={clsx(
                'cursor-pointer p-4 transition-all rounded-xl bg-white shadow-large flex flex-col gap-3',
                {
                  'bg-[#ecf5ff] ': item?.id === dataViewDetail?.id,
                },
              )}
            >
              <Text
                type='font-14-700'
                className='uppercase text-primary  !font-extrabold font-nunito-sans'
              >
                {item?.title}
              </Text>
              <div className='flex items-center justify-between'>
                <Text type='font-13-400' className='uppercase text-disable'>
                  {item?.position}
                </Text>
              </div>
              <div className='flex items-center gap-[8px]'>
                <Image
                  className='w-4 h-4'
                  src={'/static/icons/ic-location-primary.svg'}
                  alt=''
                  width={16}
                  height={16}
                />
                <Text type='font-13-400' className='text-black line-clamp-1'>
                  {item?.location}
                </Text>
              </div>
            </div>
          );
        })}
      </div>
      <div className='col-span-4 h-full '>
        <div className='p-6 flex flex-col gap-8 rounded-xl bg-white shadow-large  h-full'>
          <div className='flex flex-col gap-3'>
            <Text
              type='font-16-700'
              className='uppercase mb-4 text-[#051C3F] !font-extrabold font-nunito-sans'
            >
              Chi tiết việc làm
            </Text>
            <Text
              type='font-16-700'
              className='uppercase text-primary  !font-extrabold font-nunito-sans'
            >
              {dataViewDetail?.title}
            </Text>
            <div className='flex items-center justify-between'>
              <Text type='font-13-400' className='uppercase text-disable'>
                {dataViewDetail?.position}
              </Text>
              <Text type='font-13-400' className='text-disable'>
                {dataViewDetail?.create_at}
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
              <Text type='font-14-700' className='text-primary'>
                {dataViewDetail?.view}{' '}
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
                type='font-13-400'
                className='cursor-pointer text-black hover:underline hover:text-primary'
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
              <Text type='font-13-400' className='text-black'>
                {dataViewDetail?.location}
              </Text>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <Text
              type='font-16-700'
              className='uppercase mb-4 text-[#051C3F] !font-extrabold font-nunito-sans'
            >
              Mô tả công việc
            </Text>
          </div>
          <div className='flex flex-col gap-3'>
            <Text
              type='font-16-700'
              className='uppercase mb-4 text-[#051C3F] !font-extrabold font-nunito-sans'
            >
              Yêu cầu ứng viên
            </Text>
          </div>
          <div className='flex flex-col gap-3'>
            <Text
              type='font-16-700'
              className='uppercase mb-4 text-[#051C3F] !font-extrabold font-nunito-sans'
            >
              Quyền lợi
            </Text>
          </div>
          <div className='flex flex-col gap-3'>
            <Text
              type='font-16-700'
              className='uppercase mb-4 text-[#051C3F] !font-extrabold font-nunito-sans'
            >
              Thông tin liên hệ
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListViewDetailJob;
