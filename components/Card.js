import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from '@styles/Card.module.css'
import ButtonAddCard from '@components/ButtonAddCard';

const Card = ({...props}) => {

  return (
    <div className={styles.card}>
      <Link href='/'>
        <a className={styles.imageContainer}>
          <Image
          src={props.image}
          alt={props.name}
          width={200}
          height={200}
          />
          <p className={styles.itemName}>{props.name}</p>
        </a>
      </Link>
      <div className={styles.bottomCard}>
        <p className={styles.price}>${props.price}</p>
        <ButtonAddCard 
          itemName={props.name}/>
      </div>
    </div>
  );
}

export default Card;