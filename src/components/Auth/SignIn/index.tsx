/* eslint-disable no-console */
/* eslint-disable multiline-ternary */

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import CheckboxCustom from '@components/UI/CheckboxCustom';
import InputPassword from '@components/UI/InputPassword';
import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';
import { ROUTE_PATH } from '@utils/common';

import { useLoginEmail } from './service';

const SignInSchema = Yup.object().shape({
  username: Yup.string().required('Số điện thoại không được để trống'),
  password: Yup.string()
    .required('Mật khẩu không được để trống')
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự'),
});

const SignIn = () => {
  // const { setAccessToken } = useAccessToken();

  // const { runAsync, loading } = useRequest(serviceLogin, { manual: true });
  const router = useRouter();
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<any>({
    resolver: yupResolver(SignInSchema),
  });

  const requestLogin = useLoginEmail({
    onSuccess: (res: any) => {
      console.log(res, 'res');
    },
    onError() {},
  });

  const onSubmit = (values: { username: number; password: string }) => {
    requestLogin?.run({
      username: values.username,
      password: values.password,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-10'>
        <Text className='text-black text-[32px] font-bold'>Đăng nhập</Text>

        <div className='flex flex-col gap-6'>
          <InputText
            required
            name='username'
            errors={errors}
            label='Số điện thoại'
            control={control}
            placeholder='Số điện thoại'
            size='lg'
          />
          <InputPassword
            name='password'
            label='Mật khẩu'
            control={control}
            errors={errors}
            size='lg'
            placeholder='Nhập mật khẩu'
          />

          <div className='flex justify-between items-center '>
            <CheckboxCustom radius='sm'>
              <Text className='text-black' type='font-14-400'>
                Ghi nhớ
              </Text>
            </CheckboxCustom>

            <Text
              onClick={() => router.push(ROUTE_PATH.FORGOT_PASSOWORD)}
              className='text-black hover:text-primary hover:underline cursor-pointer'
              type='font-14-400'
            >
              Quên mật khẩu?
            </Text>
          </div>
        </div>
        <div className='flex flex-col gap-3 mt-2'>
          <Button
            color='secondary'
            isLoading={requestLogin.loading}
            type='submit'
            radius='full'
            className='bg-primary px-4 py-3 min-h-12'
          >
            <Text className='text-white' type='font-16-700'>
              Đăng nhập
            </Text>
          </Button>
          <div className='flex items-center gap-2 justify-center'>
            <Text type='font-14-400' className='text-black'>
              Chưa có tài khoản?
            </Text>
            <Text
              onClick={() => router.push(ROUTE_PATH.SIGN_UP)}
              type='font-14-600'
              className='text-primary hover:underline cursor-pointer'
            >
              Đăng kí tài khoản mới
            </Text>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SignIn;
