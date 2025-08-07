import { ReactNode } from 'react';

type StrippedLayoutProps = {
  children: ReactNode;
};

const StrippedLayout = ({ children }: StrippedLayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default StrippedLayout;
