/* eslint-disable no-empty-pattern */
import { forwardRef, useImperativeHandle, useState } from 'react';

import { Button, ModalBody } from '@nextui-org/react';
import { X } from '@phosphor-icons/react';

import Text from '@components/UI/Text';
import CustomModal from '@components/UI/CustomModal';

interface IModalCancelJob {
  handleCancelJob: () => void;
}

const ModalCancelJob = (props: IModalCancelJob, ref?: any) => {
  const { handleCancelJob } = props;
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      onOpen: (id: string) => {
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
        <ModalBody className='p-4 flex flex-col gap-6'>
          <div className='flex justify-between items-center'>
            <Text type='font-20-700'>Hồ sơ chưa được nộp!</Text>
            <Button onClick={onVisible} isIconOnly radius='full' size='md' variant='light'>
              <X size={20} weight='light' />
            </Button>
          </div>
          <Text type='font-14-400'>Bạn có muốn trở về màn hình việc làm ?</Text>
          <div className='flex items-center gap-4 mt-4'>
            <Button onClick={onVisible} className='w-full' color='default' radius='sm' size='lg'>
              <Text type='font-14-600'>Trở lại</Text>
            </Button>
            <Button
              onClick={() => {
                handleCancelJob();
                onVisible();
              }}
              radius='sm'
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
