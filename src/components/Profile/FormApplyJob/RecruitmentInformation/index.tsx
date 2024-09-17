import AccordionCustom from '@components/UI/AccordionCustom';
import CustomSelect from '@components/UI/CustomSelect';
import Text from '@components/UI/Text';

const RecruitmentInformation = () => {
  return (
    <AccordionCustom title={<Text type='font-16-700'>Tôi biết thông tin tuyển dụng qua</Text>}>
      <div className='px-3 pb-4 flex flex-col gap-4'>
        <div className='grid grid-cols-2'>
          <CustomSelect
            className='w-full'
            radius='md'
            label='Thông tin từ trường'
            formApply
            size='lg'
            selectionMode='multiple'
            placeholder='Chọn nguồn thông tin từ trường'
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
        <div className='grid grid-cols-2'>
          <CustomSelect
            className='w-full'
            radius='md'
            selectionMode='multiple'
            label='Trang web tìm việc'
            formApply
            size='lg'
            placeholder='Chọn nguồn từ trang web tìm việc'
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
        <div className='grid grid-cols-2'>
          <CustomSelect
            className='w-full'
            radius='md'
            label='Nguồn khác'
            selectionMode='multiple'
            formApply
            size='lg'
            placeholder='Chọn nguồn khác'
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
export default RecruitmentInformation;
