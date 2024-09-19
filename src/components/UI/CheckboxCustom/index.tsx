import { ReactNode } from 'react';

import { Checkbox } from '@nextui-org/react';

interface CheckboxProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | undefined;
  radius?: 'sm' | 'md' | 'lg' | 'none' | 'full' | undefined;
}

const CheckboxCustom = (props: CheckboxProps) => {
  const { children, size, radius } = props;
  return (
    <Checkbox
      classNames={{
        wrapper:
          'before:border-[#868686] before:border-1 group-data-[hover=true]:before:border-primary  group-data-[hover=true]:before:bg-transparent group-data-[selected=true]:after:bg-primary',
      }}
      size={size}
      radius={radius}
    >
      {children}
    </Checkbox>
  );
};
export default CheckboxCustom;
