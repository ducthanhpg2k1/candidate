import clsx from 'clsx';

import { STATUS_APPLIED } from '@utils/common';

import Text from '../Text';

interface ISteps {
  value: STATUS_APPLIED;
  label: string;
}

const StepCustom = ({ steps, step }: { steps: ISteps[]; step: string }) => {
  return (
    <ul className='relative flex flex-row'>
      {steps?.map((item, index) => {
        const currentIndex = steps.findIndex((item: any) => item.value === step);

        return (
          <li key={item?.value} className='shrink basis-0 flex-1 group'>
            <div className='min-w-6 min-h-6 w-full inline-flex items-center text-xs align-middle'>
              <div
                className={clsx(
                  'size-6 flex justify-center border-1 border-solid border-gray items-center shrink-0 rounded-full',
                  {
                    '!border-[#b31e8d]': index <= currentIndex,
                  },
                )}
              >
                <div
                  className={clsx('size-4 mb-[1px]  bg-primary rounded-full', {
                    '!bg-gray': currentIndex < index,
                  })}
                />
              </div>
              <div className='w-full h-px flex-1 bg-gray-200 group-last:hidden bg-gray-100'></div>
            </div>
            <div className='mt-2'>
              <Text
                type='font-12-600'
                className={clsx('text-black', {
                  '!text-primary': currentIndex >= index,
                })}
              >
                {item?.label}
              </Text>
            </div>
            {step === item?.value && (
              <div className='mt-2 rounded-lg py-1 px-2 flex w-max justify-center items-center bg-[#F0FDF4] border-1 border-solid border-[#DCFCE7]'>
                <Text type='font-12-600' className='text-[#15803D]'>
                  Đã hoàn thành
                </Text>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};
export default StepCustom;
