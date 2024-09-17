import AccordionCustom from '@components/UI/AccordionCustom';
import Text from '@components/UI/Text';

import EditTableWorkingProcess from '../EditTableWorkingProcess';

const WorkingProcess = () => {
  return (
    <AccordionCustom title={<Text type='font-16-700'>Quá trình làm việc</Text>}>
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <EditTableWorkingProcess />
      </div>
    </AccordionCustom>
  );
};
export default WorkingProcess;
