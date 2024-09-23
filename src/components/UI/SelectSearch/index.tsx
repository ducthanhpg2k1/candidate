import { Select, SelectItem } from '@nextui-org/react';

interface IOptions {
  label: string;
  value: string | number;
}
interface ISelectSearch {
  options: IOptions[];
  placeholder?: string;
  allJob?: boolean;
  className?: string;
  selectionMode?: 'single' | 'multiple';
  colorSelectorIcon?: string;
  onChange?: any;
}
const SelectSearch = (props: ISelectSearch) => {
  const {
    options,
    placeholder,
    allJob,
    selectionMode,
    colorSelectorIcon = 'text-primary',
    className = '',
    onChange,
    ...rest
  } = props;

  return (
    <Select
      classNames={{
        popoverContent: allJob ? ['!text-black bg-none w-[300px]'] : ['!text-black bg-none'],
        value: ['!text-black text-[15px] font-normal '],
        selectorIcon: [colorSelectorIcon, 'w-6 h-6'],
        trigger: ['!bg-white !py-0 !px-0 shadow-none '],
      }}
      radius='lg'
      onChange={onChange}
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
