import styles from '../../styles/Productitem/Bestsellerproducts.module.css';
import Card from '../Home/Featproducts/Card';


export default function Bestsellerproducts ({products}) {



  return (
    <>
      <div className={styles.best_seller_wrapper} >
            <div className={styles.main_wrapper} >
                <h3> BESTSELLER PRODUCTS </h3>
                <div className={styles.card_grid} >
                   { products.map( (product) => (
                        <Card section={'product_item'} product={product} key={product.id} />
                   ) ) }           
                </div>
            </div>
      </div>
    </>
  )
}