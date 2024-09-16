/* eslint-disable multiline-ternary */
/* eslint-disable no-console */
import { useRef, useState } from 'react';

import { Button, RadioGroup, useRadio, VisuallyHidden } from '@nextui-org/react';
import { ArrowLeft, Eye, Trash } from '@phosphor-icons/react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { uuid } from 'uuidv4';

import DragDropUpload from '@components/UI/DragDropUpload';
import Text from '@components/UI/Text';

import ModalDeleteFile from './ModalDeleteFile';
import NoDataUpload from './NoDataUpload';

const validateFile = (files: any) => {
  const allowedFormats = new Set([
    'application/pdf', // PDF
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOCX
  ]);
  const maxFileSize = 5 * 1024 * 1024; // 5MB

  for (const file of files) {
    // Check file size
    if (file.size > maxFileSize) {
      return { valid: false, message: `File ${file.name} exceeds 50MB.` };
    }

    // Check file format
    if (!allowedFormats.has(file.type)) {
      return { valid: false, message: `File ${file.name} has an invalid format.` };
    }
  }

  return { valid: true, message: 'All files are valid' };
};

const ListCv = () => {
  const router = useRouter();

  const [listCvUpload, setListCvUpload] = useState<any>([]);
  const refModalDeleteFile: any = useRef();

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    const validation = validateFile(files);

    if (validation.valid) {
      const fileArray = [...files].map((file: any) => ({
        id: uuid(),
        fileName: file.name,
        uploaded_at: dayjs(file.lastModifiedDate).format('DD/MM/YYYY'),
      }));
      if (fileArray.length > 0) {
        const arrayFiles = [...listCvUpload];

        arrayFiles.unshift(...fileArray);

        setListCvUpload(arrayFiles);
      }
    } else {
      console.log('update error');
    }
  };

  const handleFileChange = (e: any) => {
    const files = e.target.files;
    const validation = validateFile(files);

    if (validation.valid) {
      const fileArray = [...files].map((file: any) => ({
        id: uuid(),
        fileName: file.name,
        uploaded_at: dayjs(file.lastModifiedDate).format('DD/MM/YYYY'),
      }));

      if (fileArray.length > 0) {
        const arrayFiles = [...listCvUpload];

        arrayFiles.unshift(...fileArray);

        setListCvUpload(arrayFiles);
      }
    } else {
      console.log('update error');
    }
  };

  const handleDeleteFile = (idFile: string) => {
    const newArrayFileUpload = listCvUpload?.filter((item: any) => item?.id !== idFile);
    setListCvUpload(newArrayFileUpload);
  };

  return (
    <>
      <div className='flex flex-col gap-6 w-8/12 m-auto mt-[-40px]'>
        <div className='flex items-center gap-2'>
          <Button
            variant='light'
            size='md'
            isIconOnly
            onClick={() => router.back()}
            className='rounded-full'
          >
            <ArrowLeft size={20} />
          </Button>
          <Text type='font-20-700'>Danh sách cv của bạn</Text>
        </div>
        <DragDropUpload handleDrop={handleDrop} handleFileChange={handleFileChange} />
        {listCvUpload?.length > 0 ? (
          <RadioGroup>
            {listCvUpload?.map((item: any) => {
              return (
                <CustomRadio key={item?.id} value={item?.id}>
                  <div className='flex items-center justify-between gap-3 w-full mt-[-6px]'>
                    <div className='flex flex-col gap-1'>
                      <div className='flex items-center gap-2'>
                        <Text type='font-14-600'>{item?.fileName}</Text>
                      </div>
                      <Text type='font-12-400' className='text-disable'>
                        {item?.uploaded_at}
                      </Text>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Button variant='light' size='md' isIconOnly className='rounded-full'>
                        <Eye size={16} />
                      </Button>
                      <Button
                        onClick={() => refModalDeleteFile.current.onOpen(item?.id)}
                        variant='light'
                        size='md'
                        isIconOnly
                        className='rounded-full'
                      >
                        <Trash size={16} color='#b91c1c' />
                      </Button>
                    </div>
                  </div>
                </CustomRadio>
              );
            })}
          </RadioGroup>
        ) : (
          <NoDataUpload />
        )}
      </div>
      <ModalDeleteFile handleDeleteFile={handleDeleteFile} ref={refModalDeleteFile} />
    </>
  );
};
export default ListCv;

const CustomRadio = (props: any) => {
  const {
    Component,
    children,
    isSelected,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={clsx(
        'group w-full flex  items-center',
        'cursor-pointer border-1 border-disable-01 border-solid rounded-lg gap-4 p-4',
        'data-[selected=true]:border-primary hover:opacity-80 transition-all',
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div className='w-full'>
        {children && (
          <div className='w-full'>
            <div className='flex flex-col gap-1'>
              {children}

              {isSelected && (
                <Text type='font-12-400' className='text-[#FF9D33]'>
                  Mặc định
                </Text>
              )}
            </div>
          </div>
        )}
      </div>
    </Component>
  );
};
