import React, { useState } from 'react';

import { Button } from '@nextui-org/react';
import { Plus, TrashSimple } from '@phosphor-icons/react';

import DatePickerCustom from '@components/UI/DatePickerCustom';
import Text from '@components/UI/Text';
import CustomSelect from '@components/UI/CustomSelect';

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

  return (
    <table>
      <thead>
        <tr>
          <th className='p-3 bg-primary border-1 border-disable-01 border-solid'>
            <Text type='font-14-600' className='text-white'>
              Company
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-primary border-solid'>
            <Text type='font-14-600' className='text-white'>
              Job position
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-primary border-solid'>
            <Text type='font-14-600' className='text-white'>
              Gross salary
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-primary border-solid'>
            <Text type='font-14-600' className='text-white'>
              From date
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-primary border-solid'>
            <Text type='font-14-600' className='text-white'>
              To date
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-primary border-solid'>
            <Text type='font-14-600' className='text-white'>
              Reason
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-primary border-solid'></th>
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
                <TrashSimple size={16} weight='fill' color='#b91c1c' />
              </Button>
            </td>
          </tr>
        ))}
        <Button onClick={handleAddRow} className='mt-4' variant='light'>
          <Plus size={16} weight='light' color='#b31e8d' />
          <Text type='font-12-600' className='text-primary'>
            Add company
          </Text>
        </Button>
      </tbody>
    </table>
  );
};

export default EditTableEmploymentHistory;
