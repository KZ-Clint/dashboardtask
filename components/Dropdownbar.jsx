import Link from 'next/link';
import styles from '../styles/Dropdownbar.module.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useSelector, useDispatch } from 'react-redux'
import { SET_POPUP } from '../redux/reducers/popups'


export default function Dropdownbar () {

    const {popup1} = useSelector( (state) => state.popups )
    const dispatch = useDispatch()


  return (
    <>
      {  popup1 &&
      <div className={styles.loaderbox} onClick={ () => { dispatch(SET_POPUP({popup1:false}) ) }  }   >
      </div>  } 
      

       <div className={`${styles.gen_wrapper} ${ popup1 ? styles.open : ''}`}>
          <ul className={styles.gen_wrapper_ul} >
              <li>
                <Link className={styles.item_link} href={'/'} > Home </Link>
              </li>    
              <li>
                <Link className={styles.item_link} href={'/'} > Shop </Link>
              </li>   
              <li>
                <Link className={styles.item_link} href={'/'} > About </Link>
              </li>     
              <li>
                <Link className={styles.item_link} href={'/'} > Blog </Link>
              </li>   
              <li>
                <Link className={styles.item_link} href={'/'} > Contact </Link>
              </li>     
              <li>
                <Link className={styles.item_link} href={'/'} > Pages </Link>
              </li>    
          </ul> 
          <div className={styles.signup_wrapper} >
              <PersonOutlineOutlinedIcon fontSize="large" style={{ color:'#23A6F0' }}  />
              <div className={styles.login_register_wrapper} >
                <button> Login </button>
                <p> {'/'} </p>
                <button> Register </button>
              </div>
          </div>
       </div>   
    </>
  )
}