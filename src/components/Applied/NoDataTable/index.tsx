import { IconNodata } from '@components/ListCv/NoDataUpload';
import Text from '@components/UI/Text';

const NoDataTable = () => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center text-center my-10'>
      <IconNodata />
      <Text type='font-12-400' className='text-neutral'>
        Chưa có công việc nào đã ứng tuyển
      </Text>
    </div>
  );
};
export default NoDataTable;
