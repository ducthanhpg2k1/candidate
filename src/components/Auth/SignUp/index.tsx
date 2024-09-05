import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@nextui-org/react';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';
import { ROUTE_PATH } from '@utils/common';

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Số điện thoại không được để trống'),
  phone: Yup.string().required('Số điện thoại không được để trống'),
  password: Yup.string()
    .required('Mật khẩu không được để trống')
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    .matches(/[A-Z]/, 'Mật khẩu phải chứa ít nhất một chữ cái viết hoa')
    .matches(/[!"#$%&()*,.:<>?@^{|}]/, 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt'),
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState<boolean>(false);

  // const { runAsync, loading } = useRequest(serviceLogin, { manual: true });
  const router = useRouter();
  const {
    formState: { errors },
    control,
  } = useForm<any>({
    resolver: yupResolver(SignUpSchema),
  });

  // const onSubmit = async (values: { email: string; password: string }) => {
  //   console.log(values, 'values');

  //   // try {
  //   //   const response = await runAsync(values);
  //   //   if (response?.data?.access_token) {
  //   //     setAccessToken(response.data.access_token);
  //   //     ToastCustom.success("Login successfully");
  //   //     router.push(ROUTE_PATH.DASHBOARD);
  //   //   }
  //   // } catch (error: any) {
  //   //   ToastCustom.error(error?.response?.data?.code?.message ?? error?.response?.data?.message);
  //   // }
  // };
  // const handleCaptcha = (value: any) => {
  //   console.log('Captcha value:', value);
  // };

  return (
    <form>
      <div className='flex flex-col gap-10'>
        <Text className='text-black text-[32px] font-bold'>Đăng kí</Text>

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
            name='name'
            errors={errors}
            label='Họ và tên'
            control={control}
            placeholder='Họ và tên'
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
          <InputText
            required
            name='confirm_password'
            label='Nhập lại mật khẩu'
            errors={errors}
            control={control}
            placeholder='Nhập lại Mật khẩu'
            size='lg'
            endContent={
              <button
                className='focus:outline-none'
                type='button'
                onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
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
          <ReCAPTCHA className='w-full' sitekey='YOUR_SITE_KEY' />
        </div>
        <div className='flex flex-col gap-3 mt-2'>
          <Button type='submit' radius='full' className='bg-primary px-4 py-3 min-h-12'>
            <Text className='text-white' type='font-16-700'>
              Đăng ký
            </Text>
          </Button>
          <div className='flex items-center gap-2 justify-center'>
            <Text type='font-14-400' className='text-black'>
              Bạn đã có tài khoản?
            </Text>
            <Text
              onClick={() => router.push(ROUTE_PATH.SIGN_IN)}
              type='font-14-600'
              className='text-primary hover:underline cursor-pointer'
            >
              Đăng nhập
            </Text>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SignUp;
