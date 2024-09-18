import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

import SelectSearch from '@components/UI/SelectSearch';
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
      <div className='flex flex-col gap-6 px-3'>
        <Text type='font-20-700' className='text-primary'>
          {'Application form for: Back office'}
        </Text>
        <div className='flex items-center justify-between'>
          <div className='border-1 hover:border-primary w-max rounded-2xl  border-gray-100 border-solid pl-4 pr-2 py-1 flex gap-3 justify-center items-center'>
            <Text type='font-15-700' className='font-nunito-sans !font-black'>
              Application submission location:
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
                Đóng
              </Text>
            </Button>
            <Button type='submit' radius='full' size='lg' className='bg-primary w-full'>
              <Text className='text-white' type='font-14-600'>
                Save
              </Text>
            </Button>
          </div>
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
      <div className='flex items-end justify-end px-3'>
        <Button type='submit' radius='full' size='lg' className='bg-primary'>
          <Text className='text-white' type='font-14-600'>
            Save
          </Text>
        </Button>
      </div>
    </div>
  );
};
export default FormOfficeStaff;
