import { useEffect, useState } from 'react';

import { Button, Spinner } from '@nextui-org/react';
import { ClockCountdown } from '@phosphor-icons/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Text from '@components/UI/Text';
import { ROUTE_PATH } from '@utils/common';

import { useGetDetailJob } from './service';

const ListViewDetailJob = ({ dataListJob }: { dataListJob: any }) => {
  const [loading, setLoading] = useState(false);
  const handleViewDetailJob = (data: any) => {
    runGetDetailJob(data?.id);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  const router = useRouter();

  const { dataDetailJob, run: runGetDetailJob } = useGetDetailJob();

  useEffect(() => {
    const firstId = dataListJob?.data?.data?.[0]?.id;
    runGetDetailJob(firstId);
  }, []);

  return (
    <div className='grid grid-cols-6 gap-3'>
      <div className='col-span-2 flex flex-col gap-3'>
        {dataListJob?.data?.data?.map((item: any) => {
          return (
            <div
              key={item?.id}
              onClick={() => handleViewDetailJob(item)}
              className={clsx(
                'duration-300 ease-in-out hover:scale-105 group cursor-pointer p-4  transition-all relative rounded-xl shadow-large flex flex-col gap-3',
                {
                  'bg-[#ecf5ff] border-1.5 border-solid border-primary':
                    item?.id === dataDetailJob?.data?.id,
                },
              )}
            >
              {item?.id === dataDetailJob?.id && (
                <div className='w-1 h-[110px] bottom-3 left-[0px] absolute bg-primary rounded-full' />
              )}

              <Text
                type='font-14-700'
                className='uppercase text-primary  !font-extrabold font-nunito-sans'
              >
                {item?.title}
              </Text>
              <div className='flex items-center justify-between'>
                <Text type='font-13-400' className='uppercase text-disable'>
                  {item?.company_name}
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
                  {item?.address}
                </Text>
              </div>
            </div>
          );
        })}
      </div>
      <div className='col-span-4 h-full'>
        <div
          className={clsx(
            'relative p-6 flex flex-col gap-8 rounded-xl bg-white shadow-large  overflow-auto  h-full',
          )}
        >
          {loading && <Spinner className='absolute right-1/2 top-1/4' />}

          <div className='flex flex-col gap-3'>
            <Text
              type='font-16-700'
              className='uppercase text-primary  !font-extrabold font-nunito-sans'
            >
              {dataDetailJob?.data?.title}
            </Text>
            <div className='flex items-center justify-between'>
              <Text type='font-13-400' className='uppercase text-disable'>
                {dataDetailJob?.data?.company?.name}
              </Text>
              <Text type='font-13-400' className='text-disable'>
                {dataDetailJob?.create_at}
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
                {8}{' '}
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
                {dataDetailJob?.data?.company?.default_address?.full_address}
              </Text>
            </div>
            <div className='flex gap-[10px]'>
              <ClockCountdown weight='fill' className='mt-1' size={16} color='#b31e8d' />
              <Text type='font-13-400' className='text-black'>
                {`Hạn tuyển dụng: ${dataDetailJob?.data?.deadline}`}
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
            <div
              className='activityJob'
              dangerouslySetInnerHTML={{
                __html: dataDetailJob?.data?.key_activity,
              }}
            />
          </div>
          <div className='flex flex-col gap-3'>
            <Text
              type='font-16-700'
              className='uppercase mb-4 text-[#051C3F] !font-extrabold font-nunito-sans'
            >
              Yêu cầu ứng viên
            </Text>
            <div
              className='qualificationRequirementJob'
              dangerouslySetInnerHTML={{
                __html: dataDetailJob?.data?.qualification_and_requirement,
              }}
            />
          </div>
          <div className='flex flex-col gap-4'>
            <Text
              type='font-16-700'
              className='uppercase text-[#051C3F] !font-extrabold font-nunito-sans'
            >
              Quyền lợi
            </Text>
            <div
              className='benefitJob'
              dangerouslySetInnerHTML={{ __html: dataDetailJob?.data?.benefit }}
            />
          </div>
          <div className='flex flex-col gap-6'>
            <Text
              type='font-16-700'
              className='uppercase text-[#051C3F] !font-extrabold font-nunito-sans'
            >
              Thông tin liên hệ
            </Text>
            <Text type='font-14-400'>{`Người liên hệ: ${dataDetailJob?.data?.recruitment_contact?.name}`}</Text>
            <Text type='font-14-400'>{`Số điện thoại:  ${dataDetailJob?.data?.recruitment_contact?.phone_number}`}</Text>
            <Text type='font-14-400'>{`Email: ${dataDetailJob?.data?.recruitment_contact?.email}`}</Text>
          </div>
          <Button
            onClick={() => router.push({ pathname: ROUTE_PATH.PROFILE, query: 'create_job' })}
            type='submit'
            radius='full'
            className='bg-primary'
            size='lg'
          >
            <Text className='text-white' type='font-16-700'>
              Ứng tuyển ngay
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ListViewDetailJob;
