import styled from 'styled-components';
import '@fontsource/kaushan-script';
import '@fontsource/sirin-stencil';
import { motion } from 'framer-motion';

const Section = styled(motion.section)`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
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

const Text = styled(motion.div)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  font-family: 'Sirin Stencil';
  font-weight: 500;

  position: absolute;
  top: 30%;
  left: 5%;
  z-index: 5;
`;

const item = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
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
      staggerChildren: 0.1,
    },
  },
};

const Arrival = () => {
  const TitleSmell = 'Arrival'.split('');
  const TextH1 = 'Hello'.split('');
  const TextP =
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Nihil porro sequi temporibus nobis, ipsam debitis sed
  voluptates adipisci. Assumenda deleniti culpa nesciunt ea
  atque! Consequuntur ut, necessitatibus repellendus vel
  culpa assumenda rerum facere dolor veniam eveniet itaque
  corporis quas quidem aut, nemo cum deleniti, optio
  voluptatum officiis dicta ex. Et, error? Cupiditate non
  totam minima repudiandae sequi! Atque nulla maxime
  expedita eligendi sequi numquam incidunt temporibus
  asperiores aperiam? Aliquam eveniet totam, obcaecati autem
  numquam vero quibusdam sunt tempore! Expedita nobis
  labore, ratione eligendi rerum praesentium eaque
  repudiandae consequatur quia repellat numquam nemo quam
  animi neque? Delectus quo dignissimos corrupti
  perspiciatis?`.split(' ');

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

      <Text variants={container} initial="hidden" animate="show">
        <h1>
          {' '}
          {TextH1.map((el) => (
            <motion.span variants={item}>{el}</motion.span>
          ))}
        </h1>
        <p>
          {TextP.map((el) => (
            <motion.span variants={item}>{el + ' '}</motion.span>
          ))}
        </p>
      </Text>
    </Section>
  );
};

export default Arrival;
