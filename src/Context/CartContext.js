import {createContext, useContext, useState}  from "react"
export const CartContext = createContext({
    item:{},
    totalPrice:0,
    isCartopen:false,
    addItem:(product)=>{},
    removeItem:(product)=>{}
});


export default function CartProvider({children}){
    const [isCartopen, setCartopen] = useState(false)
    const [item, setItem] = useState({})
    const [totalPrice, setTotalPrice] = useState(0)
    const addItem = (product)=>{
        console.log('Inside Add Item',product)
        const newItem = {...item}
        if (newItem[product.id]){
            newItem[product.id]={
                ...newItem[product.id],
                quantity:newItem[product.id].quantity+1
            }
        }else{
            newItem[product.id] = {
                id:product.id,
                title :product.title,
                price :product.price,
                quantity: 1
            }
        }
        setItem(newItem)
        setTotalPrice(totalPrice+product.price)
        console.log(item)
    }


    const removeItem = (product)=>{
        const newItem = {...item}
        if (!newItem[product.id]) return;
        if (newItem[product.id].quantity>1){
            newItem[product.id] = {
                ...newItem[product.id],
                quantity : newItem[product.id].quantity-1

            }
        }else{
            delete newItem[product.id]
        }

        setItem(newItem)
        setTotalPrice(totalPrice-product.price)

    }
    return (
        <CartContext.Provider 
        value={{
            addItem,
            removeItem,
            totalPrice,
            item,
            isCartopen,
            setCartopen
        }}
        >
            {children} 
        </CartContext.Provider>
    )
}

export const useCartContext = ()=> useContext(CartContext)