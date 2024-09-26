import { Motion } from '@interest-protocol/ui-kit';
import { Div, H1, Img } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import { Layout } from '@/components';
import Info from '@/components/info';
import Particle from '@/components/particles';

const Home: FC = () => (
  <Layout>
    <Div position="fixed" inset="0">
      {Array.from({ length: 50 }, () => (
        <Particle key={unikey()} />
      ))}
    </Div>
    <H1
      mt="4rem"
      color="#ffff"
      fontSize="6rem"
      textAlign="center"
      fontFamily="Peach Cake"
      textShadow="6px 6px 0 #264F6A"
    >
      KUAISU
    </H1>
    <Div
      gap="3rem"
      display="flex"
      position="relative"
      flexDirection="column"
      justifyContent="center"
    >
      <Motion
        initial={{ y: 0 }}
        animate={{ y: 16 }}
        transition={{
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <Img
          alt="logo"
          mr="-6rem"
          src="/logo.webp"
          maxWidth="25rem"
          filter="drop-shadow(0 0 25px #0008)"
        />
      </Motion>
      <Info />
    </Div>
  </Layout>
);

export default Home;
