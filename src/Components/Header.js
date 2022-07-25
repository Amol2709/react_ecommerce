

import { ChakraProvider,HStack} from '@chakra-ui/react'
import { Tabs, TabList, Tab} from '@chakra-ui/react'
import UseApi from '../hooks/UseApi'
import { useCategoryContext } from '../Context/CategoryContext'
import CartItem from './CartItem'


export default function Header(){
    const {setSelectedCategory} = useCategoryContext()
    const {data:categories} =UseApi('https://fakestoreapi.com/products/categories')
    return (
    <ChakraProvider>
        <HStack spacing={'100px'}>
        <Tabs>
            <TabList>
                {categories.map((category,index)=>(<Tab onClick={()=>setSelectedCategory(category)} key={index}>{category}</Tab>))}
            </TabList>
        </Tabs>
        <CartItem></CartItem>
        </HStack>
    </ChakraProvider>
    )
}
