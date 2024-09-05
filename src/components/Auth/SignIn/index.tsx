import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@nextui-org/react';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import CheckboxCustom from '@components/UI/CheckboxCustom';
import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';
import { ROUTE_PATH } from '@utils/common';

const SignInSchema = Yup.object().shape({
  phone: Yup.string().required('Số điện thoại không được để trống'),
  password: Yup.string()
    .required('Mật khẩu không được để trống')
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    .matches(/[A-Z]/, 'Mật khẩu phải chứa ít nhất một chữ cái viết hoa')
    .matches(/[!"#$%&()*,.:<>?@^{|}]/, 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt'),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // const { setAccessToken } = useAccessToken();

  // const { runAsync, loading } = useRequest(serviceLogin, { manual: true });
  const router = useRouter();
  const {
    formState: { errors },
    control,
  } = useForm<any>({
    resolver: yupResolver(SignInSchema),
  });

  // const onSubmit = async (values: { email: string; password: string }) => {
  //   console.log(values, 'values');

  //   try {
  //     const response = await runAsync(values);
  //     if (response?.data?.access_token) {
  //       setAccessToken(response.data.access_token);
  //       ToastCustom.success("Login successfully");
  //       router.push(ROUTE_PATH.DASHBOARD);
  //     }
  //   } catch (error: any) {
  //     ToastCustom.error(error?.response?.data?.code?.message ?? error?.response?.data?.message);
  //   }
  // };
  return (
    <form>
      <div className='flex flex-col gap-10'>
        <Text className='text-black text-[32px] font-bold'>Đăng nhập</Text>

        <div className='flex flex-col gap-6'>
          <InputText
            required
            name='phone'
            errors={errors}
            label='Số điện thoại'
            control={control}
            placeholder='Số điện thoại'
            size='lg'
          />
          <InputText
            required
            name='password'
            label='Mật khẩu'
            errors={errors}
            control={control}
            placeholder='Mật khẩu'
            size='lg'
            endContent={
              <button
                className='focus:outline-none'
                type='button'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword
                  ? (
                    <Eye size={20} color='black' />
                  )
                  : (
                    <EyeSlash size={20} color='black' />
                  )}
              </button>
            }
            type={showPassword ? 'text' : 'password'}
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
          <Button type='submit' radius='full' className='bg-primary px-4 py-3 min-h-12'>
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
