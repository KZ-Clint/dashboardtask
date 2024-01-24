import '../app/globals.css';
import { useEffect } from 'react';
import { Context } from './Context';
import Homenav from './Homenav';
import { useSelector, useDispatch} from 'react-redux'
import { SET_POPUP } from '../redux/reducers/popups'
import { ADD_INITIAL_CART } from '../redux/reducers/cart'
import { SAVE_INITIAL_PROD } from '../redux/reducers/save'

export default function Layout ({children}) {

  const {popup1, cartPopup, savedPopup} = useSelector( (state) => state.popups )
  const dispatch = useDispatch()

  useEffect( () => {
    if(JSON.parse(localStorage.getItem('productCart'))){
      console.log(JSON.parse(localStorage.getItem('productCart')))
      dispatch(ADD_INITIAL_CART(JSON.parse(localStorage.getItem('productCart'))) )
    }
    if(JSON.parse(localStorage.getItem('savedProduct'))){
      dispatch(SAVE_INITIAL_PROD(JSON.parse(localStorage.getItem('savedProduct'))) )
    }
    
 },[] )

  return (
    <>
    <div className={`mainwrapper${(popup1 || cartPopup || savedPopup) ? "hidden" : ''}`} >
       <Homenav/>
       {children}
    </div>
    </>
  )
}