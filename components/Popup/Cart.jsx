import Link from 'next/link';
import styles from '../../styles/Popup/Cart.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import { useSelector, useDispatch } from 'react-redux'
import { SET_POPUP } from '../../redux/reducers/popups'
import { REMOVE_CART, INCREASE_DECREASE_QUANTITY } from '../../redux/reducers/cart'

export default function Cart () {

    const {cartPopup} = useSelector( (state) => state.popups )
    const { cart } = useSelector( (state) => state.cart )
    const dispatch = useDispatch()

    const handleDeleteCart = (prod) => {
        const newCart = cart.filter( (filterProd) => {
            return filterProd.id !== prod.id
        } )
        localStorage.setItem('productCart', JSON.stringify(newCart))
        dispatch(REMOVE_CART(newCart) )
    }

    const handleDecreaseQuantity = (oldCart,id) => {

      const newCart = oldCart.map((item) => {
        if (item.id === id && item.quantity > 1 ) {
          // Create a new object to avoid modifying the original item directly
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      localStorage.setItem('productCart', JSON.stringify(newCart))
      dispatch(INCREASE_DECREASE_QUANTITY(newCart) )
  }

  const handleIncreaseQuantity = (oldCart,id) => {
    const newCart = oldCart.map((item) => {
    if (item.id === id) {
      // Create a new object to avoid modifying the original item directly
      return { ...item, quantity: item.quantity + 1 };
    } else {
      return item;
    }
  });
    localStorage.setItem('productCart', JSON.stringify(newCart))
    dispatch(INCREASE_DECREASE_QUANTITY(newCart) )
}


    const getTotal = (totalCart) => {
      const res = totalCart.reduce( (prev, item) => {
        return prev + (item.price * item.quantity)
      },0)
     return  '$'+ res
    } 

  return (
    <>
      {  cartPopup &&
      <div className={styles.loaderbox} onClick={ () => { dispatch(SET_POPUP({cartPopup:false}) ) }  }   >
      </div>  } 
      

       <div className={`${styles.gen_wrapper} ${ cartPopup ? styles.open : ''}`}>
            <div className={styles.cart_wrapper} >
                <h3> Cart </h3>
                <div className={styles.item_wrapper} >
                   {  cart.length > 0 && 
                   cart.map( (product) => (
                        <div className={styles.individual_item_wrapper} key={product.id} >
                            <img src={ product.images[0]  } alt="cart" />
                            <div className={styles.individual_item_wrapper_div} >
                                <p className={styles.individual_item_wrapper_div_p} > Title: {product.title} </p>
                                <p className={styles.individual_item_wrapper_div_p} > Price: {`$${product.price}`} </p>
                                <div className={styles.quantity_wrapper} >
                                    <p onClick={ () => { handleDecreaseQuantity(cart,product.id) } } > - </p>
                                    <h3> {product.quantity} </h3>
                                    <p onClick={ () => { handleIncreaseQuantity(cart, product.id) } } > + </p>
                                </div>
                            </div>
                            <DeleteIcon sx={{color:red[500]}} onClick={ () => { handleDeleteCart(product) } }  />
                        </div>
                   ) )               
                   }
                </div>
                <p className={styles.total} > TOTAL: {getTotal(cart)} </p>
            </div>
       </div>   
    </>
  )
}