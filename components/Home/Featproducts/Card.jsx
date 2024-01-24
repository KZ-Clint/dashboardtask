import Link from 'next/link';
import styles from '../../../styles/Card.module.css';

export default function Card ({section, product}) {


  return (
    <>
      <Link href={`/product/${product.id}`} className={styles.grid_invincible_wrapper} key={product.id} >
            <div className={ section ? styles.cardwrapper2 : styles.cardwrapper } >
                <img src={product.images[0]} alt={product.title} /> 
                <div className={styles.product_details_wrapper} >
                    <h4> {product.title} </h4>
                    <h5> {product.category} </h5>
                    <div className={styles.price_wrapper} >
                        <p className={styles.main_price} > {`$${product.price}`} </p>
                        <p className={styles.discount_price}  > {`$${ Math.round(product.price - (product.price/product.discountPercentage)) }`} </p>
                    </div>
                </div>
            </div>
      </Link> 
    </>
  )
}