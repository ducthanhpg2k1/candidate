import AccordionCustom from '@components/UI/AccordionCustom';
import Text from '@components/UI/Text';
import EditTableParticularsFamily from '../EditTableParticularsFamily';

const ParticularsImmediateFamily = () => {
  return (
    <AccordionCustom title={<Text type='font-16-700'>Particulars of immediate family</Text>}>
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <EditTableParticularsFamily />
      </div>
    </AccordionCustom>
  );
};
export default ParticularsImmediateFamily;
