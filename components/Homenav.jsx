import { Expand } from '@mui/icons-material';
import styles from '../styles/Homenav.module.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { green } from '@mui/material/colors';
import { useSelector, useDispatch } from 'react-redux'
import { SET_POPUP } from '../redux/reducers/popups'


export default function Homenav () {

    const {popup1, cartPopup} = useSelector( (state) => state.popups )
    const {cart} = useSelector( (state) => state.cart )
    const {save} = useSelector( (state) => state.save )
    const dispatch = useDispatch()


  return (
    <>
       <div className={styles.home_nav_wrapper} >
           <h3> Bandage </h3>
           <div className={styles.second_wrapper} >
                <ul className={styles.nav_list_wrapper} >
                    <li> Home </li>
                    <li> Shop <ExpandMoreIcon fontSize="small" /> </li>
                    <li> About  </li>
                    <li> Blog  </li>
                    <li> Contact  </li>
                    <li> Pages </li>
                </ul>
                <div  className={styles.nav_right_wrapper} >
                        <div className={styles.signup_wrapper} >
                            <PersonOutlineOutlinedIcon fontSize="small" style={{ color:'#23A6F0' }}  />
                            <div className={styles.login_register_wrapper} >
                                <button> Login </button>
                                <p> {'/'} </p>
                                <button> Register </button>
                            </div>
                        </div>
                        <div className={styles.nav_icon_wrapper} >
                            <SearchIcon fontSize='small' style={{ color:'#23A6F0' }} />
                        </div>
                        <div className={styles.nav_icon_wrapper} >
                            <ShoppingCartOutlinedIcon fontSize='small' style={{ color:'#23A6F0' }} onClick={ () => { dispatch(SET_POPUP({cartPopup:true}) ) }  } />
                            <h6> {cart.length} </h6>
                        </div>
                        <div className={styles.nav_icon_wrapper} >
                            <FavoriteBorderOutlinedIcon fontSize='small' style={{ color:'#23A6F0' }} onClick={ () => { dispatch(SET_POPUP({savedPopup:true}) ) }  } />
                            <h6> {save.length} </h6>
                        </div>
                        <img className={styles.menu} src='/assets/menu.svg' alt="menu" onClick={ () => { dispatch(SET_POPUP({popup1:!popup1}) ) }  } /> 
                </div>
           </div>
       </div>
    </>
  )
}