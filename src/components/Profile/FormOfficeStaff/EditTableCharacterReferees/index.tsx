import React, { useState } from 'react';

import { Button } from '@nextui-org/react';
import { Plus, TrashSimple } from '@phosphor-icons/react';
import { isMobile } from 'react-device-detect';

import InputText from '@components/UI/InputText';
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
  const renderMobileView = () => (
    <div className='space-y-4'>
      {data.map((row, index) => (
        <div
          key={index}
          className='border border-solid border-disable-01 p-4 rounded-lg flex flex-col gap-4'
        >
          <div className='flex items-center justify-between'>
            <Text type='font-14-700' className='text-primary'>{`Person ${index}
            `}</Text>
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
              name='name'
              radius='md'
              placeholder='Name'
              size='md'
              onChange={(e: any) => handleInputChange(e, index, 'name')}
            />
            <InputText
              required
              name='years_know'
              radius='md'
              placeholder='Years know'
              size='md'
              onChange={(e: any) => handleInputChange(e, index, 'years_know')}
            />
            <InputText
              required
              name='relationship'
              radius='md'
              placeholder='Relationship'
              size='md'
              onChange={(e: any) => handleInputChange(e, index, 'relationship')}
            />
            <InputText
              required
              name='contact_number'
              radius='md'
              placeholder='Contact number'
              size='md'
              onChange={(e: any) => handleInputChange(e, index, 'contact_number')}
            />
            <InputText
              required
              name='profession'
              radius='md'
              placeholder='Profession'
              size='md'
              onChange={(e: any) => handleInputChange(e, index, 'profession')}
            />
          </div>
        </div>
      ))}
      <Button onClick={handleAddRow} className='w-full' variant='light'>
        <Plus size={16} weight='light' color='#b31e8d' />
        <Text type='font-13-600' className='text-primary'>
          Add person
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
              Name
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Years know
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Relationship
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Contact number
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Profession
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

  return <div>{isMobile ? renderMobileView() : renderDesktopView()}</div>;
};

export default EditTableCharacterReferees;
