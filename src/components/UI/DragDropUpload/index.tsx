/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/consistent-function-scoping */
import React, { useRef } from 'react';

import { Button } from '@nextui-org/react';
import { UploadSimple } from '@phosphor-icons/react';

import Text from '../Text';

const DragDropUpload = ({ handleDrop, handleFileChange }: any) => {
  const fileInputRef = useRef<any>(null);

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClickUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div
        className='flex flex-col items-center justify-center w-full min-h-[184px] border-2 border-dashed border-[#b31e8d10] bg-[#b31e8d10] rounded-lg cursor-pointer  p-12 hover:border-primary transition-all'
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClickUpload}
      >
        <div className='flex flex-col items-center justify-center gap-2'>
          <Button
            isIconOnly
            size='lg'
            onClick={handleClickUpload}
            radius='sm'
            className='bg-white border-[#b31e8d30] border-1 border-solid'
          >
            <UploadSimple size={20} color='#b31e8d' weight='light' />
          </Button>
          <div className='flex flex-col gap-1 text-center'>
            <Text type='font-14-600' className='text-black'>
              Chọn một tập tin{' '}
              <Text element='span' type='font-14-600' className='text-primary'>
                hoặc kéo và thả nó vào đây
              </Text>
            </Text>
            <Text type='font-12-400' className='text-disable'>
              Chấp nhận file .pdf, .docx với dung lượng tối đa 5M
            </Text>
          </div>
        </div>
        <input
          ref={fileInputRef}
          id='file-upload'
          multiple
          accept='.pdf,.docx'
          type='file'
          className='hidden'
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default DragDropUpload;
