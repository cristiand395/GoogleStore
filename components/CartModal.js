import { useAppContext }  from "@context/AppContext";
import styles from "@styles/CartModal.module.css";
import CartModalItem from "./CartModalItem";

const CartModal = () => {
  const {cart} = useAppContext();

  return (
    <div className={styles.cartModal}>
      <div className={styles.cartModalContent}>
        <h4 className={styles.title}>Shopping Cart</h4>

        {cart.map(item => (
          <CartModalItem
            key={item.id}
            imgUrl={item.image}
            name={item.name}
            cart={item.cart}
            price={item.price}
            />
        ))}
        
        <h5 className={styles.total}>Total: $1499</h5>
        
        <div className={styles.payButtonContainer}>
          <button className={styles.payButton}>Pay</button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;