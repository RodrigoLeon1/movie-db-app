import { FC } from 'react';
import Header from './Header/Header';

interface Props {
  children: React.ReactNode;
  defaultHeader?: React.ReactNode;
}

const Layout: FC<Props> = ({ children, defaultHeader = <Header /> }) => {
  return (
    <>
      {defaultHeader}
      <main>{children}</main>
      {/* Footer */}
    </>
  );
};

export default Layout;
