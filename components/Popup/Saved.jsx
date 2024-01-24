import Link from 'next/link';
import styles from '../../styles/Popup/Cart.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import { useSelector, useDispatch } from 'react-redux'
import { SET_POPUP } from '../../redux/reducers/popups'
import { REMOVE_SAVED } from '../../redux/reducers/save'

export default function Saved () {

    const {savedPopup} = useSelector( (state) => state.popups )
    const dispatch = useDispatch()
    const { save } = useSelector( (state) => state.save )

    const handleDeleteSaved = (prod) => {
      const newSaved = save.filter( (filterProd) => {
          return filterProd.id !== prod.id
      } )
      localStorage.setItem('savedProduct', JSON.stringify(newSaved))
      dispatch(REMOVE_SAVED(newSaved) )
  }


  return (
    <>
      {  savedPopup &&
      <div className={styles.loaderbox} onClick={ () => { dispatch(SET_POPUP({savedPopup:false}) ) }  }   >
      </div>  } 
      

       <div className={`${styles.gen_wrapper} ${ savedPopup ? styles.open : ''}`}>
            <div className={styles.cart_wrapper} >
                <h3> Wishlist </h3>
                <div className={styles.item_wrapper} >
                {  save.length > 0 && 
                   save.map( (product) => (
                        <div className={styles.individual_item_wrapper} key={product.id} >
                            <img src={product.images[0]} alt="cart" />
                            <div className={styles.individual_item_wrapper_div} >
                                <p> Title: {product.title} </p>
                                <p> Price: {`$${product.price}`} </p>
                            </div>
                            <DeleteIcon sx={{color:red[500]}} onClick={ () => { handleDeleteSaved(product) } }  />
                        </div>
                   ) )               
                   }        
                </div>
            </div>
       </div>   
    </>
  )
}