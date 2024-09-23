import React, { useState } from 'react';

import { Button } from '@nextui-org/react';
import { Plus, TrashSimple } from '@phosphor-icons/react';
import { isMobile } from 'react-device-detect';

import DatePickerCustom from '@components/UI/DatePickerCustom';
import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';

// Định nghĩa kiểu dữ liệu cho một hàng trong bảng
interface RowData {
  company: string;
  job_position: string;
  gross_salary: string;
  from_date: string;
  to_date: string;
  reason: string;
}

const EditTableEmploymentHistory: React.FC = () => {
  // Khởi tạo state cho dữ liệu bảng
  const [data, setData] = useState<RowData[]>([
    {
      company: '',
      job_position: '',
      gross_salary: '',
      to_date: '',
      from_date: '',
      reason: '',
    },
    {
      company: '',
      job_position: '',
      gross_salary: '',
      to_date: '',
      from_date: '',
      reason: '',
    },
  ]);

  // Xử lý khi người dùng nhập dữ liệu cho ô trong bảng
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof RowData,
  ) => {
    if (field === 'from_date' || field === 'to_date') {
      const updatedData: any = [...data];
      updatedData[index][field] = e;
      setData(updatedData);
    } else {
      const updatedData: any = [...data];
      updatedData[index][field] = e.target.value;
      setData(updatedData);
    }
  };

  // Thêm một hàng mới vào bảng
  const handleAddRow = () => {
    const newRow = {
      company: '',
      job_position: '',
      gross_salary: '',
      to_date: '',
      from_date: '',
      reason: '',
    };
    setData([...data, newRow]);
  };

  // Xóa một hàng khỏi bảng
  const handleDeleteRow = (index: number) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };
  const renderMobileView = () => (
    <div className='space-y-4'>
      {data.map((row, index) => (
        <div
          key={index}
          className='border border-solid border-disable-01 p-4 rounded-lg flex flex-col gap-4'
        >
          <div className='flex items-center justify-between'>
            <Text type='font-14-700' className='text-primary'>{`Company
            ${index + 1}`}</Text>
            <TrashSimple
              onClick={() => handleDeleteRow(index)}
              size={16}
              weight='fill'
              color='#b91c1c'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <InputText
              required
              name='company'
              radius='md'
              placeholder='Company'
              size='md'
              onChange={(e: any) => handleInputChange(e, index, 'company')}
            />
            <InputText
              required
              name='job_position'
              radius='md'
              placeholder='Job position'
              size='md'
              onChange={(e: any) => handleInputChange(e, index, 'job_position')}
            />
            <InputText
              required
              name='gross_salary'
              radius='md'
              placeholder='Gross salary'
              size='md'
              onChange={(e: any) => handleInputChange(e, index, 'gross_salary')}
            />
            <DatePickerCustom
              onChange={(e: any) => {
                handleInputChange(e, index, 'from_date');
              }}
              className='w-full'
              radius='md'
              size='lg'
              name='from_date'
            />
            <DatePickerCustom
              onChange={(e: any) => handleInputChange(e, index, 'to_date')}
              className='w-full'
              radius='md'
              size='lg'
              name='to_date'
            />
            <InputText
              required
              name='reason'
              radius='md'
              placeholder='Reason'
              size='md'
              onChange={(e: any) => handleInputChange(e, index, 'reason')}
            />
          </div>
        </div>
      ))}
      <Button onClick={handleAddRow} className='w-full' variant='light'>
        <Plus size={16} weight='light' color='#b31e8d' />
        <Text type='font-13-600' className='text-primary'>
          Add company
        </Text>
      </Button>
    </div>
  );
  const renderDesktopView = () => (
    <table>
      <thead>
        <tr>
          <th className='p-3 bg-[#f3f3f3] border-1 border-disable-01 border-solid'>
            <Text type='font-14-600' className='text-black'>
              Company
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Job position
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Gross salary
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              From date
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              To date
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Reason
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='text'
                placeholder='Company'
                value={row.company}
                onChange={(e) => handleInputChange(e, index, 'company')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='text'
                placeholder='Job position'
                value={row.job_position}
                onChange={(e) => handleInputChange(e, index, 'job_position')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='text'
                placeholder='Gross salary'
                value={row.gross_salary}
                onChange={(e) => handleInputChange(e, index, 'gross_salary')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <DatePickerCustom
                onChange={(e: any) => {
                  handleInputChange(e, index, 'from_date');
                }}
                className='w-full'
                borderNone
                radius='md'
                size='lg'
                name='from_date'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <DatePickerCustom
                onChange={(e: any) => handleInputChange(e, index, 'to_date')}
                className='w-full'
                borderNone
                radius='md'
                size='lg'
                name='to_date'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='text'
                placeholder='Reason'
                value={row.reason}
                onChange={(e) => handleInputChange(e, index, 'reason')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2 w-14'>
              <Button
                radius='full'
                size='md'
                isIconOnly
                onClick={() => handleDeleteRow(index)}
                variant='light'
              >
                <TrashSimple size={16} weight='fill' color='#74787C' />
              </Button>
            </td>
          </tr>
        ))}
        <Button onClick={handleAddRow} className='mt-4' variant='light'>
          <Plus size={16} weight='light' color='#b31e8d' />
          <Text type='font-13-600' className='text-primary'>
            Add company
          </Text>
        </Button>
      </tbody>
    </table>
  );
  return <div>{isMobile ? renderMobileView() : renderDesktopView()}</div>;
};

export default EditTableEmploymentHistory;
