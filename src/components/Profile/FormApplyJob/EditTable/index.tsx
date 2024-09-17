import Text from '@components/UI/Text';
import { Button } from '@nextui-org/react';
import { Plus, TrashSimple } from '@phosphor-icons/react';
import React, { useState } from 'react';

// Định nghĩa kiểu dữ liệu cho một hàng trong bảng
interface RowData {
  name: string;
  age: number | string;
  email: string;
}

const EditTable: React.FC = () => {
  // Khởi tạo state cho dữ liệu bảng
  const [data, setData] = useState<RowData[]>([
    { name: 'John', age: 28, email: 'john@example.com' },
    { name: 'Jane', age: 32, email: 'jane@example.com' },
  ]);

  // State cho hàng mới
  const [newRow, setNewRow] = useState<RowData>({ name: '', age: '', email: '' });

  // Xử lý khi người dùng nhập dữ liệu cho ô trong bảng
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof RowData,
  ) => {
    const updatedData = [...data];
    updatedData[index][field] = e.target.value;
    setData(updatedData);
  };

  // Thêm một hàng mới vào bảng
  const handleAddRow = () => {
    const newRow = {
      name: '',
      age: '',
      email: '',
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
          <th className='p-3 border border-disable-01 border-solid rounded-tl-lg'>
            Trình độ học vấn
          </th>
          <th className='p-3 border border-disable-01 border-solid'>Tên trường</th>
          <th className='p-3 border border-disable-01 border-solid'>Thời gian bắt đầu</th>
          <th className='p-3 border border-disable-01 border-solid'>Thời gian kết thúc</th>
          <th className='p-3 border border-disable-01 border-solid'>Chuyên ngành</th>
          <th className='p-3 border border-disable-01 border-solid'></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='text'
                value={row.name}
                placeholder='Trình độ học vấn'
                onChange={(e) => handleInputChange(e, index, 'name')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='number'
                value={row.age}
                placeholder='Tên trường'
                onChange={(e) => handleInputChange(e, index, 'age')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='email'
                placeholder='Thời gian bắt đầu'
                value={row.email}
                onChange={(e) => handleInputChange(e, index, 'email')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='email'
                placeholder='Thời gian kết thúc'
                value={row.email}
                onChange={(e) => handleInputChange(e, index, 'email')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='email'
                placeholder='Chuyên ngành'
                value={row.email}
                onChange={(e) => handleInputChange(e, index, 'email')}
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
        {/* <tr>
          <td className='border border-disable-01 rounded-lg border-solid p-2'>
            <input
              type='text'
              value={newRow.name}
              onChange={(e) => handleNewRowChange(e, 'name')}
              placeholder='Enter name'
              className='border p-2 w-full border-none focus:outline-none'
            />
          </td>
          <td className='border border-disable-01 rounded-lg border-solid p-2'>
            <input
              type='number'
              value={newRow.age}
              onChange={(e) => handleNewRowChange(e, 'age')}
              placeholder='Enter age'
              className='border p-2 w-full border-none focus:outline-none'
            />
          </td>
          <td className='border border-disable-01 rounded-lg border-solid p-2'>
            <input
              type='email'
              value={newRow.email}
              onChange={(e) => handleNewRowChange(e, 'email')}
              placeholder='Enter email'
              className='border p-2 w-full border-none focus:outline-none'
            />
          </td>
          <td className='border border-disable-01 rounded-lg border-solid p-2'>
            <button onClick={handleAddRow} className='bg-green-500 text-white px-2 py-1'>
              Add Row
            </button>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default EditTable;
