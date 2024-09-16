import clsx from 'clsx';

import { STATUS_APPLIED } from '@utils/common';

import Text from '../Text';

const StatusApplied = ({ status, labelStatus }: { status: string; labelStatus: string }) => {
  return (
    <div
      className={clsx('rounded-lg max-w-[100px]  py-1 px-2 flex justify-center items-center', {
        'bg-[#F0FDF4] border-1 border-solid border-[#DCFCE7]': status === STATUS_APPLIED.RESULT,
        'bg-[#FEF9C3] border-1 border-solid border-[#FDE68A]': status === STATUS_APPLIED.INTERVIEW,
        'bg-[#EFF6FF] border-1 border-solid border-[#DBEAFE]': status === STATUS_APPLIED.APPLY,
      })}
    >
      <Text
        className={clsx({
          'text-[#15803D]': status === STATUS_APPLIED.RESULT,
          'text-[#B45309]': status === STATUS_APPLIED.INTERVIEW,
          'text-[#1D4ED8]': status === STATUS_APPLIED.APPLY,
        })}
        type='font-12-600'
      >
        {labelStatus}
      </Text>
    </div>
  );
};
export default StatusApplied;
