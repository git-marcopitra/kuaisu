import { Motion } from '@interest-protocol/ui-kit';
import { A, Button, Div, H1, Img } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import { Layout } from '@/components';
import Particle from '@/components/particles';
import { TelegramSVG, XSVG } from '@/components/svg';

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
      fontWeight="Peach Cake"
      textShadow="6px 6px 0 #264F6A"
    >
      KUAISU
    </H1>
    <Div
      gap="3rem"
      display="flex"
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
      <Div display="flex" flexDirection="column" gap="1rem">
        <Div display="flex" gap="1rem" mt="-2rem">
          <Button
            flex="1"
            bg="#ffffff"
            p="1rem 2rem"
            border="none"
            color="#264F6A"
            fontWeight="700"
            fontSize="1.5rem"
            borderRadius="0.75rem"
            boxShadow="6px 6px 0 #264F6A"
            transition="all 500ms ease-in-out"
            nHover={{ transform: 'scale(1.1)' }}
          >
            Buy Now
          </Button>
          <Button
            flex="1"
            bg="#ffffff"
            p="1rem 2rem"
            border="none"
            color="#264F6A"
            fontWeight="700"
            fontSize="1.5rem"
            borderRadius="0.75rem"
            boxShadow="6px 6px 0 #264F6A"
            transition="all 500ms ease-in-out"
            nHover={{ transform: 'scale(1.1)' }}
          >
            Chart
          </Button>
        </Div>
        <Div gap="3rem" display="flex" justifyContent="center">
          <A
            target="_blank"
            href="https://x.com/Kuaisu_Sui"
            transition="all 500ms ease-in-out"
            nHover={{ transform: 'scale(1.1)' }}
          >
            <XSVG maxWidth="3rem" maxHeight="3rem" width="100%" />
          </A>
          <A
            target="_blank"
            href="https://t.me/KuaisuSui"
            transition="all 500ms ease-in-out"
            nHover={{ transform: 'scale(1.1)' }}
          >
            <TelegramSVG maxWidth="3rem" maxHeight="3rem" width="100%" />
          </A>
        </Div>
        <Button
          bg="white"
          p="1rem 2rem"
          border="none"
          color="#264F6A"
          fontWeight="700"
          fontSize="1.5rem"
          borderRadius="0.75rem"
          boxShadow="6px 6px 0 #264F6A"
          transition="all 500ms ease-in-out"
          nHover={{ transform: 'scale(1.1)' }}
        >
          {/* {CA.slice(0, 8)}...{CA.slice(-15)} */}
          Coming Soon
        </Button>
      </Div>
    </Div>
    <Div />
  </Layout>
);

export default Home;
