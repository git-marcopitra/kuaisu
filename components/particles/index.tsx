import { Motion } from '@interest-protocol/ui-kit';
import { FC, useMemo } from 'react';

const Particle: FC = () => {
  const left = useMemo(Math.random, []);
  const size = useMemo(Math.random, []);
  const delay = useMemo(() => Math.random() * 10, []);
  const duration = useMemo(() => Math.random() * 5 + 10, []);

  return (
    <Motion
      bg="#fff1"
      top="100vh"
      borderRadius="50%"
      position="absolute"
      border="1px solid #ddd9"
      animate={{ y: '-100vh' }}
      boxShadow="0 0 5px 0 #fff3"
      backdropFilter="blur(3px)"
      left={`calc(${left} * 100vw)`}
      width={`calc(${size} * 4rem)`}
      height={`calc(${size} * 4rem)`}
      transition={{ delay, duration, repeat: Infinity }}
    />
  );
};

export default Particle;
