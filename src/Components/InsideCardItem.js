
import AddToCartButton from "./AddToCartButton";
import {
  Text,OrderedList,UnorderedList,ListItem
} from '@chakra-ui/react';

export default function InsideCardItem({ product }) {
  return (
    <OrderedList>
    <UnorderedList>
      <ListItem>{product.title}</ListItem>
      <ListItem>Quantity:{product.quantity}</ListItem>
      <AddToCartButton  product={product} />
      <ListItem>${product.price * product.quantity}</ListItem>
    </UnorderedList>
    <div>----------------</div>
    </OrderedList>

    
  );
}
