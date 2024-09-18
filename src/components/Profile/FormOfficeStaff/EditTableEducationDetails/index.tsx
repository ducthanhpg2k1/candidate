import React, { useState } from 'react';

import { Button } from '@nextui-org/react';
import { Plus, TrashSimple } from '@phosphor-icons/react';

import CustomSelect from '@components/UI/CustomSelect';
import DatePickerCustom from '@components/UI/DatePickerCustom';
import Text from '@components/UI/Text';

// Định nghĩa kiểu dữ liệu cho một hàng trong bảng
interface RowData {
  school_level: string;
  school_name: string;
  major: string;
  from_date: string;
  to_date: string;
  other_skills: string;
}

const EditTableEducationDetails: React.FC = () => {
  // Khởi tạo state cho dữ liệu bảng
  const [data, setData] = useState<RowData[]>([
    {
      school_level: '',
      school_name: '',
      major: '',
      to_date: '',
      from_date: '',
      other_skills: '',
    },
    {
      school_level: '',
      school_name: '',
      major: '',
      to_date: '',
      from_date: '',
      other_skills: '',
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
      school_level: '',
      school_name: '',
      major: '',
      to_date: '',
      from_date: '',
      other_skills: '',
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
              School level
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              School name
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Major
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              From date
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              To date
            </Text>
          </th>
          <th className='p-3 border border-disable-01  bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Other skills
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
                placeholder='Select school level'
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
                placeholder='School name'
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
                placeholder='Select major'
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
                placeholder='Other skills'
                value={row.other_skills}
                onChange={(e) => handleInputChange(e, index, 'other_skills')}
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
            Add degree
          </Text>
        </Button>
      </tbody>
    </table>
  );
};

export default EditTableEducationDetails;
