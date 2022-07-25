import { ChakraProvider,Spinner,Center } from '@chakra-ui/react'


export default function Loader(){
    return (
        <ChakraProvider>
            <Center width={'1300px'} height={'500px'}>
            <Spinner thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'/>
        </Center>
        </ChakraProvider>
        
    )
}