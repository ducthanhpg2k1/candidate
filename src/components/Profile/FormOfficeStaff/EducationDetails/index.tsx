import AccordionCustom from '@components/UI/AccordionCustom';
import Text from '@components/UI/Text';

import EditTableEducationDetails from '../EditTableEducationDetails';

const EducationDetails = () => {
  return (
    <AccordionCustom title={<Text type='font-16-700'>Education details</Text>}>
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <EditTableEducationDetails />
      </div>
    </AccordionCustom>
  );
};
export default EducationDetails;
