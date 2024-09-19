import clsx from 'clsx';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Image from 'next/image';

import Text from '@components/UI/Text';

dayjs.extend(customParseFormat);

const ListViewJob = ({ dataListJob }: { dataListJob: any }) => {
  return (
    <div className='flex flex-col  border-1 border-solid border-gray-100 rounded-2xl'>
      <div className='p-4 lg:p-5 flex justify-between items-center border-b border-b-gray-100 border-solid'>
        <Text type='font-20-700' className='text-primary font-nunito-sans !font-black'>
          TẤT CẢ VIỆC LÀM
        </Text>
        <Text type='font-15-600' className='text-primary font-nunito-sans !font-black'>
          {`${dataListJob?.data?.pagination?.total} công việc`}
        </Text>
      </div>
      {dataListJob?.data?.data?.map((item: any, index: number) => {
        const futureDate = dayjs(item?.deadline, 'DD/MM/YYYY');
        const daysRemaining = futureDate.diff(dayjs(), 'day');

        return (
          <div
            key={item?.id}
            className={clsx(
              'flex flex-col transition-all hover:bg-[#ecf5ff] cursor-pointer gap-2 px-6 lg:px-9 border-b border-solid pt-5 pb-5 border-b-gray-100',
              {
                'border-b-0': index === dataListJob?.data?.data?.length - 1,
              },
            )}
          >
            <Text
              type='font-16-700'
              className='uppercase text-primary  !font-black font-nunito-sans'
            >
              {item?.title}
            </Text>
            <div className='flex items-center justify-between'>
              <Text type='font-14-400' className='uppercase text-disable'>
                {item?.company_name}
              </Text>
              <Text type='font-14-400' className='text-disable'>
                {item?.deadline}
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
              <Text type='font-15-400' className='text-black hover:underline hover:text-primary'>
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
                {item?.address}
              </Text>
            </div>
            <div className='rounded-full w-max bg-disable-01 py-[6px] px-[10px] flex justify-center items-center'>
              <Text type='font-14-400' className='text-back'>
                Còn{' '}
                <Text element='span' type='font-14-700' className='text-primary'>
                  {daysRemaining}
                </Text>{' '}
                ngày để ứng tuyển
              </Text>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ListViewJob;
