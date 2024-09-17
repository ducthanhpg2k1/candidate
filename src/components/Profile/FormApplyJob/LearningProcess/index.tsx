import AccordionCustom from '@components/UI/AccordionCustom';
import Text from '@components/UI/Text';

import EditTable from '../EditTable';

const LearningProcess = () => {
  return (
    <AccordionCustom title={<Text type='font-16-700'>Quá trình học tập</Text>}>
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <EditTable />
      </div>
    </AccordionCustom>
  );
};
export default LearningProcess;
