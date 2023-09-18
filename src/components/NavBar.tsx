import styled from 'styled-components';
import { motion } from 'framer-motion';
import NavItem from './NavItem';

const NavContainer = styled(motion.div)`
  width: 100vw;

  position: absolute;
  bottom: 0;
  z-index: 6;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  color: ${(props) => props.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;

  cursor: pointer;
`;

const NavBar = () => {
  return (
    <>
      <NavContainer
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
        }}>
        <MenuItems
          drag="y"
          dragConstraints={{
            top: 0,
            bottom: 70,
          }}
          dragElastic={0.05}
          dragSnapToOrigin>
          <NavItem title="Home" path="/home" />
          <NavItem title="About" path="/about" />
          <NavItem title="Shop" path="/shop" />
          <NavItem title="New arrival" path="/arrival" />
        </MenuItems>
      </NavContainer>
    </>
  );
};

export default NavBar;
