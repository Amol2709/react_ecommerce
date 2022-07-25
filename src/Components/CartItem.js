import { ChakraProvider,Button} from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,

  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'

import { useRef } from 'react'
import { useCartContext } from '../Context/CartContext'
import InsideCardItem from './InsideCardItem'

export default function CartItem() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const {item} = useCartContext()
  return (
    <ChakraProvider>
    <Button ref={btnRef} size={'md'} colorScheme='teal' onClick={onOpen}>My Cart</Button>
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your's Product</DrawerHeader>

          <DrawerBody>
          {Object.keys(item).map((productId) => (
          <InsideCardItem key={productId} product={item[productId]} />
            
          ))
          }
          </DrawerBody>

          
        </DrawerContent>
      </Drawer>
      </ChakraProvider>
  );
}
