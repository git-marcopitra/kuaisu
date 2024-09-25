import { Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main
    height="100vh"
    display="flex"
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
