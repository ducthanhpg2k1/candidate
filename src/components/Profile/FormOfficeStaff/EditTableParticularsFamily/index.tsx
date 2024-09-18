import React, { useState } from 'react';

import { Button } from '@nextui-org/react';
import { Plus, TrashSimple } from '@phosphor-icons/react';

import Text from '@components/UI/Text';

// Định nghĩa kiểu dữ liệu cho một hàng trong bảng
interface RowData {
  name: string;
  age: string;
  relationship: string;
  contact_number: string;
  occupation: string;
  place_occupation: string;
}

const EditTableParticularsFamily: React.FC = () => {
  // Khởi tạo state cho dữ liệu bảng
  const [data, setData] = useState<RowData[]>([
    {
      name: '',
      age: '',
      relationship: '',
      contact_number: '',
      occupation: '',
      place_occupation: '',
    },
    {
      name: '',
      age: '',
      relationship: '',
      contact_number: '',
      occupation: '',
      place_occupation: '',
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
      age: '',
      relationship: '',
      contact_number: '',
      occupation: '',
      place_occupation: '',
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
              Name
            </Text>
          </th>
          <th className='p-3 border border-disable-01 bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Age
            </Text>
          </th>
          <th className='p-3 border border-disable-01 bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Relationship
            </Text>
          </th>
          <th className='p-3 border border-disable-01 bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Contact number
            </Text>
          </th>
          <th className='p-3 border border-disable-01 bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Occupation
            </Text>
          </th>
          <th className='p-3 border border-disable-01 bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Place of occupation
            </Text>
          </th>
          <th className='p-3 border border-disable-01 bg-[#f3f3f3] border-solid'></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='text'
                value={row.name}
                placeholder='Name'
                onChange={(e) => handleInputChange(e, index, 'name')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                value={row.age}
                type='text'
                placeholder='Age'
                onChange={(e) => handleInputChange(e, index, 'age')}
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
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='text'
                value={row.contact_number}
                placeholder='Contact Number'
                onChange={(e) => handleInputChange(e, index, 'contact_number')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='text'
                value={row.occupation}
                placeholder='Occupation'
                onChange={(e) => handleInputChange(e, index, 'occupation')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='text'
                placeholder='Place of occupation'
                value={row.place_occupation}
                onChange={(e) => handleInputChange(e, index, 'place_occupation')}
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
            Add person
          </Text>
        </Button>
      </tbody>
    </table>
  );
};

export default EditTableParticularsFamily;
