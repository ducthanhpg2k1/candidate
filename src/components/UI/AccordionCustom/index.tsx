import { Accordion, AccordionItem } from '@nextui-org/react';
import { ReactNode } from 'react';

const AccordionCustom = ({ children, title }: { title: any; children: ReactNode }) => {
  return (
    <Accordion
      itemClasses={{
        base: 'border-1 border-solid w-full px-2 border-disable-01 rounded-lg',
        trigger: 'px-3 py-0 h-14 flex items-center',
      }}
      variant='bordered'
    >
      <AccordionItem
        // classNames={{
        //   base: ['border-1 border-solid  border-disable-01'],
        // }}
        key='1'
        title={title}
      >
        {children}
      </AccordionItem>
    </Accordion>
  );
};
export default AccordionCustom;
