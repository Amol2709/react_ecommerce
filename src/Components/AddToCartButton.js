import { useCartContext } from "../Context/CartContext"
import { Button,ChakraProvider } from "@chakra-ui/react"
import {  AddIcon, MinusIcon } from '@chakra-ui/icons'

export default function AddToCartButton({product}){
    const {addItem,removeItem,item} = useCartContext()
    const cartItem = item[product.id]

    const incrementQuantity =() => {
        addItem(product);
      };
    const decrementQuantity = () => {
        removeItem(product);
      };
    if (cartItem){
        return (
            <ChakraProvider>
             <Button onClick={incrementQuantity} size='xs' leftIcon={<AddIcon />} colorScheme='teal' variant='outline'>
            </Button>
            <Button onClick = {decrementQuantity} size='xs' rightIcon={<MinusIcon />} colorScheme='teal' variant='outline'>
            </Button>
            </ChakraProvider>
        )
    } else{
    
    return(
        <Button onClick={()=>addItem(product)} colorScheme='blue' size='xs'>Add </Button>
    )
    }
}



