import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

import SelectSearch from '@components/UI/SelectSearch';
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

const FormApplyJob = ({
  dataCreateJob,
  handleCancelSubmitForm,
}: {
  dataCreateJob: any;
  handleCancelSubmitForm: VoidFunction;
}) => {
  const {
    formState: { errors },
    control,
  } = useForm<any>({});

  return (
    <div className='flex flex-col gap-6 mt-[-40px]'>
      <div className='flex flex-col gap-6 px-3'>
        <Text
          type='font-20-700'
          className='text-primary'
        >{`Hồ sơ ứng tuyển cho vị trí: ${dataCreateJob.job}`}</Text>
        <div className='flex justify-between items-center gap-3 px-3'>
          <div className='border-1 hover:border-primary w-max rounded-2xl  border-gray-100 border-solid pl-4 pr-2 py-1 flex gap-3 justify-center items-center'>
            <Text type='font-15-700' className='font-nunito-sans !font-black'>
              Địa điểm làm việc:
            </Text>
            <SelectSearch
              colorSelectorIcon='text-black'
              className='min-w-[200px] w-max'
              placeholder='Tất cả vị trí công việc'
              options={DATA_ADDRESS}
            />
          </div>
          <div className='flex gap-3 items-center'>
            <Button onClick={handleCancelSubmitForm} radius='full' size='lg' className='w-full'>
              <Text className='text-black' type='font-14-600'>
                Hủy
              </Text>
            </Button>
            <Button type='submit' radius='full' size='lg' className='bg-primary w-full'>
              <Text className='text-white' type='font-14-600'>
                Hoàn thành
              </Text>
            </Button>
          </div>
        </div>
      </div>
      <PersonalInformation errors={errors} control={control} />
      <LearningProcess />
      <WorkingProcess />

      <JobApplication errors={errors} control={control} />
      <ConcernWork errors={errors} control={control} />
      <RecruitmentInformation />
      <div className='flex items-end justify-end px-3'>
        <Button type='submit' radius='full' size='lg' className='bg-primary'>
          <Text className='text-white' type='font-14-600'>
            Hoàn thành
          </Text>
        </Button>
      </div>
    </div>
  );
};
export default FormApplyJob;
