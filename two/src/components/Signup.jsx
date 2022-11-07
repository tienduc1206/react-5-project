import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <Container maxW={'container.xl'} h="100vh" p="16">
      <form action="">
        <VStack
          alignItems={'stretch'}
          spacing="8"
          w={['full', '96']}
          m={'auto'}
          my="16"
        >
          <Heading textAlign={'center'}>VIDEO HUB</Heading>
          <Avatar boxSize={'32'} alignSelf={'center'} />
          <Input placeholder="Name" focusBorderColor={'purple.500'} />
          <Input placeholder="Email" focusBorderColor={'purple.500'} />
          <Input
            placeholder="Password"
            type={'password'}
            focusBorderColor={'purple.500'}
          />
          <Button variant={'link'} alignSelf="flex-end">
            Forget Password?
          </Button>
          <Button type="submit" colorScheme={'purple'}>
            Signup
          </Button>
          <Text textAlign={'end'}>
            Already Signed Up?{' '}
            <Button variant={'link'} colorScheme="purple">
              <Link to={'/login'}>Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
