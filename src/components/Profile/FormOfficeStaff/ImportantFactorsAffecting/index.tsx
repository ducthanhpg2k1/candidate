import AccordionCustom from '@components/UI/AccordionCustom';
import CustomSelect from '@components/UI/CustomSelect';
import Text from '@components/UI/Text';

const ImportantFactorsAffecting = () => {
  return (
    <AccordionCustom title={<Text type='font-16-700'>Important factors affecting your work</Text>}>
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <Text type='font-14-400' className='text-warning mb-2'>
          Please select 10 most important factors and rank them in order of preference from 1 to 10.
          (1 as most important and 10 as least important)
        </Text>
        <div className='grid grid-cols-4 gap-6'>
          <CustomSelect
            className='w-full'
            radius='md'
            label='Factor 1'
            formApply
            size='lg'
            placeholder='Factor 1 '
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
          <CustomSelect
            className='w-full'
            radius='md'
            label='Factor 2'
            formApply
            size='lg'
            placeholder='Factor 2'
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

          <CustomSelect
            className='w-full'
            radius='md'
            label='Factor 3'
            formApply
            size='lg'
            placeholder='Factor 3'
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
          <CustomSelect
            className='w-full'
            radius='md'
            label='Factor 4'
            formApply
            size='lg'
            placeholder='Factor 4'
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
        </div>
        <div className='grid grid-cols-4 gap-6'>
          <CustomSelect
            className='w-full'
            radius='md'
            label='Factor 5'
            formApply
            size='lg'
            placeholder='Factor 5 '
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
          <CustomSelect
            className='w-full'
            radius='md'
            label='Factor 6'
            formApply
            size='lg'
            placeholder='Factor 6'
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

          <CustomSelect
            className='w-full'
            radius='md'
            label='Factor 7'
            formApply
            size='lg'
            placeholder='Factor 7'
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
          <CustomSelect
            className='w-full'
            radius='md'
            label='Factor 8'
            formApply
            size='lg'
            placeholder='Factor 8'
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
        </div>
        <div className='grid grid-cols-4 gap-6'>
          <CustomSelect
            className='w-full'
            radius='md'
            label='Factor 9'
            formApply
            size='lg'
            placeholder='Factor 9 '
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
          <CustomSelect
            className='w-full'
            radius='md'
            label='Factor 10'
            formApply
            size='lg'
            placeholder='Factor 10'
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
        </div>
      </div>
    </AccordionCustom>
  );
};
export default ImportantFactorsAffecting;
