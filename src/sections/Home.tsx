import styled from 'styled-components';
import CoverVideo from '../components/CoverVideo';
import Logo from '../components/Logo';

const Section = styled.section`
  position: relative;
  min-height: 200vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Section>
      <CoverVideo />
      <Logo />
      <div>NavBar</div>
    </Section>
  );
};

export default Home;
