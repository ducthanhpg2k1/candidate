/* eslint-disable no-empty-pattern */
import { forwardRef, useImperativeHandle, useState } from 'react';

import { Button, ModalBody } from '@nextui-org/react';
import { X } from '@phosphor-icons/react';

import StepCustom from '@components/UI/StepCustom';
import Text from '@components/UI/Text';
import { STATUS_APPLIED } from '@utils/common';

import CustomModal from '../../UI/CustomModal';

interface IModalViewProcessStatus {}

const DATA_STEPS = [
  {
    value: STATUS_APPLIED.APPLY,
    label: 'Ứng tuyển',
  },
  {
    value: STATUS_APPLIED.INTERVIEW,
    label: 'Phỏng vấn',
  },
  {
    value: STATUS_APPLIED.RESULT,
    label: 'Kết quả',
  },
];

const ModalViewProcessStatus = (props: IModalViewProcessStatus, ref?: any) => {
  const {} = props;
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<STATUS_APPLIED>(STATUS_APPLIED.APPLY);

  useImperativeHandle(ref, () => {
    return {
      onOpen: (status: STATUS_APPLIED) => {
        setVisible(true);
        setActiveStep(status);
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
        <ModalBody className='p-4 flex flex-col gap-[28px]'>
          <div className='flex justify-between items-center'>
            <Text type='font-20-700'>Trạng thái ứng tuyển </Text>
            <Button onClick={onVisible} isIconOnly radius='full' size='md' variant='light'>
              <X size={20} weight='light' />
            </Button>
          </div>
          <StepCustom step={activeStep} steps={DATA_STEPS} />
          <div className='flex items-center gap-4 mt-4'>
            <Button onClick={onVisible} className='w-full bg-primary' radius='sm' size='lg'>
              <Text type='font-14-600' className='text-white'>
                Đóng
              </Text>
            </Button>
          </div>
        </ModalBody>
      </>
    </CustomModal>
  );
};
export default forwardRef(ModalViewProcessStatus);
