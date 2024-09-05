import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@nextui-org/react';
import { CaretLeft } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const ForgotSchema = Yup.object().shape({
  phone: Yup.string().required('Số điện thoại không được để trống'),
});

const ForgotPassword = () => {
  const router = useRouter();
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<any>({
    resolver: yupResolver(ForgotSchema),
  });

  const onSubmit = async (values: { email: string }) => {
    console.log(values, 'values');
    setIsSubmitSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center gap-2'>
          <Button
            variant='light'
            size='md'
            isIconOnly
            onClick={() => router.back()}
            className='rounded-full'
          >
            <CaretLeft size={20} />
          </Button>
          <Text type='font-16-700' className='text-black'>
            Quay lại đăng nhập
          </Text>
        </div>
        <div className='flex flex-col gap-3 mb-4'>
          <Text type='font-20-700' className='text-black'>
            Quên mật khẩu?
          </Text>
          <Text type='font-14-400' className='text-gray-100'>
            Nhập email của bạn và chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu
          </Text>
        </div>
        <InputText
          required
          name='phone'
          errors={errors}
          label='Số điện thoại'
          control={control}
          placeholder='Số điện thoại'
          size='lg'
        />
        <Button type='submit' radius='full' className='bg-primary px-4 py-3 min-h-12'>
          <Text className='text-white' type='font-14-600'>
            Yêu cầu đặt lại mật khẩu
          </Text>
        </Button>
      </div>
    </form>
  );
};
export default ForgotPassword;
