import { FC } from 'react';
import Header from './Header/Header';

interface Props {
  children: React.ReactNode;
  hideHeaderContent?: boolean;
}

const Layout: FC<Props> = ({ children, hideHeaderContent = false }) => {
  return (
    <>
      <Header hideContent={hideHeaderContent} />
      <main>{children}</main>
      {/* Footer */}
    </>
  );
};

export default Layout;
