import { Box, Container, Flex, Text } from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar';

import bgImage from '../../assets/image/hero-bg.jpg';

const Header = () => {
  return (
    <header>
      <Navbar />
      <Box backgroundImage={bgImage} backgroundPosition="center" width="100%" height="50vh">
        <Container maxWidth={'container.xxl'} height={'100%'}>
          <Flex alignItems={'center'} justifyContent="center" height={'100%'}>
            <Text fontSize={'4xl'} color="white">
              Building exactly the eCommerce website you want.
            </Text>
          </Flex>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
