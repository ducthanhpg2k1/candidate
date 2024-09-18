import React, { useState } from 'react';

import { Button } from '@nextui-org/react';
import { Plus, TrashSimple } from '@phosphor-icons/react';

import CustomSelect from '@components/UI/CustomSelect';
import Text from '@components/UI/Text';

// Định nghĩa kiểu dữ liệu cho một hàng trong bảng
interface RowData {
  language: string;
  spoken: string;
  written: string;
  understand: string;
}

const EditTableLanguageProficiency: React.FC = () => {
  // Khởi tạo state cho dữ liệu bảng
  const [data, setData] = useState<RowData[]>([
    {
      language: '',
      spoken: '',
      written: '',
      understand: '',
    },
    {
      language: '',
      spoken: '',
      written: '',
      understand: '',
    },
  ]);

  // // Xử lý khi người dùng nhập dữ liệu cho ô trong bảng
  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   index: number,
  //   field: keyof RowData,
  // ) => {
  //   const updatedData: any = [...data];
  //   updatedData[index][field] = e.target.value;
  //   setData(updatedData);
  // };

  // Thêm một hàng mới vào bảng
  const handleAddRow = () => {
    const newRow = {
      language: '',
      spoken: '',
      written: '',
      understand: '',
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
              Language
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Spoken
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Written
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Understand
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className='border border-disable-01  border-solid p-2'>
              <CustomSelect
                className='w-full'
                radius='full'
                size='lg'
                borderNone
                placeholder='Select language'
                options={[
                  {
                    value: 1,
                    label: 'Điểm điểm 1',
                  },
                  {
                    value: 2,
                    label: 'Địa điểm 2',
                  },
                  {
                    value: 3,
                    label: 'Địa điểm 3',
                  },
                ]}
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <CustomSelect
                className='w-full'
                radius='full'
                size='lg'
                borderNone
                placeholder='Select level'
                options={[
                  {
                    value: 1,
                    label: 'Điểm điểm 1',
                  },
                  {
                    value: 2,
                    label: 'Địa điểm 2',
                  },
                  {
                    value: 3,
                    label: 'Địa điểm 3',
                  },
                ]}
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <CustomSelect
                className='w-full'
                radius='full'
                size='lg'
                borderNone
                placeholder='Select level'
                options={[
                  {
                    value: 1,
                    label: 'Điểm điểm 1',
                  },
                  {
                    value: 2,
                    label: 'Địa điểm 2',
                  },
                  {
                    value: 3,
                    label: 'Địa điểm 3',
                  },
                ]}
              />
            </td>
            <td className='border border-disable-01  border-solid p-2'>
              <CustomSelect
                className='w-full'
                radius='full'
                size='lg'
                borderNone
                placeholder='Select level'
                options={[
                  {
                    value: 1,
                    label: 'Điểm điểm 1',
                  },
                  {
                    value: 2,
                    label: 'Địa điểm 2',
                  },
                  {
                    value: 3,
                    label: 'Địa điểm 3',
                  },
                ]}
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
            Add language
          </Text>
        </Button>
      </tbody>
    </table>
  );
};

export default EditTableLanguageProficiency;
