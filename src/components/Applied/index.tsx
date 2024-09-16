/* eslint-disable indent */
import { useRef } from 'react';

import { Button } from '@nextui-org/react';
import { ArrowLeft, Eye } from '@phosphor-icons/react';
import { useRouter } from 'next/router';

import SelectSearch from '@components/UI/SelectSearch';
import StatusApplied from '@components/UI/StatusApplied';
import TableCustom from '@components/UI/Table';
import Text from '@components/UI/Text';
import { STATUS_APPLIED } from '@utils/common';

import ModalViewProcessStatus from './ModalViewProcessStatus';
import NoDataTable from './NoDataTable';

const columns = [
  {
    key: 'status',
    label: 'Trạng thái ứng tuyển',
  },
  {
    key: 'position',
    label: 'Vị trí ứng tuyển',
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
    key: 'action',
    label: '',
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
  const refModalViewProcessStatus: any = useRef();

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
          <StatusApplied status={record?.status} labelStatus={renderTextStatus(record.status)} />
        );
      }
      case 'action': {
        return (
          <Button
            onClick={() => refModalViewProcessStatus.current?.onOpen(record?.status)}
            variant='light'
            size='md'
            isIconOnly
            className='rounded-full'
          >
            <Eye size={16} />
          </Button>
        );
      }
      default: {
        return cellValue;
      }
    }
  };

  return (
    <div className='flex flex-col gap-6 m-auto mt-[-40px]'>
      <div className='flex items-center justify-between'>
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
        <div className='border-1 rounded-2xl border-gray-100 border-solid pl-4 pr-2 py-1 flex gap-3 justify-center items-center'>
          <Text type='font-15-700'>Trạng thái:</Text>
          <SelectSearch
            colorSelectorIcon='text-black'
            className='min-w-[150px] w-max'
            placeholder='Mới nhất'
            options={[
              {
                value: 1,
                label: 'Ứng tuyển',
              },
              {
                value: 2,
                label: 'Phỏng vấn',
              },
              {
                value: 3,
                label: 'Kết quả',
              },
            ]}
          />
        </div>
      </div>

      <TableCustom
        emptyContent={<NoDataTable />}
        renderCell={renderCell}
        columns={columns}
        dataSource={dataTable}
      />
      <ModalViewProcessStatus ref={refModalViewProcessStatus} />
    </div>
  );
};
export default Applied;
