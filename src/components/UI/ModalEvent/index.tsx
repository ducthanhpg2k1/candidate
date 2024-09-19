/* eslint-disable no-empty-pattern */
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

import { Button, ModalBody } from '@nextui-org/react';
import { X } from '@phosphor-icons/react';
import confetti from 'canvas-confetti';
import Image from 'next/image';

import CustomModal from '../../UI/CustomModal';
import Text from '../Text';

interface IModalEvent {}

const ModalEvent = (props: IModalEvent, ref?: any) => {
  const {} = props;
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      onOpen: () => {
        setVisible(true);
      },
      onClose: () => setVisible(false),
    };
  });
  const onVisible = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.8 },
    });
  }, []);

  return (
    <>
      <CustomModal
        placementMoblie='center'
        placement='center'
        className='rounded-3xl'
        size='2xl'
        isOpen={visible}
        onClose={onVisible}
      >
        <>
          <ModalBody className='p-8 flex flex-col gap-6'>
            <div className='flex flex-col gap-3 items-center'>
              <Image
                src={'/static/images/banner-2.png'}
                width={500}
                height={207}
                alt=''
                className='w-full h-[207px] shadow-lg rounded-xl'
              />
              <Button
                className='min-w-[250px] mt-4 min-h-[50px] buttonEvent'
                radius='full'
                size='lg'
              >
                <Text type='font-20-700' className='text-white uppercase'>
                  Xem ngay
                </Text>
                <Image src={'/img-hand.gif'} width={32} height={32} alt='' className='w-8 h-8' />
              </Button>
              <Button
                onClick={onVisible}
                isIconOnly
                className='bg-disable-01 '
                radius='full'
                size='sm'
              >
                <X size={16} weight='light' />
              </Button>
            </div>
          </ModalBody>
        </>
      </CustomModal>
    </>
  );
};
export default forwardRef(ModalEvent);
