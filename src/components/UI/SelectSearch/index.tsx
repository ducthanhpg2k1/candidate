import { Select, SelectItem } from '@nextui-org/react';

interface IOptions {
  label: string;
  value: string | number;
}
interface ISelectSearch {
  options: IOptions[];
  placeholder?: string;
  className?: string;
  selectionMode?: 'single' | 'multiple';
  colorSelectorIcon?: string;
}
const SelectSearch = (props: ISelectSearch) => {
  const {
    options,
    placeholder,
    selectionMode,
    colorSelectorIcon = 'text-primary',
    className = '',
    ...rest
  } = props;

  return (
    <Select
      classNames={{
        popoverContent: ['!text-black bg-none'],
        value: ['!text-black text-[15px] font-normal '],
        selectorIcon: [colorSelectorIcon, 'w-6 h-6'],
        trigger: ['!bg-white !py-0 !px-0 shadow-none '],
      }}
      radius='lg'
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
export default SelectSearch;
