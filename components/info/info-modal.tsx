import { A, Button, Div, H2, P } from '@stylin.js/elements';
import { FC } from 'react';

import { LinkSVG } from '../svg';
import { TOKENOMICS } from './info.data';
import { InfoModalProps } from './info.types';

const InfoModal: FC<InfoModalProps> = ({ onClose }) => (
  <Div
    inset="0"
    bg="#0005"
    display="flex"
    position="fixed"
    onClick={onClose}
    alignItems="center"
    justifyContent="center"
  >
    <Div
      p="1rem"
      bg="#ffffff"
      width="20rem"
      borderRadius="0.5rem"
      onClick={(e) => e.stopPropagation()}
    >
      <Div display="flex" justifyContent="space-between">
        <H2>Tokenomics</H2>
        <Button
          all="unset"
          display="flex"
          width="1.5rem"
          height="1.5rem"
          cursor="pointer"
          onClick={onClose}
          fontSize="1.25rem"
          alignItems="center"
          borderRadius="0.25rem"
          justifyContent="center"
          border="1px solid #000"
        >
          x
        </Button>
      </Div>
      <Div
        my="1.5rem"
        display="grid"
        rowGap="0.75rem"
        gridTemplateColumns="3fr 2fr"
      >
        {TOKENOMICS.map(({ name, value, link }) => (
          <>
            <P>{name}</P>

            {link ? (
              <A
                href={link}
                gap="0.25rem"
                display="flex"
                target="_blank"
                rel="noreferrer"
                alignItems="center"
              >
                <P>{value}</P>
                <LinkSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
              </A>
            ) : (
              <P>{value}</P>
            )}
          </>
        ))}
      </Div>
      <A
        display="block"
        target="_blank"
        color="#264F6A"
        textAlign="center"
        href="https://suivision.xyz/"
      >
        Check LP Locked on Explorer
      </A>
    </Div>
  </Div>
);

export default InfoModal;
