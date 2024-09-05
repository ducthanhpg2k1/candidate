import { DataCity, DataHeadquarters, DataTime } from '@components/ListJob/FilterJob';
import CheckboxCustom from '@components/UI/CheckboxCustom';
import CustomSelect from '@components/UI/CustomSelect';
import Drawer from '@components/UI/Drawer';
import Text from '@components/UI/Text';
import { Button } from '@nextui-org/react';
import { X } from '@phosphor-icons/react/dist/ssr';

const DrawerFilter = ({
  onClose,
  isDrawerOpen,
}: {
  onClose: VoidFunction;
  isDrawerOpen: boolean;
}) => {
  return (
    <Drawer isOpen={isDrawerOpen} onClose={onClose}>
      <div className='flex flex-col h-full'>
        <div className='flex items-center p-4 justify-between border-b border-b-disable-01 border-solid'>
          <Text type='font-20-700' className='text-black'>
            Filter
          </Text>

          <X onClick={onClose} size={24} />
        </div>
        <div className='p-4 flex flex-col gap-6'>
          <div className='flex flex-col gap-5'>
            <Text type='font-14-700' className='text-black'>
              Tỉnh/Thành phố
            </Text>
            <div className='flex flex-col gap-4'>
              {DataCity?.map((item) => {
                return (
                  <div key={item?.value} className='flex justify-between items-center'>
                    <CheckboxCustom size='lg' radius='sm'>
                      <Text type='font-13-400' className='text-black'>
                        {item?.label}
                      </Text>
                    </CheckboxCustom>
                    <Text type='font-12-400' className='text-gray'>
                      {item?.total}
                    </Text>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <Text type='font-14-700' className='text-black'>
              Loại hình
            </Text>
            <div className='flex flex-col gap-4'>
              {DataTime?.map((item) => {
                return (
                  <div key={item?.value} className='flex justify-between items-center'>
                    <CheckboxCustom size='lg' radius='sm'>
                      <Text type='font-13-400' className='text-black'>
                        {item?.label}
                      </Text>
                    </CheckboxCustom>
                    <Text type='font-12-400' className='text-gray'>
                      {item?.total}
                    </Text>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='flex flex-col gap-5'>
            <Text type='font-14-700' className='text-black'>
              Trụ sở
            </Text>
            <div className='flex flex-col gap-4 '>
              {DataHeadquarters?.map((item) => {
                return (
                  <div key={item?.value} className='flex justify-between items-center gap-8'>
                    <CheckboxCustom size='lg' radius='sm'>
                      <Text type='font-13-400' className='text-black'>
                        {item?.label}
                      </Text>
                    </CheckboxCustom>
                    <Text type='font-12-400' className='text-gray'>
                      {item?.total}
                    </Text>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <Text type='font-14-700' className='text-black'>
              Bộ lọc
            </Text>
            <CustomSelect
              className='w-full'
              placeholder='Tất cả vị trí công việc'
              options={[
                {
                  value: 1,
                  label: 'Kinh doanh',
                },
                {
                  value: 2,
                  label: 'Sales',
                },
                {
                  value: 3,
                  label: 'Bán hàng',
                },
              ]}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <Text type='font-14-700' className='text-black'>
              Sắp xếp theo
            </Text>
            <CustomSelect
              className='w-full'
              placeholder='Mới nhất'
              options={[
                {
                  value: 1,
                  label: 'Mới nhất',
                },
                {
                  value: 2,
                  label: 'Cũ nhất',
                },
              ]}
            />
          </div>
        </div>
        <div className='flex flex-col gap-3 mt-8 px-4'>
          <Button onClick={onClose} radius='full' color='default' className='w-full h-[48px]'>
            <Text className='text-black font-nunito-sans' type='font-17-600'>
              Hủy bỏ
            </Text>
          </Button>
          <Button onClick={onClose} radius='full' className='w-full h-[48px] bg-primary'>
            <Text className='text-white font-nunito-sans' type='font-17-600'>
              Tìm kiếm
            </Text>
          </Button>
        </div>
      </div>
    </Drawer>
  );
};
export default DrawerFilter;
