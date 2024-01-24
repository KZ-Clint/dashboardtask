import styles from '../../styles/Productitem/Firstsection.module.css';
import Rating  from '@mui/material/Rating';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useSelector, useDispatch } from 'react-redux'
import { ADD_CART } from '../../redux/reducers/cart'
import { SAVE_PROD } from '../../redux/reducers/save'

export default function Firstsection ({product, imgIndex, setImgIndex }) {

    const { cart } = useSelector( (state) => state.cart )
    const { save } = useSelector( (state) => state.save )
    const dispatch = useDispatch()

    const handleAddCart = (prod) => {
        if(cart.some( (existingProd) => existingProd.id === prod.id )){
            console.log("the same")
            return alert(`${prod.title} has already been added to your Cart`)
        }
        localStorage.setItem('productCart', JSON.stringify([ ...cart, { ...prod, quantity:1 }]))
        dispatch(ADD_CART({...prod, quantity:1}) )
        alert(`${prod.title} has been added to your cart`)
    }

    const handleSaveProduct = (prod) => {
        if(save.some( (existingProd) => existingProd.id == prod.id )){
            return alert(`${prod.title} has already been added to your Wishlist`)
        }
        localStorage.setItem('savedProduct', JSON.stringify([ ...save, prod]))
        dispatch(SAVE_PROD(prod) )
        alert(`${prod.title} has been added to your Wishlist`)
    }



  return (
    <>
     { Object.keys(product).length > 0 && 
      <div className={styles.firstsectionwrapper} >
           <div className={styles.gen_wrapper} >
               <div className={styles.left_side_wrapper} >
                  <div className={styles.main_img_wrapper} >
                     <img className={styles.chevronleft} src='/assets/ChevronLeft.svg' alt="chevronleft" 
                      onClick={ () => { imgIndex > 0 ? setImgIndex(imgIndex-1) : setImgIndex(product.images.length - 1) } } /> 
                     <img className={styles.main_img} src={ product.images.length > 0 ? product.images[imgIndex] : '' } alt={product.title} /> 
                     <img className={styles.chevronright} src='/assets/ChevronRight.svg' alt="chevronRight"
                      onClick={ () => { imgIndex <= (product.images.length - 2) ? setImgIndex(imgIndex+1) : setImgIndex(0) } } /> 
                  </div>
                  <div className={styles.bottom_img_wrapper} > 
                  { product.images.length > 0 && product.images.map( (img, index) => (
                      index !== imgIndex &&  <img key={index} src={img} alt={product.title} />
                  ) )
                  }                      
                  </div>
               </div>
               <div className={styles.right_side_wrapper} >
                   <div className={styles.top_detail_wrapper} >
                        <div className={styles.detail_text_wrapper} >
                            <h4> {product.title} </h4>
                            <Rating name="half-rating-read" size="medium" defaultValue={product.rating} precision={0.5} readOnly />
                        </div>
                        <div className={styles.availability_text_wrapper}  >
                            <h3> ${product.price.toLocaleString()}</h3>
                            <div>
                                <h5> Availability:</h5>
                                <h6> { product.stock > 0 ? "In Stock" : "Out of Stock" }  </h6>
                            </div>
                        </div>
                   </div>
                   <div className={styles.mid_detail_wrapper}  >
                        <div className={styles.circle_wrapper}  >
                            <div className={styles.blue_circle} ></div>
                            <div className={styles.green_circle} ></div>
                            <div className={styles.orange_circle} ></div>
                            <div className={styles.black_circle} ></div>
                        </div>
                        <div className={styles.bottom_detail_wrapper} >
                            <button> Select Options </button>
                            <div onClick={ () => { handleSaveProduct(product) } } >
                               <FavoriteBorderOutlinedIcon fontSize='small'  />
                            </div>
                            <div onClick={ () => { handleAddCart(product) } } >
                               <ShoppingCartOutlinedIcon fontSize='small'  />
                            </div>
                            <div>
                               <VisibilityIcon fontSize='small' />
                            </div>
                        </div>
                   </div>
               </div>
           </div>
      </div>  }
    </>
  )
}