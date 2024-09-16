import CustomSelect from '@components/UI/CustomSelect';
import Text from '@components/UI/Text';
import { DATA_ADDRESS } from '..';
import { Accordion, AccordionItem, Button, Checkbox, Radio, RadioGroup } from '@nextui-org/react';
import AccordionCustom from '@components/UI/AccordionCustom';
import InputText from '@components/UI/InputText';
import { useForm } from 'react-hook-form';
import DatePickerCustom from '@components/UI/DatePickerCustom';

const dataMaritalStatus = [
  {
    label: 'Độc thân',
    value: 'single',
  },
  {
    label: 'Độc thân',
    value: 'married',
  },
  {
    label: 'Độc thân',
    value: 'divorced',
  },
];
const DATA_YES_NO = [
  {
    label: 'Không',
    value: 'NO',
  },
  {
    label: 'Có',
    value: 'YES',
  },
];

const DATA_BODY_TATO = [
  {
    label: 'Không',
    value: 'NO',
  },
  {
    label: 'Có - Có thể che được',
    value: 'YES',
  },
  {
    label: 'Có - Không thể che được',
    value: 'YES_OR_NO',
  },
];

const FormApplyJob = ({ dataCreateJob }: { dataCreateJob: any }) => {
  const {
    formState: { errors },
    control,
  } = useForm<any>({});

  return (
    <div className='flex flex-col gap-6 mt-[-40px]'>
      <div className='flex justify-between items-center gap-3 px-3'>
        <div className='flex flex-col gap-3'>
          <Text type='font-20-700'>{`Hồ sơ ứng tuyển cho vị trí: ${dataCreateJob.job}`}</Text>
          <CustomSelect
            className='max-w-[250px]'
            radius='md'
            size='lg'
            label='Địa điểm làm việc'
            placeholder='Chọn địa điểm nộp đơn'
            options={DATA_ADDRESS}
          />
        </div>

        <div className='flex gap-2 items-center'>
          <Button radius='full' size='lg' className='w-full'>
            <Text className='text-black' type='font-14-600'>
              Hủy
            </Text>
          </Button>
          <Button type='submit' radius='full' size='lg' className='bg-primary w-full'>
            <Text className='text-white' type='font-14-600'>
              Xác nhận
            </Text>
          </Button>
        </div>
      </div>

      <AccordionCustom title={<Text type='font-16-700'>Thông tin cá nhân</Text>}>
        <div className='px-3 pb-4 flex flex-col gap-4'>
          <div className='grid grid-cols-10 gap-6'>
            <div className='col-span-4'>
              <InputText
                required
                name='name'
                radius='md'
                errors={errors}
                label='Họ và tên'
                control={control}
                placeholder='Nhập họ và tên'
                size='lg'
              />
            </div>
            <div className='col-span-3'>
              <DatePickerCustom
                label='Ngày sinh'
                className='w-full'
                radius='md'
                size='lg'
                name='start_date'
              />
            </div>
            <div className='col-span-2 flex flex-col gap-2'>
              <Text type='font-14-600'>Giới tính</Text>
              <RadioGroup
                className='mt-2'
                classNames={{
                  wrapper: 'gap-10',
                }}
                label=''
                orientation='horizontal'
              >
                <Radio value='male'>Nam</Radio>
                <Radio value='female'>Nữ</Radio>
              </RadioGroup>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-6'>
            <CustomSelect
              className='w-full'
              radius='md'
              label='Nguyên quán'
              formApply
              size='lg'
              placeholder='Tất cả địa điểm'
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
              label='Nơi sinh'
              formApply
              size='lg'
              placeholder='Tất cả địa điểm'
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
              name='phone'
              radius='md'
              isDisabled
              errors={errors}
              label='Số điện thoại'
              control={control}
              placeholder='Nhập số điện thoại'
              size='lg'
            />
            <InputText
              required
              name='email'
              radius='md'
              errors={errors}
              label='Email'
              control={control}
              placeholder='Nhập email'
              size='lg'
            />
          </div>
          <div className='grid grid-cols-4 gap-6'>
            <CustomSelect
              className='w-full'
              radius='md'
              label='Loại giấy tờ'
              formApply
              size='lg'
              placeholder='Tất cả địa điểm'
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
              name='cccd/cmnd'
              radius='md'
              errors={errors}
              label='Số CCCD/CMND'
              control={control}
              placeholder='Nhập email'
              size='lg'
            />
            <DatePickerCustom
              isDisabled
              label='Ngày cấp'
              className='w-full'
              radius='md'
              size='lg'
              name='start_date'
            />
            <CustomSelect
              className='w-full'
              radius='md'
              label='Nơi cấp'
              formApply
              size='lg'
              placeholder='Tất cả địa điểm'
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
          <div className='grid grid-cols-10 gap-8'>
            <div className='col-span-4'>
              <InputText
                required
                name='address'
                radius='md'
                errors={errors}
                label='Địa chỉ thường trú (Hộ khẩu) *'
                control={control}
                placeholder='Nhập địa chỉ thường trú (Hộ khẩu) *'
                size='lg'
              />
            </div>
            <div className='col-span-2'>
              <CustomSelect
                className='w-full'
                radius='md'
                label='Tỉnh / TP'
                formApply
                size='lg'
                placeholder='Tất cả địa điểm'
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

            <div className='col-span-2'>
              <CustomSelect
                className='w-full'
                radius='md'
                label='Quận / Huyện'
                formApply
                size='lg'
                placeholder='Tất cả địa điểm'
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

            <div className='col-span-2'>
              <CustomSelect
                className='w-full'
                radius='md'
                label='Phường / Xã'
                formApply
                size='lg'
                placeholder='Tất cả địa điểm'
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
          <div className='grid grid-cols-10 gap-8'>
            <div className='col-span-4'>
              <InputText
                required
                name='address'
                radius='md'
                errors={errors}
                label='Địa chỉ tạm trú (Nơi ở hiện tại)'
                control={control}
                placeholder='Nhập địa chỉ tạm trú (Nơi ở hiện tại)'
                size='lg'
              />
            </div>
            <div className='col-span-2'>
              <CustomSelect
                className='w-full'
                radius='md'
                label='Tỉnh / TP'
                formApply
                size='lg'
                placeholder='Tất cả địa điểm'
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

            <div className='col-span-2'>
              <CustomSelect
                className='w-full'
                radius='md'
                label='Quận / Huyện'
                formApply
                size='lg'
                placeholder='Tất cả địa điểm'
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

            <div className='col-span-2'>
              <CustomSelect
                className='w-full'
                radius='md'
                label='Phường / Xã'
                formApply
                size='lg'
                placeholder='Tất cả địa điểm'
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
            <div className='col-span-1'>
              <Text type='font-14-600'>Tình trạng hôn nhân</Text>
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
            <div className='col-span-1'>
              <Text type='font-14-600'>Đang có thai</Text>
            </div>
            <div className='col-span-4'>
              <RadioGroup label='' orientation='horizontal'>
                {DATA_YES_NO?.map((item) => {
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
            <div className='col-span-1'>
              <Text type='font-14-600'>Có con dưới 1 tuổi</Text>
            </div>
            <div className='col-span-4'>
              <RadioGroup label='' orientation='horizontal'>
                {DATA_YES_NO?.map((item) => {
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
            <div className='col-span-1'>
              <Text type='font-14-600'>Tiền án</Text>
            </div>
            <div className='col-span-4'>
              <Checkbox radius='md' defaultSelected />
            </div>
          </div>
          <div className='grid grid-cols-6 gap-8 items-center'>
            <div className='col-span-1'>
              <Text type='font-14-600'>Vấn đề sức khỏe</Text>
            </div>
            <div className='col-span-4'>
              <Checkbox radius='md' defaultSelected />
            </div>
          </div>
          <div className='grid grid-cols-6 gap-8 items-center'>
            <div className='col-span-1'>
              <Text type='font-14-600'>Hình xăm trên cơ thể</Text>
            </div>
            <div className='col-span-5'>
              <RadioGroup label='' orientation='horizontal'>
                {DATA_BODY_TATO?.map((item) => {
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
            <div className='col-span-1'>
              <Text type='font-14-600'>Người thân ở Aeon</Text>
            </div>
            <div className='col-span-4'>
              <Checkbox radius='md' defaultSelected />
            </div>
          </div>
          <div className='grid grid-cols-11 gap-6'>
            <div className='col-span-3'>
              <InputText
                required
                name='cccd/cmnd'
                radius='md'
                errors={errors}
                label='Họ và tên người liên hệ khẩn cấp '
                control={control}
                placeholder='Họ và tên'
                size='lg'
              />
            </div>
            <div className='col-span-2'>
              <CustomSelect
                className='w-full'
                radius='md'
                label='Quan hệ'
                formApply
                size='lg'
                placeholder='Quan hệ'
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
            <div className='col-span-2'>
              <InputText
                required
                name='cccd/cmnd'
                radius='md'
                errors={errors}
                label='Số điện thoại'
                control={control}
                placeholder='Số điện thoại'
                size='lg'
              />
            </div>
            <div className='col-span-4'>
              <InputText
                required
                name='cccd/cmnd'
                radius='md'
                errors={errors}
                label='Địa chỉ'
                control={control}
                placeholder='Địa chỉ'
                size='lg'
              />
            </div>
          </div>
        </div>
      </AccordionCustom>
    </div>
  );
};
export default FormApplyJob;
