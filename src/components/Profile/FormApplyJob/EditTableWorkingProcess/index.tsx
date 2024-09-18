import React, { useState } from 'react';

import { Button } from '@nextui-org/react';
import { Plus, TrashSimple } from '@phosphor-icons/react';

import DatePickerCustom from '@components/UI/DatePickerCustom';
import Text from '@components/UI/Text';

// Định nghĩa kiểu dữ liệu cho một hàng trong bảng
interface RowData {
  company: string;
  position: string;
  start_time: string;
  end_time: string;
  income_level: string;
  leaving_job: string;
}

const EditTableLearningProcess: React.FC = () => {
  // Khởi tạo state cho dữ liệu bảng
  const [data, setData] = useState<RowData[]>([
    {
      company: '',
      position: '',
      start_time: '',
      end_time: '',
      income_level: '',
      leaving_job: '',
    },
    {
      company: '',
      position: '',
      start_time: '',
      end_time: '',
      income_level: '',
      leaving_job: '',
    },
  ]);

  // Xử lý khi người dùng nhập dữ liệu cho ô trong bảng
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof RowData,
  ) => {
    if (field === 'start_time' || field === 'end_time') {
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
      position: '',
      start_time: '',
      end_time: '',
      income_level: '',
      leaving_job: '',
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
          <th className='p-3 bg-[#f3f3f3] border-1 border-disable-01 border-solid'>
            <Text type='font-14-600' className='text-black'>
              Công ty
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Vị trí công ty
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Mức thu nhập
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Thời gian bắt đầu
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Thời gian kết thúc
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Lí do nghỉ việc
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
                value={row.company}
                placeholder='Nhập tên công ty'
                onChange={(e) => handleInputChange(e, index, 'company')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                value={row.position}
                type='text'
                placeholder='VD: Sales  Manager'
                onChange={(e) => handleInputChange(e, index, 'position')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='text'
                placeholder='Mức thu nhập'
                value={row.income_level}
                onChange={(e) => handleInputChange(e, index, 'income_level')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <DatePickerCustom
                onChange={(e: any) => {
                  handleInputChange(e, index, 'start_time');
                }}
                className='w-full'
                borderNone
                radius='md'
                size='lg'
                name='start_time'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <DatePickerCustom
                onChange={(e: any) => handleInputChange(e, index, 'end_time')}
                className='w-full'
                borderNone
                radius='md'
                size='lg'
                name='start_time'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='text'
                placeholder='Lý do nghỉ việc'
                value={row.leaving_job}
                onChange={(e) => handleInputChange(e, index, 'leaving_job')}
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
          <Text type='font-13-600' className='text-primary'>
            Thêm quá trình làm việc
          </Text>
        </Button>
      </tbody>
    </table>
  );
};

export default EditTableLearningProcess;
