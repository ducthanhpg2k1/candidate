import { ReactNode } from 'react';

import { Modal, ModalContent } from '@nextui-org/react';
import clsx from 'clsx';

interface ICustomModlaProps {
  isOpen: boolean;
  onClose: VoidFunction;
  children: ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full';
  placementMoblie?: 'bottom' | 'center';
}

const CustomModal = (props: ICustomModlaProps) => {
  const { isOpen, onClose, size, children, placementMoblie, className = '', ...rest } = props;
  return (
    <Modal
      hideCloseButton={true}
      isOpen={isOpen}
      size={size}
      className={clsx({
        [className]: !!className,
      })}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: 'easeOut',
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: 'easeIn',
            },
          },
        },
      }}
      classNames={{
        base: [
          placementMoblie === 'bottom' ? 'mx-0 my-0  !rounded-b-none' : '!my-4 !mx-4 !rounded-2xl',
          'bg-white',
        ],
        backdrop: 'bg-[#00000033] backdrop-blur-[2px]',
      }}
      onClose={onClose}
      isDismissable={true}
      isKeyboardDismissDisabled={true}
      placement={placementMoblie === 'bottom' ? 'bottom' : 'center'}
      {...rest}
    >
      <ModalContent>{() => <>{children}</>}</ModalContent>
    </Modal>
  );
};
export default CustomModal;
