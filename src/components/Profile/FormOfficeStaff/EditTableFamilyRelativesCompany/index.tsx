import React, { useState } from 'react';

import { Button } from '@nextui-org/react';
import { Plus, TrashSimple } from '@phosphor-icons/react';

import Text from '@components/UI/Text';

// Định nghĩa kiểu dữ liệu cho một hàng trong bảng
interface RowData {
  name: string;
  relationship: string;
  job_position: string;
}

const EditTableFamilyRelativesCompany: React.FC = () => {
  // Khởi tạo state cho dữ liệu bảng
  const [data, setData] = useState<RowData[]>([
    {
      name: '',
      relationship: '',
      job_position: '',
    },
    {
      name: '',
      relationship: '',
      job_position: '',
    },
  ]);

  // Xử lý khi người dùng nhập dữ liệu cho ô trong bảng
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof RowData,
  ) => {
    const updatedData: any = [...data];
    updatedData[index][field] = e.target.value;
    setData(updatedData);
  };

  // Thêm một hàng mới vào bảng
  const handleAddRow = () => {
    const newRow = {
      name: '',
      relationship: '',
      job_position: '',
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
              Name
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-primary border-solid'>
            <Text type='font-14-600' className='text-white'>
              Job position
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-primary border-solid'>
            <Text type='font-14-600' className='text-white'>
              Relationship
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
                placeholder='Name'
                value={row.name}
                onChange={(e) => handleInputChange(e, index, 'name')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='text'
                placeholder='Job Position'
                value={row.job_position}
                onChange={(e) => handleInputChange(e, index, 'job_position')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='text'
                placeholder='Relationship'
                value={row.relationship}
                onChange={(e) => handleInputChange(e, index, 'relationship')}
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
            Add person
          </Text>
        </Button>
      </tbody>
    </table>
  );
};

export default EditTableFamilyRelativesCompany;
