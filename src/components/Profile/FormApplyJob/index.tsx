import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

import CustomSelect from '@components/UI/CustomSelect';
import Text from '@components/UI/Text';

import ConcernWork from './ConcernWork';
import JobApplication from './JobApplication';
import LearningProcess from './LearningProcess';
import PersonalInformation from './PersonalInformation';
import RecruitmentInformation from './RecruitmentInformation';
import WorkingProcess from './WorkingProcess';

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

const FormApplyJob = ({ dataCreateJob }: { dataCreateJob: any }) => {
  const {
    formState: { errors },
    control,
  } = useForm<any>({});

  return (
    <div className='flex flex-col gap-6 mt-[-40px]'>
      <div className='flex justify-between items-center gap-3 px-3'>
        <div className='flex flex-col gap-3'>
          <Text type='font-20-700'>{`Hồ sơ ứng tuyển cho vị trí: ${dataCreateJob.job}`}</Text>
          <CustomSelect
            className='max-w-[250px]'
            radius='md'
            size='lg'
            label='Địa điểm làm việc'
            placeholder='Chọn địa điểm nộp đơn'
            options={DATA_ADDRESS}
          />
        </div>

        <div className='flex gap-2 items-center'>
          <Button radius='full' size='lg' className='w-full'>
            <Text className='text-black' type='font-14-600'>
              Hủy
            </Text>
          </Button>
          <Button type='submit' radius='full' size='lg' className='bg-primary w-full min-w-[130px]'>
            <Text className='text-white' type='font-14-600'>
              Hoàn thành
            </Text>
          </Button>
        </div>
      </div>
      <PersonalInformation errors={errors} control={control} />
      <LearningProcess />
      <WorkingProcess />

      <JobApplication errors={errors} control={control} />
      <ConcernWork errors={errors} control={control} />
      <RecruitmentInformation />
    </div>
  );
};
export default FormApplyJob;
