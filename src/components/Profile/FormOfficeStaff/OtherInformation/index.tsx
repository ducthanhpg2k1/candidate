import AccordionCustom from '@components/UI/AccordionCustom';
import CustomSelect from '@components/UI/CustomSelect';
import Text from '@components/UI/Text';
import { Checkbox, Radio, RadioGroup } from '@nextui-org/react';
const dataMaritalStatus = [
  {
    label: 'No',
    value: 'No',
  },
  {
    label: 'Yes - Can be hidden',
    value: 'Yes - Can be hidden',
  },
  {
    label: 'Yes - Can not be hidden',
    value: 'Yes - Can not be hidden',
  },
];
const OtherInformation = ({ errors, control }: any) => {
  return (
    <AccordionCustom title={<Text type='font-16-700'>Personal particulars</Text>}>
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <CustomSelect
          className='w-full'
          radius='md'
          label='Present hobbies/ Interests/ Sports '
          formApply
          size='lg'
          placeholder='Present hobbies/ Interests/ Sports *'
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
        <div className='grid grid-cols-8'>
          <div className='col-span-4'>
            <CustomSelect
              className='w-full'
              radius='md'
              label='Status of working at AEON'
              formApply
              size='lg'
              placeholder='Status of working at AEON'
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

        <div className='grid grid-cols-8 gap-8 items-center'>
          <div className='col-span-4'>
            <Text type='font-14-600'>
              Have you ever been interviewed for a vacancy in our Company before?
            </Text>
          </div>
          <div className='col-span-3'>
            <Checkbox radius='sm' defaultSelected />
          </div>
        </div>
        <div className='grid grid-cols-8 gap-8 items-center'>
          <div className='col-span-4'>
            <Text type='font-14-600'>Have you ever been convicted for any crime?</Text>
          </div>
          <div className='col-span-3'>
            <Checkbox radius='sm' defaultSelected />
          </div>
        </div>
        <div className='grid grid-cols-8 gap-8 items-center'>
          <div className='col-span-4'>
            <Text type='font-14-600'>Medical record information</Text>
          </div>
          <div className='col-span-3'>
            <Checkbox radius='sm' defaultSelected />
          </div>
        </div>
        <div className='grid grid-cols-8 gap-8 items-center'>
          <div className='col-span-4'>
            <Text type='font-14-600'>Do you have any tatoos on your body ?</Text>
          </div>
          <div className='col-span-4'>
            <RadioGroup
              classNames={{
                wrapper: 'gap-14',
              }}
              orientation='horizontal'
              label=''
            >
              {dataMaritalStatus?.map((item) => {
                return (
                  <Radio key={item?.value} value={item?.value}>
                    {item?.label}
                  </Radio>
                );
              })}
            </RadioGroup>
          </div>
        </div>
      </div>
    </AccordionCustom>
  );
};
export default OtherInformation;
