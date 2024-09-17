import { Checkbox } from '@nextui-org/react';

import AccordionCustom from '@components/UI/AccordionCustom';
import CustomSelect from '@components/UI/CustomSelect';
import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';

const JobApplication = ({ errors, control }: any) => {
  return (
    <AccordionCustom
      title={<Text type='font-16-700'>Công việc ứng tuyển, kinh nghiệm làm việc</Text>}
    >
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
            label='Thời gian làm việc'
            formApply
            size='lg'
            placeholder='Thời gian làm việc'
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
            label='Kinh nghiệm làm việc toàn thời gian'
            formApply
            size='lg'
            placeholder='Kinh nghiệm làm việc toàn thời gian'
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
            label='Ngày có thể bắt đầu làm việc nếu trúng tuyển '
            formApply
            size='lg'
            placeholder='Ngày có thể bắt đầu làm việc nếu trúng tuyển '
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
        <div className='grid grid-cols-6 gap-8 items-center'>
          <div className='col-span-2'>
            <Text type='font-14-600'>Kinh nghiệm làm việc theo ca xoay</Text>
          </div>
          <div className='col-span-4'>
            <Checkbox radius='md' defaultSelected />
          </div>
        </div>
        <div className='grid grid-cols-6 gap-8 items-center'>
          <div className='col-span-2'>
            <Text type='font-14-600'>Kinh nghiệm bán lẻ</Text>
          </div>
          <div className='col-span-4'>
            <Checkbox radius='md' defaultSelected />
          </div>
        </div>
        <div className='grid grid-cols-6 gap-8 items-center'>
          <div className='col-span-2'>
            <Text type='font-14-600'>Kinh nghiệm làm việc đứng & đi lại nhiều</Text>
          </div>
          <div className='col-span-4'>
            <Checkbox radius='md' defaultSelected />
          </div>
        </div>
        <div className='grid grid-cols-6 gap-8 items-center'>
          <div className='col-span-2'>
            <Text type='font-14-600'>
              Có thể làm ca sớm (bắt đầu lúc 5h) hoặc làm ca tối (kết thúc lúc 23h)
            </Text>
          </div>
          <div className='col-span-4'>
            <Checkbox radius='md' defaultSelected />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <InputText
            required
            name='address'
            radius='md'
            errors={errors}
            label='Kỹ năng (có chứng chỉ) (nếu có)'
            control={control}
            placeholder='Kỹ năng'
            size='lg'
          />
          <CustomSelect
            className='w-full'
            radius='md'
            label='Ngoại ngữ (nếu có)'
            formApply
            size='lg'
            placeholder='Chọn ngoại ngữ'
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
            label='Khả năng (nếu có)'
            control={control}
            placeholder='Khả năng'
            size='lg'
          />
        </div>
      </div>
    </AccordionCustom>
  );
};
export default JobApplication;
