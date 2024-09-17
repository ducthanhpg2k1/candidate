import CustomSelect from '@components/UI/CustomSelect';
import Text from '@components/UI/Text';
import { DATA_ADDRESS } from '../FormApplyJob';
import { Button } from '@nextui-org/react';
import AppliedPosition from './AppliedPosition';
import { useForm } from 'react-hook-form';
import PersonalParticulars from './PersonalParticulars';
import OtherInformation from './OtherInformation';
import ImportantFactorsAffecting from './ImportantFactorsAffecting';
import RecruitmentSource from './RecruitmentSource';
import ParticularsImmediateFamily from './ParticularsImmediateFamily';
import EducationDetails from './EducationDetails';
import EmploymentHistory from './EmploymentHistory';
import CharacterReferees from './CharacterReferees';
import FamilyRelativesCompany from './FamilyRelativesCompany';
import LanguageProficiency from './LanguageProficiency';

const FormOfficeStaff = ({ dataCreateJob }: { dataCreateJob: any }) => {
  const {
    formState: { errors },
    control,
  } = useForm<any>({});
  return (
    <div className='flex flex-col gap-6 mt-[-40px]'>
      <div className='flex justify-between items-center gap-3 px-3'>
        <div className='flex flex-col gap-3'>
          <Text type='font-20-700'>{`Application form for: Back office`}</Text>
          <CustomSelect
            className='max-w-[250px]'
            radius='md'
            size='lg'
            label='Application submission location'
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
      <AppliedPosition errors={errors} control={control} />
      <PersonalParticulars errors={errors} control={control} />
      <ParticularsImmediateFamily />
      <EducationDetails />
      <EmploymentHistory />
      <CharacterReferees />
      <FamilyRelativesCompany />
      <LanguageProficiency />

      <OtherInformation errors={errors} control={control} />
      <ImportantFactorsAffecting errors={errors} control={control} />
      <RecruitmentSource errors={errors} control={control} />
    </div>
  );
};
export default FormOfficeStaff;
