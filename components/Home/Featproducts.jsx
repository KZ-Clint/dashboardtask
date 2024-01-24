import styles from '../../styles/Featproducts.module.css';
import Card from './Featproducts/Card';
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Featproducts ({prod}) {

  const [ products, setProducts ] = useState(prod)
  const [ page, setPage ] = useState(1)


  const handleLoadMore = async() => {
    setPage(page + 1)
    try{
      const res = await axios.get(`https://dummyjson.com/products?limit=${(page+1)*10}`)
      setProducts(res.data.products)
      console.log(res.data.products)
    }catch(error){
       console.log(error)
    }
   
  }

  

  return (
    <>
      <div className={styles.featproductswrapper} >
           <div className={styles.header_wrapper} >
               <h4> Featured Products </h4>
               <h3> BESTSELLER PRODUCTS </h3>
               <h5> Problems trying to resolve the conflict between  </h5>
           </div>
           <div className={styles.card_grid} >
            { products.map( (product, index) => (
                   <Card product={product}  key={product.id} />
            ) ) }            
           </div>
           { page <= 10 &&  <button className={styles.load_more} onClick={handleLoadMore} > LOAD MORE PRODUCTS </button> }
      </div>
    </>
  )
}