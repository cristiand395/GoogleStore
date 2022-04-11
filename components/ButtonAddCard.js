import { useAppContext } from '@context/AppContext';
import styles from '@styles/ButtonAddCard.module.css';

const ButtonAddCard = ({...props}) => {
  const { handleAddToCart, cart } = useAppContext()

  const handleButtonAddToCart = () => {
    handleAddToCart(props.itemName)
    console.log(cart)
  }
  return (
    <button
      className={styles.buttonAddToCard} type='button'
      onClick={handleButtonAddToCart}>
      ADD
      </button>
  );
}

export default ButtonAddCard;