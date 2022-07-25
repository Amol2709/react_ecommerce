import {
    Box,
    Center,
    useColorModeValue,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  
 import AddToCartButton from './AddToCartButton';
  
  export default function Card({IMAGE,price,title,description,item}) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'300px'}
          maxH={'450px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'300px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={300}
              width={300}
              objectFit={'cover'}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'blue.400'} fontSize={'xs'} textTransform={'uppercase'}>
              {title}
            </Text>
           
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                ${price} 
                
              </Text>
              <AddToCartButton product={item}></AddToCartButton>
              
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }