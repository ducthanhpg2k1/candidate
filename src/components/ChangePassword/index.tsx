/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable multiline-ternary */
import { useState } from 'react';

import { Button } from '@nextui-org/react';
import { ArrowLeft, Eye, EyeSlash } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';

const ChangePassword = () => {
  const { control, handleSubmit } = useForm<any>({});
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);

  const onSubmit = (values: any) => {
    // eslint-disable-next-line no-console
    console.log(values, 'values');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='w-6/12 flex flex-col gap-6 mx-auto'>
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
            <InputText
              name='previous_Password'
              label='Mật khẩu cũ'
              control={control}
              placeholder='Nhập Mật khẩu cũ'
              size='lg'
              endContent={
                <button
                  className='focus:outline-none'
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye size={20} color='black' />
                  ) : (
                    <EyeSlash size={20} color='black' />
                  )}
                </button>
              }
              type={showPassword ? 'text' : 'password'}
            />
            <InputText
              name='new_password'
              label='Mật khẩu mới'
              control={control}
              placeholder='Nhập Mật khẩu mới'
              size='lg'
              endContent={
                <button
                  className='focus:outline-none'
                  type='button'
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <Eye size={20} color='black' />
                  ) : (
                    <EyeSlash size={20} color='black' />
                  )}
                </button>
              }
              type={showNewPassword ? 'text' : 'password'}
            />
            <InputText
              name='confirm_password'
              label='Nhập lại mật khẩu mới'
              control={control}
              endContent={
                <button
                  className='focus:outline-none'
                  type='button'
                  onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                >
                  {showPasswordConfirm ? (
                    <Eye size={20} color='black' />
                  ) : (
                    <EyeSlash size={20} color='black' />
                  )}
                </button>
              }
              type={showPasswordConfirm ? 'text' : 'password'}
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
