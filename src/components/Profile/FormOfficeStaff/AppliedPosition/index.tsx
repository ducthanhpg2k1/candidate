import AccordionCustom from '@components/UI/AccordionCustom';
import CustomSelect from '@components/UI/CustomSelect';
import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';

const AppliedPosition = ({ errors, control }: any) => {
  return (
    <AccordionCustom title={<Text type='font-16-700'>Applied position</Text>}>
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <CustomSelect
            className='w-full'
            radius='md'
            label='Position 1'
            formApply
            size='lg'
            placeholder='Position 1'
            options={[
              {
                value: 1,
                label: 'Điểm điểm 1',
              },
              {
                value: 2,
                label: 'Địa điểm 2',
              },
              {
                value: 3,
                label: 'Địa điểm 3',
              },
            ]}
          />
          <InputText
            required
            name='email'
            radius='md'
            errors={errors}
            label='Expected Salary (Gross)- VND'
            control={control}
            placeholder='Expected Salary (Gross)'
            size='lg'
          />

          <InputText
            required
            name='email'
            radius='md'
            errors={errors}
            label='Termination Notice for the present job (days)'
            control={control}
            placeholder='Quantity of days'
            size='lg'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <CustomSelect
            className='w-full'
            radius='md'
            label='Position 2'
            formApply
            size='lg'
            placeholder='Position 2'
            options={[
              {
                value: 1,
                label: 'Điểm điểm 1',
              },
              {
                value: 2,
                label: 'Địa điểm 2',
              },
              {
                value: 3,
                label: 'Địa điểm 3',
              },
            ]}
          />
          <InputText
            required
            name='email'
            radius='md'
            errors={errors}
            label='Expected Salary (Gross)- VND'
            control={control}
            placeholder='Expected Salary (Gross)'
            size='lg'
          />

          <InputText
            required
            name='email'
            radius='md'
            errors={errors}
            label='Termination Notice for the present job (days)'
            control={control}
            placeholder='Quantity of days'
            size='lg'
          />
        </div>
      </div>
    </AccordionCustom>
  );
};
export default AppliedPosition;
