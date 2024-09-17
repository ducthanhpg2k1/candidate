import AccordionCustom from '@components/UI/AccordionCustom';
import Text from '@components/UI/Text';
import EditTableEmploymentHistory from '../EditTableEmploymentHistory';

const EmploymentHistory = () => {
  return (
    <AccordionCustom title={<Text type='font-16-700'>Employment history</Text>}>
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <EditTableEmploymentHistory />
      </div>
    </AccordionCustom>
  );
};
export default EmploymentHistory;
