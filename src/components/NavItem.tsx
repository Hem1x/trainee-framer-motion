import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.textRgba};
`;

const NavItem = ({
  title,
  path,
}: {
  title: string;
  path: string;
}) => {
  return (
    <Link to={path}>
      <MenuItem
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.09, y: 0 }}>
        {title}
      </MenuItem>
    </Link>
  );
};

export default NavItem;
