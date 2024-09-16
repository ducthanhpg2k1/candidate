/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable multiline-ternary */

import { Button } from '@nextui-org/react';
import { ArrowLeft } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import InputPassword from '@components/UI/InputPassword';
import Text from '@components/UI/Text';

const ChangePassword = () => {
  const { control, handleSubmit } = useForm<any>({});
  const router = useRouter();

  const onSubmit = (values: any) => {
    // eslint-disable-next-line no-console
    console.log(values, 'values');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='w-6/12 flex flex-col gap-6 mx-auto mt-[-40px]'>
        <div className='flex items-center gap-2'>
          <Button
            variant='light'
            size='md'
            isIconOnly
            onClick={() => router.back()}
            className='rounded-full'
          >
            <ArrowLeft size={20} />
          </Button>
          <Text type='font-20-700'>Đổi mật khẩu</Text>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='border-1 border-solid border-disable-01 rounded-lg flex flex-col gap-6 p-6'>
            <InputPassword
              name='previous_Password'
              label='Mật khẩu cũ'
              control={control}
              placeholder='Nhập Mật khẩu cũ'
              size='lg'
            />
            <InputPassword
              name='new_password'
              label='Mật khẩu mới'
              control={control}
              placeholder='Nhập Mật khẩu mới'
              size='lg'
            />
            <InputPassword
              name='confirm_password'
              label='Nhập lại mật khẩu mới'
              control={control}
              placeholder='Nhập lại mật khẩu mới'
              size='lg'
            />
            <Button type='submit' radius='md' size='lg' className='bg-black w-max'>
              <Text type='font-14-600' className='text-white'>
                Thay đổi mật khẩu
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ChangePassword;
