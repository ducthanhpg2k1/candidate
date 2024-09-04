import { Select, SelectItem } from '@nextui-org/react';

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
}
const CustomSelect = (props: ICustomSelect) => {
  const {
    options,
    label,
    size,
    placeholder,
    selectionMode,
    radius,
    className = '',
    ...rest
  } = props;

  return (
    <Select
      classNames={{
        popoverContent: ['!text-black bg-none'],
        value: ['!text-black text-[14px] font-normal font-nunito-sans'],
        selectorIcon: ['!text-black'],
        trigger: ['!bg-white p-4 font-nunito-sans  border-1 border-gray-100'],
      }}
      label={label}
      // labelPlacement='inside'
      radius={radius}
      size={size}
      selectionMode={selectionMode}
      className={className}
      placeholder={placeholder}
      {...rest}
    >
      {options.map((item) => (
        <SelectItem key={item.value}>{item.label}</SelectItem>
      ))}
    </Select>
  );
};
export default CustomSelect;
