import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>João Debussy</Text>  
        <Text color="gray.300" fontSize="small">
          social.debussy@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="João Debussy" src="https://github.com/dbssy.png" />
    </Flex>
  );
}