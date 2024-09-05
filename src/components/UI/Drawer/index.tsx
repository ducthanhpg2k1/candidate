import { ReactNode } from 'react';

const Drawer = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: VoidFunction;
  children: ReactNode;
}) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 overflow-x-hidden bg-white/15 h-[100dvh] transition-opacity ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed z-[1000] top-0 right-0  w-8/12 h-[100dvh] bg-white transition-transform transform ${
          isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
        }`}
      >
        {/* Content */}
        <>{children}</>
      </div>
    </>
  );
};

export default Drawer;
