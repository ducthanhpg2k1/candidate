/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable multiline-ternary */
/* eslint-disable indent */
/* eslint-disable unicorn/no-nested-ternary */
import React, { ReactNode } from 'react';

import { Input } from '@nextui-org/react';
import clsx from 'clsx';
import { Control, useController } from 'react-hook-form';

import Text from './Text';

interface IInputText {
  startContent?: ReactNode;
  endContent?: ReactNode;
  label?: string | ReactNode;
  placeholder?: string;
  control?: Control | null;
  name: string;
  className?: string;
  required?: boolean;
  errors?: any;
  readOnly?: boolean;
  defaultValue?: any;
  isDisabled?: boolean;
  type?: any;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full' | undefined;
  size?: 'sm' | 'md' | 'lg' | undefined;
  onChange?: any;
  value?: any;
  onBlur?: any;
}
const InputText = (props: IInputText) => {
  const {
    startContent,
    endContent,
    label,
    errors,
    placeholder,
    type,
    radius = 'full',
    className = '',
    control,
    readOnly,
    isDisabled,
    required,
    defaultValue,
    onChange,
    onBlur,
    value,
    name,
    ...rest
  } = props;
  const { field } = control
    ? useController({
        name,
        control,
        rules: { required },
      })
    : { field: { value, onChange, name, onBlur } };

  return (
    <div className='flex flex-col gap-2'>
      {label && <Text type='font-14-600'>{label}</Text>}

      {control ? (
        <Input
          startContent={startContent}
          endContent={endContent}
          name={field?.name || name}
          variant='bordered'
          type={type}
          onBlur={field.onBlur || onBlur}
          autoComplete='off'
          isDisabled={isDisabled}
          value={field?.value || value}
          readOnly={readOnly}
          defaultValue={defaultValue}
          onChange={field?.onChange || onChange}
          radius={radius}
          className={clsx('rounded-full', {
            [className]: !!className,
          })}
          label={''}
          classNames={{
            inputWrapper: errors?.[name]?.message
              ? ['px-5 border-1 border-solid !border-red-500']
              : isDisabled
              ? [
                  'px-5 border-1 bg-[#82828240] border-solid !border-disable-01 data-[hover=true]:!border-primary group-data-[focus=true]:!border-primary',
                ]
              : [
                  'px-5 border-1 border-solid !border-disable-01 data-[hover=true]:!border-primary group-data-[focus=true]:!border-primary',
                ],
          }}
          placeholder={placeholder}
          labelPlacement='outside'
          {...rest}
        />
      ) : (
        <Input
          startContent={startContent}
          endContent={endContent}
          variant='bordered'
          type={type}
          autoComplete='off'
          isDisabled={isDisabled}
          value={value}
          readOnly={readOnly}
          defaultValue={defaultValue}
          onChange={onChange}
          radius={radius}
          className={clsx('rounded-full', {
            [className]: !!className,
          })}
          label={''}
          classNames={{
            inputWrapper: errors?.[name]?.message
              ? ['px-5 border-1 border-solid !border-red-500']
              : isDisabled
              ? [
                  'px-5 border-1 bg-[#82828240] border-solid !border-disable-01 data-[hover=true]:!border-primary group-data-[focus=true]:!border-primary',
                ]
              : [
                  'px-5 border-1 border-solid !border-disable-01 data-[hover=true]:!border-primary group-data-[focus=true]:!border-primary',
                ],
          }}
          placeholder={placeholder}
          labelPlacement='outside'
          {...rest}
        />
      )}

      {errors?.[name]?.message && required && (
        <Text type='font-12-400' className='text-red-500'>
          {errors?.[name]?.message}
        </Text>
      )}
    </div>
  );
};
export default InputText;
