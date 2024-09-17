import AccordionCustom from '@components/UI/AccordionCustom';
import Text from '@components/UI/Text';
import EditTableEmploymentHistory from '../EditTableEmploymentHistory';
import EditTableCharacterReferees from '../EditTableCharacterReferees';

const CharacterReferees = () => {
  return (
    <AccordionCustom title={<Text type='font-16-700'>Character referees</Text>}>
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <Text type='font-14-400' className='text-warning mb-2'>
          Remark: Names of relatives should not be given
        </Text>
        <EditTableCharacterReferees />
      </div>
    </AccordionCustom>
  );
};
export default CharacterReferees;
