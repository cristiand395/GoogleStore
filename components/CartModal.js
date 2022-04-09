import useGetProducts from "@hooks/useGetProducts";
import styles from "@styles/CartModal.module.css";
import CartModalItem from "./CartModalItem";

const CardModal = () => {
  const products = useGetProducts();

  return (
    <div className={styles.cartModal}>
      <div className={styles.cartModalContent}>
        <h4 className={styles.title}>Shopping Cart</h4>

        {products.map(product => (
          <CartModalItem
            key={product.id}
            imgUrl={product.image}
            name={product.name}
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

export default CardModal;