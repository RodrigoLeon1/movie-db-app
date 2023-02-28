import { FC } from 'react';
import Header from './Header/Header';

interface Props {
  children: React.ReactNode;
  hideHeaderContent?: boolean;
  classNames?: string;
}

const Layout: FC<Props> = ({ children, hideHeaderContent = false, classNames = '' }) => {
  return (
    <>
      <Header hideContent={hideHeaderContent} />
      <main className={classNames}>{children}</main>
      {/* Footer */}
    </>
  );
};

export default Layout;
