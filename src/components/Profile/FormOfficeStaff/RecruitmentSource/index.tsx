import AccordionCustom from '@components/UI/AccordionCustom';
import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';

const RecruitmentSource = ({ errors, control }: any) => {
  return (
    <AccordionCustom title={<Text type='font-16-700'>Recruitment source</Text>}>
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <div className='grid grid-cols-2'>
          <InputText
            required
            name='height'
            radius='md'
            errors={errors}
            label='Information from school'
            control={control}
            placeholder='Select source from school'
            size='lg'
          />
        </div>
        <div className='grid grid-cols-2'>
          <InputText
            required
            name='height'
            radius='md'
            errors={errors}
            label='Information from job portal'
            control={control}
            placeholder='Select source from job portal'
            size='lg'
          />
        </div>
        <div className='grid grid-cols-2'>
          <InputText
            required
            name='height'
            radius='md'
            errors={errors}
            label='Other sources'
            control={control}
            placeholder='Select other sources'
            size='lg'
          />
        </div>
      </div>
    </AccordionCustom>
  );
};
export default RecruitmentSource;
