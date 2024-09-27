import { A, Button, Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';

import { CA } from '@/constants';

import { TelegramSVG, XSVG } from '../svg';
import InfoModal from './info-modal';

const Info: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Div display="flex" flexDirection="column" gap="1rem">
      <Div
        mt="-2rem"
        gap="1rem"
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr"
      >
        <A
          flex="1"
          bg="#ffffff"
          p="1rem 2rem"
          border="none"
          color="#264F6A"
          target="_blank"
          rel="noreferrer"
          fontWeight="700"
          fontSize="1.5rem"
          borderRadius="0.75rem"
          boxShadow="6px 6px 0 #264F6A"
          transition="all 500ms ease-in-out"
          nHover={{ transform: 'scale(1.1)' }}
          href="https://hop.ag/swap/SUI-0xc3b645d1fa1cd16979954f1c1fcfd51e15407ae5f73c892bfadee3ac6bf5412c::kuaisu::KUAISU"
        >
          Buy
        </A>
        <A
          flex="1"
          bg="#ffffff"
          p="1rem 2rem"
          border="none"
          color="#264F6A"
          target="_blank"
          rel="noreferrer"
          fontWeight="700"
          fontSize="1.5rem"
          borderRadius="0.75rem"
          boxShadow="6px 6px 0 #264F6A"
          transition="all 500ms ease-in-out"
          nHover={{ transform: 'scale(1.1)' }}
          href="https://dexscreener.com/sui/0x734acb7e40b4aed2b74726aeb2a3dfc76f76b3a2fd5f6241cf301271cb29c222"
        >
          Chart
        </A>
        <Button
          p="1rem"
          bg="white"
          border="none"
          color="#264F6A"
          fontWeight="700"
          fontSize="1.5rem"
          borderRadius="0.75rem"
          onClick={() => setOpen(true)}
          boxShadow="6px 6px 0 #264F6A"
          transition="all 500ms ease-in-out"
          nHover={{ transform: 'scale(1.1)' }}
        >
          💰
        </Button>
      </Div>
      <Div gap="3rem" display="flex" justifyContent="center">
        <A
          target="_blank"
          href="https://x.com/KuaisuOnSui"
          transition="all 500ms ease-in-out"
          nHover={{ transform: 'scale(1.1)' }}
        >
          <XSVG maxWidth="3rem" maxHeight="3rem" width="100%" />
        </A>
        <A
          target="_blank"
          href="https://t.me/KuaisuOnSui"
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
        onClick={() => {
          window.navigator.clipboard.writeText(CA);
          toast('CA Copied');
        }}
      >
        {CA.slice(0, 8)}...{CA.slice(-15)}
      </Button>
      {open && <InfoModal onClose={() => setOpen(false)} />}
    </Div>
  );
};

export default Info;
