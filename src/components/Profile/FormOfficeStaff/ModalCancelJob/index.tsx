/* eslint-disable no-empty-pattern */
import { forwardRef, useImperativeHandle, useState } from 'react';

import { Button, ModalBody } from '@nextui-org/react';
import { X } from '@phosphor-icons/react';

import CustomModal from '@components/UI/CustomModal';
import Text from '@components/UI/Text';

interface IModalCancelJob {
  handleCancelJob: () => void;
}

const ModalCancelJob = (props: IModalCancelJob, ref?: any) => {
  const { handleCancelJob } = props;
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

  return (
    <CustomModal
      placementMoblie='center'
      className='rounded-3xl'
      size='lg'
      isOpen={visible}
      onClose={onVisible}
    >
      <>
        <ModalBody className='p-8 flex flex-col gap-[28px]'>
          <div className='flex justify-between items-center'>
            <Text type='font-20-700'>Hồ sơ chưa được nộp!</Text>
            <Button
              onClick={onVisible}
              isIconOnly
              className='bg-disable-01'
              radius='full'
              size='sm'
            >
              <X size={16} weight='light' />
            </Button>
          </div>
          <Text type='font-14-400'>Bạn có muốn trở về màn hình việc làm ?</Text>
          <div className='flex items-center gap-4'>
            <Button onClick={onVisible} className='w-full' color='default' radius='full' size='lg'>
              <Text type='font-14-600'>Trở lại</Text>
            </Button>
            <Button
              onClick={() => {
                handleCancelJob();
                onVisible();
              }}
              radius='full'
              size='lg'
              className='w-full bg-primary'
            >
              <Text type='font-14-600' className='text-white'>
                Đồng ý
              </Text>
            </Button>
          </div>
        </ModalBody>
      </>
    </CustomModal>
  );
};
export default forwardRef(ModalCancelJob);
