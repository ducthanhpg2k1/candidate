import AccordionCustom from '@components/UI/AccordionCustom';
import Text from '@components/UI/Text';

import ResponsiveLearningProcessTable from '../EditTableLearningProcess';

const LearningProcess = () => {
  return (
    <AccordionCustom title={<Text type='font-16-700'>Quá trình học tập</Text>}>
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <ResponsiveLearningProcessTable />
      </div>
    </AccordionCustom>
  );
};
export default LearningProcess;
