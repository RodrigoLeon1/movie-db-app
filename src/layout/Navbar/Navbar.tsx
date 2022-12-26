import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderRoutes, ROUTES } from '../../utils/router.utils';

import logoSvg from '../../assets/svg/logo.svg';

const Navbar = () => {
  return (
    <nav>
      <Box backgroundColor={'#333'} py={5}>
        <Container maxWidth={'container.xxl'}>
          <Flex justifyContent="space-between" alignItems={'center'}>
            <Box>
              <Link to={ROUTES.HOME}>
                <Flex alignItems={'center'} gap={4}>
                  <img src={logoSvg} alt="MovieDB Logo" width={'40px'} />
                  <Text color={'white'}>MovieDB</Text>
                </Flex>
              </Link>
            </Box>

            <Box>
              <Flex gap={10}>
                {HeaderRoutes.map((r) => (
                  <NavLink key={r.label} to={r.route} style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}>
                    {r.label}
                  </NavLink>
                ))}
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </nav>
  );
};

export default Navbar;
