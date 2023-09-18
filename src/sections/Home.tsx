import styled from 'styled-components';
import CoverVideo from '../components/CoverVideo';
import Logo from '../components/Logo';
import { motion } from 'framer-motion';

const Section = styled(motion.section)`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Logo />
      <CoverVideo />
    </Section>
  );
};

export default Home;
