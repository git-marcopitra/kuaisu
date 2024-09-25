import { Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main
    display="flex"
    minHeight="100vh"
    alignItems="center"
    flexDirection="column"
    backgroundImage="url(/bg.webp)"
    backgroundPosition="center center"
    backgroundSize="cover"
  >
    {children}
  </Main>
);

export default Layout;
