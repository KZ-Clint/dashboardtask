import styles from '../styles/Enterroundpopup.module.css';
import {  useContext } from 'react'
import { Context } from './Context';


export default function Enterroundpopup () {

    const { roundPopup, setRoundPopup, roundData, setRoundData   } = useContext(Context)
    const { user_name, email } = roundData

    const handleChangeInput = (e) => {
        const {name, value} = e.target
        setRoundData({...roundData, [name] : value }) 
    }

  return (
    <>
   
     <>
     {  roundPopup &&  <div className={styles.popup_background} onClick={ () => { setRoundPopup(false) } } > 
      </div>  }
      <div className={`${styles.popup_wrapper} ${ roundPopup ? styles.open : '' } `  }>
          <form className={styles.popupform} >
             <input type='text' name='user_name' value={user_name} placeholder='Username...' onChange={handleChangeInput}  />
             <input type='email' name='email' value={email} placeholder='Email...' onChange={handleChangeInput}  />
             <button> Enter </button>
          </form>
      </div> 
      </>
    </>
  )
}