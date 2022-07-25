
import { ChakraProvider} from '@chakra-ui/react'
import UseApi from '../hooks/UseApi'
import Card from './Card'
import { useCategoryContext } from '../Context/CategoryContext'
import {  SimpleGrid} from '@chakra-ui/react'
import Loader from './Loader'
export default function ProductList(){
    const {selectedCategory} = useCategoryContext()
    const {data:products,isloader} = UseApi(`https://fakestoreapi.com/products/category/${selectedCategory}`)

    if (isloader){
        return <Loader></Loader>
    }else{
    return (
    <ChakraProvider>
        
        <SimpleGrid columns={4} spacing={10}>
        {products.map((category,index)=>(
            
                <Card IMAGE={category.image} price = {category.price} title = {category.title} 
                description={category.description} item={category} key={index}>
                </Card>
                
               
               


        ))}
         </SimpleGrid>
    </ChakraProvider>
    )
        }
        
}