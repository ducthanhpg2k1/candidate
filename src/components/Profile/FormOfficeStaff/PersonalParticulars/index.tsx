import { Checkbox, Radio, RadioGroup } from '@nextui-org/react';

import AccordionCustom from '@components/UI/AccordionCustom';
import CustomSelect from '@components/UI/CustomSelect';
import DatePickerCustom from '@components/UI/DatePickerCustom';
import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';

const dataSex = [
  {
    value: 'MALE',
    label: 'Male',
  },
  {
    value: 'FEMALE',
    label: 'Female',
  },
];
const dataMaritalStatus = [
  {
    label: 'Single',
    value: 'single',
  },
  {
    label: 'Married',
    value: 'married',
  },
  {
    label: 'Divorced',
    value: 'divorced',
  },
];

const PersonalParticulars = ({ errors, control }: any) => {
  return (
    <AccordionCustom title={<Text type='font-16-700'>Personal particulars</Text>}>
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <div className='grid grid-cols-1 md:grid-cols-8 gap-6'>
          <div className='col-span-1'>
            <CustomSelect
              className='w-full'
              radius='md'
              label='Title '
              formApply
              size='lg'
              placeholder='Mr.'
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
          <div className='col-span-1 md:col-span-3'>
            <InputText
              required
              name='full_name'
              radius='md'
              errors={errors}
              label='Fullname'
              control={control}
              placeholder='Fullname'
              size='lg'
            />
          </div>
          <div className='col-span-1 md:col-span-2'>
            <DatePickerCustom
              label='Date of birth '
              className='w-full'
              radius='md'
              size='lg'
              name='start_date'
            />
          </div>
          <div className='col-span-1 md:col-span-2'>
            <div className='flex flex-col gap-2'>
              <Text type='font-14-600'>Gender</Text>
              <RadioGroup
                classNames={{
                  wrapper: 'gap-8 mt-2',
                }}
                orientation='horizontal'
                label=''
              >
                {dataSex?.map((item) => {
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
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          <CustomSelect
            className='w-full'
            radius='md'
            label='Religion '
            formApply
            size='lg'
            placeholder='Select religion'
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
            label='Place of birth '
            formApply
            size='lg'
            placeholder='Province/ city'
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
            isDisabled
            name='phone'
            radius='md'
            errors={errors}
            label='Phone number'
            control={control}
            placeholder='Phone number'
            size='lg'
          />
          <InputText
            required
            name='email'
            radius='md'
            errors={errors}
            label='Email'
            control={control}
            placeholder='Email'
            size='lg'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          <CustomSelect
            className='w-full'
            radius='md'
            label='Card Type '
            formApply
            size='lg'
            placeholder='Select card type '
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
            name='cccd'
            radius='md'
            errors={errors}
            label='ID No. (CCCD/ CMND)'
            control={control}
            placeholder='ID No. (CCCD/ CMND)'
            size='lg'
          />
          <InputText
            required
            isDisabled
            name='date_issue'
            radius='md'
            errors={errors}
            label='Date of issue'
            control={control}
            placeholder='DD/MM/YYYY'
            size='lg'
          />
          <CustomSelect
            className='w-full'
            radius='md'
            label='Place of issue'
            formApply
            size='lg'
            placeholder='Province/ city'
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
        <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
          <div className='col-span-1 md:col-span-6'>
            <InputText
              required
              name='permanent'
              radius='md'
              errors={errors}
              label='Permanent residence'
              control={control}
              placeholder='No and street name'
              size='lg'
            />
          </div>
          <div className='col-span-1 md:col-span-2'>
            <CustomSelect
              className='w-full'
              radius='md'
              label='Province/ city'
              formApply
              size='lg'
              placeholder='Province/ city'
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
          <div className='col-span-1 md:col-span-2'>
            <CustomSelect
              className='w-full'
              radius='md'
              label='District '
              formApply
              size='lg'
              placeholder='District '
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
          <div className='col-span-1 md:col-span-2'>
            <CustomSelect
              className='w-full'
              radius='md'
              label='Ward/ Commune'
              formApply
              size='lg'
              placeholder='Ward/ Commune'
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
        <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
          <div className='col-span-1 md:col-span-6'>
            <InputText
              required
              name='permanent'
              radius='md'
              errors={errors}
              label='Contact address'
              control={control}
              placeholder='No and street name'
              size='lg'
            />
          </div>
          <div className='col-span-1 md:col-span-2'>
            <CustomSelect
              className='w-full'
              radius='md'
              label='Province/ city'
              formApply
              size='lg'
              placeholder='Province/ city'
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
          <div className='col-span-1 md:col-span-2'>
            <CustomSelect
              className='w-full'
              radius='md'
              label='District '
              formApply
              size='lg'
              placeholder='District '
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
          <div className='col-span-1 md:col-span-2'>
            <CustomSelect
              className='w-full'
              radius='md'
              label='Ward/ Commune'
              formApply
              size='lg'
              placeholder='Ward/ Commune'
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
        <div className='grid grid-cols-1 md:grid-cols-8 gap-6'>
          <div className='col-span-1 md:col-span-2'>
            <InputText
              required
              name='height'
              radius='md'
              errors={errors}
              label='Height (cm)'
              control={control}
              placeholder='Height (cm)'
              size='lg'
            />
          </div>
          <div className='col-span-1 md:col-span-2'>
            <InputText
              required
              name='weight'
              radius='md'
              errors={errors}
              label='Weight (kg)'
              control={control}
              placeholder='Weight (kg)'
              size='lg'
            />
          </div>
        </div>
        <div className='flex flex-col gap-4 md:grid md:grid-cols-6 md:gap-8 md:items-center'>
          <div className='col-span-1'>
            <Text type='font-14-600'>Marital status</Text>
          </div>
          <div className='col-span-4'>
            <RadioGroup label='' orientation='horizontal'>
              {dataMaritalStatus?.map((item) => {
                return (
                  <Radio
                    classNames={{
                      label: 'w-[120px]',
                    }}
                    key={item?.value}
                    value={item?.value}
                  >
                    {item?.label}
                  </Radio>
                );
              })}
            </RadioGroup>
          </div>
        </div>
        <div className='grid grid-cols-6 gap-8 items-center'>
          <div className='col-span-4 md:col-span-1'>
            <Text type='font-14-600'>Be pregnant</Text>
          </div>
          <div className='col-span-2 md:col-span-4'>
            <Checkbox radius='sm' defaultSelected />
          </div>
        </div>
        <div className='grid grid-cols-6 gap-8 items-center'>
          <div className='col-span-4 md:col-span-1'>
            <Text type='font-14-600'>Children under 12 months</Text>
          </div>
          <div className='col-span-2 md:col-span-4'>
            <Checkbox radius='sm' defaultSelected />
          </div>
        </div>
        <div className='grid grid-cols-6 gap-8 items-center'>
          <div className='col-span-4 md:col-span-1'>
            <Text type='font-14-600'>Is foreigner?</Text>
          </div>
          <div className='col-span-2 md:col-span-4'>
            <Checkbox radius='sm' defaultSelected />
          </div>
        </div>
      </div>
    </AccordionCustom>
  );
};
export default PersonalParticulars;
