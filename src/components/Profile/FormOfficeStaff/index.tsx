import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

import CustomSelect from '@components/UI/CustomSelect';
import Text from '@components/UI/Text';

import AppliedPosition from './AppliedPosition';
import CharacterReferees from './CharacterReferees';
import EducationDetails from './EducationDetails';
import EmploymentHistory from './EmploymentHistory';
import FamilyRelativesCompany from './FamilyRelativesCompany';
import ImportantFactorsAffecting from './ImportantFactorsAffecting';
import LanguageProficiency from './LanguageProficiency';
import OtherInformation from './OtherInformation';
import ParticularsImmediateFamily from './ParticularsImmediateFamily';
import PersonalParticulars from './PersonalParticulars';
import RecruitmentSource from './RecruitmentSource';
import { DATA_ADDRESS } from '../FormApplyJob';

const FormOfficeStaff = ({ handleCancelSubmitForm }: { handleCancelSubmitForm: VoidFunction }) => {
  const {
    formState: { errors },
    control,
  } = useForm<any>({});
  return (
    <div className='flex flex-col gap-6 mt-[-40px]'>
      <div className='flex justify-between items-center gap-3 px-3'>
        <div className='flex flex-col gap-3'>
          <Text type='font-20-700'>{'Application form for: Back office'}</Text>
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
          <Button onClick={handleCancelSubmitForm} radius='full' size='lg' className='w-full'>
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

      <OtherInformation />
      <ImportantFactorsAffecting />
      <RecruitmentSource errors={errors} control={control} />
    </div>
  );
};
export default FormOfficeStaff;
