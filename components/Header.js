import { useState } from 'react';
import { IconContext } from "react-icons";
import Image from 'next/image';
import { BsFillCartFill } from "react-icons/bs";
import styles from '@styles/Header.module.css';
import CartModal from '@components/CartModal';
import useGetProducts from '@hooks/useGetProducts';

const Header = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  }

  return (
    <div className={styles.header}>
      <div className={styles.icon}>
        <Image
        src="https://storage.googleapis.com/mannequin/blobs/cd0710fe-8cb8-4892-993f-4e05ef21b7cb.svg"
        alt="Picture of the author"
        width={50}
        height={50}
        />
      </div>
      <div className={styles.title}>Google Store</div>
      <div className={styles.cartSection}
        onClick={toggleCartModal}>
        <IconContext.Provider value={{ color: "gray", className:styles. iconCart }}> 
          <BsFillCartFill />
        </IconContext.Provider>
        <div className={styles.cartCounter}>2</div>

        {showCartModal && <CartModal />}
      </div>
    </div>
  );
}

export default Header;