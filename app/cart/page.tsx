import Container from "../components/Container";
import CartClient from "./CartCient";

const Cart = () => {
  return <div className="pt-8">
    <Container>
      <CartClient />
    </Container>
  </div>;
};

export default Cart;
