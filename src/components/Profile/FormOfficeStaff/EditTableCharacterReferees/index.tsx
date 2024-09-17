import React, { useState } from 'react';

import { Button } from '@nextui-org/react';
import { Plus, TrashSimple } from '@phosphor-icons/react';

import Text from '@components/UI/Text';

// Định nghĩa kiểu dữ liệu cho một hàng trong bảng
interface RowData {
  name: string;
  years_know: string;
  relationship: string;
  contact_number: string;
  profession: string;
}

const EditTableCharacterReferees: React.FC = () => {
  // Khởi tạo state cho dữ liệu bảng
  const [data, setData] = useState<RowData[]>([
    {
      name: '',
      years_know: '',
      relationship: '',
      profession: '',
      contact_number: '',
    },
    {
      name: '',
      years_know: '',
      relationship: '',
      profession: '',
      contact_number: '',
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
      years_know: '',
      relationship: '',
      profession: '',
      contact_number: '',
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
              Years know
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-primary border-solid'>
            <Text type='font-14-600' className='text-white'>
              Relationship
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-primary border-solid'>
            <Text type='font-14-600' className='text-white'>
              Contact number
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-primary border-solid'>
            <Text type='font-14-600' className='text-white'>
              Profession
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
                placeholder='Years know'
                value={row.years_know}
                onChange={(e) => handleInputChange(e, index, 'years_know')}
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
                placeholder='Contact number'
                value={row.contact_number}
                onChange={(e) => handleInputChange(e, index, 'contact_number')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>

            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='text'
                placeholder='Profession'
                value={row.profession}
                onChange={(e) => handleInputChange(e, index, 'profession')}
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

export default EditTableCharacterReferees;
