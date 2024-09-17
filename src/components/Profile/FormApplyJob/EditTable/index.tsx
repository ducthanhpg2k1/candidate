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

  // Xử lý khi người dùng nhập dữ liệu cho hàng mới
  const handleNewRowChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof RowData) => {
    setNewRow({ ...newRow, [field]: e.target.value });
  };

  // Thêm một hàng mới vào bảng
  const handleAddRow = () => {
    if (newRow.name && newRow.age && newRow.email) {
      setData([...data, newRow]);
      setNewRow({ name: '', age: '', email: '' }); // Reset lại hàng mới sau khi thêm
    }
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
          <th className='p-3 border border-disable-01 border-solid rounded-tl-lg'>Name</th>
          <th className='p-3 border border-disable-01 border-solid'>Age</th>
          <th className='p-3 border border-disable-01 border-solid'>Email</th>
          <th className='p-3 border border-disable-01 border-solid'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='text'
                value={row.name}
                onChange={(e) => handleInputChange(e, index, 'name')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='number'
                value={row.age}
                onChange={(e) => handleInputChange(e, index, 'age')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <input
                type='email'
                value={row.email}
                onChange={(e) => handleInputChange(e, index, 'email')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <button
                onClick={() => handleDeleteRow(index)}
                className='bg-red-500 text-white px-2 py-1'
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        <tr>
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
        </tr>
      </tbody>
    </table>
  );
};

export default EditTable;
