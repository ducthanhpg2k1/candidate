/* eslint-disable unicorn/consistent-function-scoping */
import { ReactNode } from 'react';

import { DatePicker } from '@nextui-org/react';
import clsx from 'clsx';
import Text from '../Text';

interface IDatePicker {
  startContent?: ReactNode;
  name: string;
  size?: 'sm' | 'md' | 'lg' | undefined;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full' | undefined;
  className?: string;
  label?: string;
  isDisabled?: boolean;
}

const DatePickerCustom = (props: IDatePicker) => {
  const { radius, startContent, isDisabled, size, label, className = '', ...rest } = props;

  return (
    <div className='flex flex-col gap-2'>
      {label && <Text type='font-14-600'>{label}</Text>}

      <DatePicker
        startContent={startContent}
        size={size}
        radius={radius}
        color='secondary'
        isDisabled={isDisabled}
        variant='bordered'
        selectorIcon={<IconSelectorDate />}
        label={''}
        classNames={{
          calendar: ['! bg-white'],
        }}
        dateInputClassNames={{
          inputWrapper: isDisabled
            ? [
                'px-3 border-1  bg-[#82828240] border-solid !border-disable-01 transition-all data-[hover=true]:!border-disabled group-data-[focus=true]:!border-accent',
              ]
            : [
                'px-3 border-1 border-solid !border-disable-01 transition-all data-[hover=true]:!border-disabled group-data-[focus=true]:!border-accent',
              ],
        }}
        className={clsx({
          [className]: !!className,
        })}
        {...rest}
      />
    </div>
  );
};
export default DatePickerCustom;

const IconSelectorDate = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'>
      <path
        d='M8.66667 0C8.82996 2.15404e-05 8.98756 0.0599708 9.10958 0.168477C9.2316 0.276983 9.30956 0.426499 9.32867 0.588667L9.33333 0.666667V1.33333H10.6667C11.0031 1.33323 11.327 1.46027 11.5737 1.689C11.8204 1.91772 11.9714 2.23123 11.9967 2.56667L12 2.66667V10.6667C12.0001 11.0031 11.8731 11.327 11.6443 11.5737C11.4156 11.8204 11.1021 11.9714 10.7667 11.9967L10.6667 12H1.33333C0.996949 12.0001 0.672956 11.8731 0.426301 11.6443C0.179647 11.4156 0.0285623 11.1021 0.00333348 10.7667L6.68453e-08 10.6667V2.66667C-0.000106386 2.33028 0.126938 2.00629 0.355665 1.75963C0.584392 1.51298 0.897897 1.3619 1.23333 1.33667L1.33333 1.33333H2.66667V0.666667C2.66686 0.496747 2.73192 0.333312 2.84857 0.209754C2.96521 0.0861971 3.12464 0.0118433 3.29426 0.00188526C3.46389 -0.00807283 3.63092 0.0471164 3.76122 0.156177C3.89152 0.265237 3.97526 0.419936 3.99533 0.588667L4 0.666667V1.33333H8V0.666667C8 0.489856 8.07024 0.320286 8.19526 0.195262C8.32029 0.0702379 8.48986 0 8.66667 0ZM10.6667 6H1.33333V10.6667H10.6667V6ZM10.6667 2.66667H1.33333V4.66667H10.6667V2.66667Z'
        fill='#74787C'
      />
    </svg>
  );
};
