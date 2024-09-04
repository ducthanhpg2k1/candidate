import { NextUIProvider } from '@nextui-org/react';
import { Toaster } from 'sonner';

const AppLayout = ({ children }: any) => {
  return (
    <>
      <main>
        <NextUIProvider>{children}</NextUIProvider>
      </main>

      <Toaster position='top-center' />
    </>
  );
};

export default AppLayout;
