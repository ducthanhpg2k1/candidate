import AccordionCustom from '@components/UI/AccordionCustom';
import Text from '@components/UI/Text';

import EditTableFamilyRelativesCompany from '../EditTableFamilyRelativesCompany';

const FamilyRelativesCompany = () => {
  return (
    <AccordionCustom
      title={<Text type='font-16-700'>Family/ Relatives employed by the Company</Text>}
    >
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <Text type='font-14-400' className='text-warning mb-2'>
          Please fulfill the below information if you have relatives who is employed by the Company
        </Text>
        <EditTableFamilyRelativesCompany />
      </div>
    </AccordionCustom>
  );
};
export default FamilyRelativesCompany;
