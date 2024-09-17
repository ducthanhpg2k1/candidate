import AccordionCustom from '@components/UI/AccordionCustom';
import CustomSelect from '@components/UI/CustomSelect';
import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';
import { Checkbox } from '@nextui-org/react';

const ConcernWork = ({ errors, control }: any) => {
  return (
    <AccordionCustom title={<Text type='font-16-700'>Mối quan tâm trong công việc</Text>}>
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <div className='grid grid-cols-3 gap-6'>
          <CustomSelect
            className='w-full'
            radius='md'
            label='Ưu tiên 1'
            formApply
            size='lg'
            placeholder='Ưu tiên 1'
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
            label='Ưu tiên 2'
            formApply
            size='lg'
            placeholder='Ưu tiên 2'
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
            label='Ưu tiên 3'
            formApply
            size='lg'
            placeholder='Ưu tiên 3'
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
        <div className='grid grid-cols-3 gap-6'>
          <CustomSelect
            className='w-full'
            radius='md'
            label='Ưu tiên 4'
            formApply
            size='lg'
            placeholder='Ưu tiên 4'
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
            label='Ưu tiên 5'
            formApply
            size='lg'
            placeholder='Ưu tiên 5'
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
            name='address'
            radius='md'
            errors={errors}
            label='Mức lương mong muốn tối thiểu (VND)'
            control={control}
            placeholder='Mức lương mong muốn tối thiểu (VND)'
            size='lg'
          />
        </div>
        <div className='grid grid-cols-6 gap-8 items-center'>
          <div className='col-span-2'>
            <Text type='font-14-600'>Từng ứng tuyển tại AEON</Text>
          </div>
          <div className='col-span-4'>
            <Checkbox radius='md' defaultSelected />
          </div>
        </div>
        <div className='grid grid-cols-8 gap-6 items-center '>
          <div className='col-span-4 gap-6'>
            <CustomSelect
              className='w-full'
              radius='md'
              label='Tình trạng làm việc tại AEON'
              formApply
              size='lg'
              placeholder='Tình trạng làm việc tại AEON'
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
        <div className='grid grid-cols-6 gap-8 items-center'>
          <div className='col-span-2'>
            <Text type='font-14-600'>Đang hưởng lương hưu?</Text>
          </div>
          <div className='col-span-4'>
            <Checkbox radius='md' defaultSelected />
          </div>
        </div>
      </div>
    </AccordionCustom>
  );
};
export default ConcernWork;
