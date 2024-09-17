import React, { useState } from 'react';

import { Button } from '@nextui-org/react';
import { Plus, TrashSimple } from '@phosphor-icons/react';

import DatePickerCustom from '@components/UI/DatePickerCustom';
import Text from '@components/UI/Text';


// Định nghĩa kiểu dữ liệu cho một hàng trong bảng
interface RowData {
  education_level: string;
  school_name: string;
  start_time: string;
  end_time: string;
  specialized: string;
}

const EditTableLearningProcess: React.FC = () => {
  // Khởi tạo state cho dữ liệu bảng
  const [data, setData] = useState<RowData[]>([
    { education_level: '', school_name: '', start_time: '', end_time: '', specialized: '' },
    { education_level: '', school_name: '', start_time: '', end_time: '', specialized: '' },
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
      education_level: '',
      school_name: '',
      start_time: '',
      end_time: '',
      specialized: '',
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
              Trình độ học vấn
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-primary border-solid'>
            <Text type='font-14-600' className='text-white'>
              Tên trường
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-primary border-solid'>
            <Text type='font-14-600' className='text-white'>
              Thời gian bắt đầu
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-primary border-solid'>
            <Text type='font-14-600' className='text-white'>
              Thời gian kết thúc
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-primary border-solid'>
            <Text type='font-14-600' className='text-white'>
              Chuyên ngành
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
                value={row.education_level}
                placeholder='Trình độ học vấn'
                onChange={(e) => handleInputChange(e, index, 'education_level')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                value={row.school_name}
                type='text'
                placeholder='Tên trường'
                onChange={(e) => handleInputChange(e, index, 'school_name')}
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
                placeholder='Chuyên ngành'
                value={row.specialized}
                onChange={(e) => handleInputChange(e, index, 'specialized')}
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
            Thêm cơ sở đào tạo
          </Text>
        </Button>
      </tbody>
    </table>
  );
};

export default EditTableLearningProcess;
