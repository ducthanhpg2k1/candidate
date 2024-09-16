/* eslint-disable react-hooks/rules-of-hooks */
import React, { ReactNode } from 'react';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from '@nextui-org/react';

const classNames = {
  // wrapper: ['px-0 shadow-none'],
  th: ['text-[14px]', 'font-normal'],
  td: ['py-4'],
  // tr: ['border-b-1 border-solid border-b-neutral-01 w-full'],
};

export interface IColumns {
  key: string;
  label: string;
  width?: number | string;
  tooltip?: boolean;
  messageTooltip?: string;
}

interface ITableProps {
  columns: IColumns[];
  dataSource?: any;
  emptyContent?: ReactNode;
  loading?: boolean;
  renderCell?: any;
}
const TableCustom = (props: ITableProps) => {
  const { columns, dataSource, emptyContent, loading = false, renderCell } = props;

  return (
    <Table classNames={classNames}>
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn width={400} key={column.key}>
            <div className='flex items-center gap-1'>{column.label}</div>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        loadingContent={<Spinner color='success' />}
        isLoading={loading}
        emptyContent={emptyContent || 'No users found'}
        items={dataSource?.map((item: any, index: any) => {
          return {
            key: index,
            ...item,
          };
        })}
      >
        {(item: any) => {
          return (
            <TableRow key={item.key}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
};
export default TableCustom;
