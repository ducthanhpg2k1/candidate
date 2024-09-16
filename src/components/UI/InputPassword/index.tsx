/* eslint-disable indent */
import React, { ReactNode, useState } from 'react';

import { Input } from '@nextui-org/react';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import clsx from 'clsx';
import { Control, useController } from 'react-hook-form';

import Text from '../Text';

interface IInputPassword {
  startContent?: ReactNode;
  endContent?: ReactNode;
  label?: string | ReactNode;
  placeholder?: string;
  control: Control;
  name: string;
  className?: string;
  required?: boolean;
  errors?: any;
  readOnly?: boolean;
  defaultValue?: any;
  isDisabled?: boolean;
  type?: any;
  size?: any;
}
const InputPassword = (props: IInputPassword) => {
  const {
    startContent,
    label,
    errors,
    placeholder,
    className = '',
    control,
    readOnly,
    isDisabled,
    required,
    defaultValue,
    name,
    ...rest
  } = props;
  const { field } = useController({
    name,
    control,
    rules: { required },
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className='flex flex-col gap-1'>
      <Input
        startContent={startContent}
        name={field?.name}
        variant='bordered'
        onBlur={field.onBlur}
        autoComplete='off'
        isDisabled={isDisabled}
        value={field?.value}
        readOnly={readOnly}
        defaultValue={defaultValue}
        onChange={field?.onChange}
        endContent={
          <button
            className='focus:outline-none'
            type='button'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye size={20} color='black' /> : <EyeSlash size={20} color='black' />}
          </button>
        }
        type={showPassword ? 'text' : 'password'}
        radius='full'
        className={clsx('rounded-full', {
          [className]: !!className,
        })}
        label={
          <>
            <Text
              type='font-14-600'
              className={clsx('text-black', {
                none: !label,
              })}
            >
              {label}
            </Text>
          </>
        }
        classNames={{
          inputWrapper: errors?.[name]?.message
            ? ['px-5 border-1 border-solid !border-red-500']
            : [
                'px-5 border-1 border-solid !border-disable-01 data-[hover=true]:!border-primary group-data-[focus=true]:!border-primary',
              ],
        }}
        placeholder={placeholder}
        labelPlacement='outside'
        {...rest}
      />
      {errors?.[name]?.message && required && (
        <Text type='font-12-400' className='text-red-500'>
          {errors?.[name]?.message}
        </Text>
      )}
    </div>
  );
};
export default InputPassword;
