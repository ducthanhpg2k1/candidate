/* eslint-disable indent */
import { Button } from '@nextui-org/react';
import { ArrowLeft } from '@phosphor-icons/react';
import { useRouter } from 'next/router';

import StatusApplied from '@components/UI/StatusApplied';
import TableCustom from '@components/UI/Table';
import Text from '@components/UI/Text';
import { STATUS_APPLIED } from '@utils/common';

import NoDataTable from './NoDataTable';

const columns = [
  {
    key: 'position',
    label: 'Vị trí ứng tuyển',
  },
  {
    key: 'company',
    label: 'Công ty',
  },
  {
    key: 'address',
    label: 'Địa chỉ',
  },
  {
    key: 'application_date',
    label: 'Ngày ứng tuyển',
  },

  {
    key: 'status',
    label: 'Trạng thái ứng tuyển',
  },
];
const dataTable = [
  {
    id: 1,
    position: 'Parttime staff | Thu ngân',
    company: 'Công ty TNHH Aeon Việt Name',
    address: 'Thanh Xuân - Hà Nội',
    application_date: '16/9/2024',
    status: STATUS_APPLIED.APPLY,
  },
  {
    id: 2,
    position: 'Parttime staff | Nhân viên văn phòng',
    company: 'Công ty TNHH Aeon Việt Name',
    address: 'Thanh Xuân - Hà Nội',
    application_date: '16/9/2024',
    status: STATUS_APPLIED.INTERVIEW,
  },
  {
    id: 3,
    position: 'Parttime staff | Sales',
    company: 'Công ty TNHH Aeon Việt Name',
    address: 'Thanh Xuân - Hà Nội',
    application_date: '16/9/2024',
    status: STATUS_APPLIED.RESULT,
  },
  {
    id: 4,
    position: 'Parttime staff | Sales',
    company: 'Công ty TNHH Aeon Việt Name',
    address: 'Thanh Xuân - Hà Nội',
    application_date: '16/9/2024',
    status: STATUS_APPLIED.APPLY,
  },
  {
    id: 5,
    position: 'Parttime staff | Sales',
    company: 'Công ty TNHH Aeon Việt Name',
    address: 'Thanh Xuân - Hà Nội',
    application_date: '16/9/2024',
    status: STATUS_APPLIED.RESULT,
  },
];

const renderTextStatus = (status: STATUS_APPLIED) => {
  let text = '';
  if (status === STATUS_APPLIED.APPLY) {
    text = 'Ứng tuyển';
  }
  if (status === STATUS_APPLIED.INTERVIEW) {
    text = 'Phỏng vấn';
  }
  if (status === STATUS_APPLIED.RESULT) {
    text = 'Kết quả';
  }
  return text;
};
const Applied = () => {
  const router = useRouter();
  const renderCell = (record: any, columnKey: any) => {
    const cellValue = record[columnKey];

    switch (columnKey) {
      case 'position': {
        return (
          <div className='w-[300px]'>
            <Text className='text-black' type='font-14-600'>
              {`${record?.position}` || '-'}
            </Text>
          </div>
        );
      }
      case 'company': {
        return (
          <div className='w-[200px]'>
            <Text type='font-14-400' className='w-max'>
              {record?.company || '-'}
            </Text>
          </div>
        );
      }

      case 'address': {
        return (
          <div className='w-[200px]'>
            <Text type='font-14-400'>{record?.address || '-'}</Text>
          </div>
        );
      }
      case 'application_date': {
        return <Text type='font-14-400'>{record?.application_date || '-'}</Text>;
      }
      case 'status': {
        return (
          <>
            <StatusApplied status={record?.status} labelStatus={renderTextStatus(record.status)} />
          </>
        );
      }

      default: {
        return cellValue;
      }
    }
  };

  return (
    <div className='flex flex-col gap-6 m-auto mt-[-40px]'>
      <div className='flex items-center gap-2'>
        <Button
          variant='light'
          size='md'
          isIconOnly
          onClick={() => router.back()}
          className='rounded-full'
        >
          <ArrowLeft size={20} />
        </Button>
        <Text type='font-20-700'>Công việc đã ứng tuyển</Text>
      </div>
      <TableCustom
        emptyContent={<NoDataTable />}
        renderCell={renderCell}
        columns={columns}
        dataSource={dataTable}
      />
    </div>
  );
};
export default Applied;
