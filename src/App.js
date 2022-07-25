
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import CategoryProvider from './Context/CategoryContext';
import CartProvider from './Context/CartContext';

function App() {
  
  return(
    <CartProvider>
    <CategoryProvider>
    <Header></Header>
    <ProductList></ProductList>
    </CategoryProvider>
    </CartProvider>
  )


  
  
  
  
}

export default App;
