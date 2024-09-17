import { Select, SelectItem } from '@nextui-org/react';

import Text from '../Text';

interface IOptions {
  label: string;
  value: string | number;
}
interface ICustomSelect {
  options: IOptions[];
  placeholder?: string;
  className?: string;
  selectionMode?: 'single' | 'multiple';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full' | undefined;
  size?: 'sm' | 'md' | 'lg' | undefined;
  label?: string;
  formApply?: boolean;
  multiple?: boolean;
  borderNone?: boolean;
}
const CustomSelect = (props: ICustomSelect) => {
  const {
    options,
    borderNone,
    label,
    size,
    placeholder,
    radius,
    formApply,
    selectionMode,
    multiple,
    className = '',
    ...rest
  } = props;

  return (
    <div className='flex flex-col gap-2'>
      {label && <Text type='font-14-600'>{label}</Text>}
      <Select
        classNames={{
          popoverContent: ['!text-black bg-none'],
          value: ['!text-black text-[14px] font-normal font-nunito-sans'],
          selectorIcon: borderNone ? ['!text-gray w-5 h-5'] : ['!text-black w-6 h-6'],
          trigger: formApply
            ? [
              '!bg-white p-4 font-nunito-sans  border-1 border-disable-01 data-[hover=true]:!border-primary',
            ]
            : (borderNone
              ? ['!bg-white p-4 font-nunito-sans  border-none shadow-none']
              : [
                '!bg-white p-4 font-nunito-sans  border-1 border-gray-100 data-[focus-visible=true]:!border-primary data-[hover=true]:!border-primary',
              ]),
        }}
        label={''}
        multiple={multiple}
        selectionMode={selectionMode}
        radius={radius}
        size={size}
        className={className}
        placeholder={placeholder}
        {...rest}
      >
        {options.map((item) => (
          <SelectItem key={item.value}>{item.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};
export default CustomSelect;
