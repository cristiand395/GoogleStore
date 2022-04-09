import Image from 'next/image'
import styles from '@styles/CartModalItem.module.css'

const CartModalItem = (props) => {
  const { imgUrl, name, price } = props;

  return (
    <div className={styles.cartModalItem}>
      <Image
        src={imgUrl}
        width={70}
        height={70}
        alt={name}/>
      <p className={styles.itemName}>{name}</p>
      <div className={styles.cartModalCounter}>
        <button className={styles.counterButton}>-</button>
        <p>1</p>
        <button className={styles.counterButton}>+</button>
      </div>
    </div>
  );
}

export default CartModalItem;