import { ReactNode } from 'react';

import { Checkbox } from '@nextui-org/react';

interface CheckboxProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | undefined;
  radius?: 'sm' | 'md' | 'lg' | 'none' | 'full' | undefined;
  onChange?: any;
  value?: any;
}

const CheckboxCustom = (props: CheckboxProps) => {
  const { children, size, value, onChange, radius } = props;
  return (
    <Checkbox
      classNames={{
        wrapper:
          'before:border-[#868686] before:border-1 group-data-[hover=true]:before:border-primary  group-data-[hover=true]:before:bg-transparent group-data-[selected=true]:after:bg-primary',
      }}
      onChange={onChange}
      value={value}
      size={size}
      radius={radius}
    >
      {children}
    </Checkbox>
  );
};
export default CheckboxCustom;
