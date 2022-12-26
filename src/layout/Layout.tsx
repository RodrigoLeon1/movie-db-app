import { FC } from 'react';
import Header from './Header/Header';

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* Footer */}
    </>
  );
};

export default Layout;
