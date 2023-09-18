import styled from 'styled-components';
import '@fontsource/kaushan-script';
import { motion } from 'framer-motion';

const Section = styled(motion.section)`
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba})`};
`;

const Title = styled(motion.div)`
  font-size: ${(props) => props.theme.fontBig};
  color: ${(props) => props.theme.text};
  font-family: 'Kaushan Script';
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  const TitleSmell = 'About us'.split('');

  return (
    <Section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Title variants={container} initial="hidden" animate="show">
        {TitleSmell.map((el) => (
          <motion.span variants={item}>{el}</motion.span>
        ))}
      </Title>
    </Section>
  );
};

export default About;
