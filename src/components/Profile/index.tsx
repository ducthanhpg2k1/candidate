import { useState } from 'react';

import { Button, Radio, RadioGroup } from '@nextui-org/react';
import { ArrowLeft } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

import CustomSelect from '@components/UI/CustomSelect';
import Text from '@components/UI/Text';

import FormApplyJob from './FormApplyJob';

const Profile = () => {
  const [dataCreateJob, setDataCreateJob] = useState<any>({});
  const handleDataCreateJob = (data: any) => {
    setDataCreateJob(data);
  };
  return (
    <>
      {dataCreateJob?.job
        ? (
          <FormApplyJob dataCreateJob={dataCreateJob} />
        )
        : (
          <ApplicationProfile handleSubmitFormCreateProfile={handleDataCreateJob} />
        )}
    </>
  );
};
export default Profile;

export const DATA_ADDRESS = [
  {
    value: '1',
    label: 'Điểm điểm 1',
  },
  {
    value: '2',
    label: 'Địa điểm 2',
  },
  {
    value: '3',
    label: 'Địa điểm 3',
  },
];

const ApplicationProfile = ({
  handleSubmitFormCreateProfile,
}: {
  handleSubmitFormCreateProfile: (data: any) => void;
}) => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<any>({});

  const DATAJOB = [
    {
      label: 'Nhân viên khối siêu thị',
      value: 'supermarket',
    },
    {
      label: 'Nhân viên văn phòng (sử dụng tiếng anh)',
      value: 'office',
    },
  ];

  const onSubmit = (values: any) => {
    const data = {
      address: DATA_ADDRESS.find((item) => item?.value === values?.address)?.label,
      job: DATAJOB.find((item) => item?.value === values?.job)?.label,
    };
    handleSubmitFormCreateProfile(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-6 w-6/12 m-auto mt-[-40px]'>
        <div className='border-1 flex flex-col gap-6 border-solid border-disable-01 p-4 rounded-lg'>
          <div className='flex items-center gap-2 mb-2'>
            <Button
              variant='light'
              size='md'
              isIconOnly
              onClick={() => router.back()}
              className='rounded-full'
            >
              <ArrowLeft size={20} />
            </Button>
            <Text type='font-20-700'>Hồ sơ ứng tuyển</Text>
          </div>
          <div className='flex flex-col gap-2'>
            <Text type='font-14-600'>Công việc</Text>
            <Controller
              name='job'
              control={control}
              render={({ field }: any) => (
                <RadioGroup
                  {...field}
                  classNames={{
                    wrapper: 'gap-20',
                  }}
                  orientation='horizontal'
                >
                  {DATAJOB?.map((item: any) => {
                    return (
                      <Radio key={item?.value} value={item?.value}>
                        {item?.label}
                      </Radio>
                    );
                  })}
                </RadioGroup>
              )}
            />
          </div>
          <Controller
            name='address'
            control={control}
            defaultValue=''
            render={({ field }: any) => (
              <CustomSelect
                {...field}
                className='w-full'
                radius='lg'
                size='lg'
                label='Địa điểm làm việc'
                placeholder='Chọn địa điểm nộp đơn'
                options={DATA_ADDRESS}
              />
            )}
          />

          <div className='flex items-center gap-2 mt-8'>
            <Button radius='full' size='lg' className='w-full'>
              <Text className='text-black' type='font-14-600'>
                Hủy
              </Text>
            </Button>
            <Button type='submit' radius='full' size='lg' className='bg-primary w-full'>
              <Text className='text-white' type='font-14-600'>
                Xác nhận
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
