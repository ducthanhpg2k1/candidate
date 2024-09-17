import AccordionCustom from '@components/UI/AccordionCustom';
import Text from '@components/UI/Text';

import EditTableLanguageProficiency from '../EditTableLanguageProficiency';

const LanguageProficiency = () => {
  return (
    <AccordionCustom title={<Text type='font-16-700'>Language proficiency</Text>}>
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <EditTableLanguageProficiency />
      </div>
    </AccordionCustom>
  );
};
export default LanguageProficiency;
