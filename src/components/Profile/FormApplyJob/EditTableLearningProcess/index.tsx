/* eslint-disable multiline-ternary */
/* eslint-disable unicorn/no-null */
import React, { useState } from 'react';

import { Button } from '@nextui-org/react';
import { Plus, TrashSimple } from '@phosphor-icons/react';
import { isMobile } from 'react-device-detect';

import DatePickerCustom from '@components/UI/DatePickerCustom';
import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';

interface RowData {
  education_level: string;
  school_name: string;
  start_time: string;
  end_time: string;
  specialized: string;
}

const ResponsiveLearningProcessTable = () => {
  const [data, setData] = useState<RowData[]>([
    { education_level: '', school_name: '', start_time: '', end_time: '', specialized: '' },
    { education_level: '', school_name: '', start_time: '', end_time: '', specialized: '' },
  ]);

  const handleInputChange = (e: any, index: number, field: keyof RowData) => {
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

  const handleDeleteRow = (index: number) => {
    setData(data.filter((_, i) => i !== index));
  };

  const renderMobileView = () => (
    <div className='space-y-4'>
      {data.map((row, index) => (
        <div
          key={index}
          className='border border-solid border-disable-01 p-4 rounded-lg flex flex-col gap-4'
        >
          <div className='flex items-center justify-between'>
            <Text type='font-14-700' className='text-primary'>{`Cơ sở đào tạo ${index + 1}`}</Text>
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
              placeholder='Trình độ học vấn'
              size='md'
              onChange={(e: any) => handleInputChange(e, index, 'education_level')}
            />
            <InputText
              required
              name='name'
              radius='md'
              placeholder='Tên trường'
              size='md'
              onChange={(e: any) => handleInputChange(e, index, 'school_name')}
            />
            <DatePickerCustom
              onChange={(e: string) => handleInputChange(e, index, 'start_time')}
              className='w-full'
              radius='md'
              size='md'
              name='start_time'
            />
            <DatePickerCustom
              onChange={(e: string) => handleInputChange(e, index, 'end_time')}
              className='w-full'
              radius='md'
              size='md'
              name='end_time'
            />
            <InputText
              required
              name='name'
              radius='md'
              onChange={(e: any) => handleInputChange(e, index, 'specialized')}
              placeholder='Chuyên ngành'
              size='md'
            />
          </div>
        </div>
      ))}
      <Button onClick={handleAddRow} className='w-full' variant='light'>
        <Plus size={16} weight='light' color='#b31e8d' />
        <Text type='font-13-600' className='text-primary'>
          Thêm cơ sở đào tạo
        </Text>
      </Button>
    </div>
  );

  const renderDesktopView = () => (
    <table className='w-full'>
      <thead>
        <tr>
          <th className='p-3 bg-[#f3f3f3] border-1 border-disable-01 border-solid'>
            <Text type='font-14-600' className='text-black'>
              Trình độ học vấn
            </Text>
          </th>
          <th className='p-3 border border-disable-01 bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Tên trường
            </Text>
          </th>
          <th className='p-3 border border-disable-01 bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Thời gian bắt đầu
            </Text>
          </th>
          <th className='p-3 border border-disable-01 bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Thời gian kết thúc
            </Text>
          </th>
          <th className='p-3 border border-disable-01 bg-[#f3f3f3] border-solid'>
            <Text type='font-14-600' className='text-black'>
              Chuyên ngành
            </Text>
          </th>
          <th className='p-3 border border-disable-01 bg-[#f3f3f3] border-solid'></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className='border border-disable-01 border-solid p-2'>
              <input
                type='text'
                value={row.education_level}
                placeholder='Trình độ học vấn'
                onChange={(e) => handleInputChange(e, index, 'education_level')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01 border-solid p-2'>
              <input
                value={row.school_name}
                type='text'
                placeholder='Tên trường'
                onChange={(e) => handleInputChange(e, index, 'school_name')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01 border-solid p-2'>
              <DatePickerCustom
                onChange={(e: string) => handleInputChange(e, index, 'start_time')}
                className='w-full'
                borderNone
                radius='md'
                size='lg'
                name='start_time'
              />
            </td>
            <td className='border border-disable-01 border-solid p-2'>
              <DatePickerCustom
                onChange={(e: string) => handleInputChange(e, index, 'end_time')}
                className='w-full'
                borderNone
                radius='md'
                size='lg'
                name='end_time'
              />
            </td>
            <td className='border border-disable-01 border-solid p-2'>
              <input
                type='text'
                placeholder='Chuyên ngành'
                value={row.specialized}
                onChange={(e) => handleInputChange(e, index, 'specialized')}
                className='border p-2 w-full border-none focus:outline-none'
              />
            </td>
            <td className='border border-disable-01 border-solid p-2 w-14'>
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
      </tbody>
      <Button onClick={handleAddRow} className='mt-4' variant='light'>
        <Plus size={16} weight='light' color='#b31e8d' />
        <Text type='font-13-600' className='text-primary'>
          Thêm cơ sở đào tạo
        </Text>
      </Button>
    </table>
  );

  return <div>{isMobile ? renderMobileView() : renderDesktopView()}</div>;
};

export default ResponsiveLearningProcessTable;
