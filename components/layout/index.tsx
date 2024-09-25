import { Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main
    py="2rem"
    display="flex"
    overflowY="auto"
    minHeight="100vh"
    alignItems="center"
    flexDirection="column"
    backgroundImage="url(/bg.webp)"
    backgroundPosition="center center"
    backgroundAttachment="fixed"
    backgroundSize="cover"
  >
    {children}
  </Main>
);

export default Layout;
