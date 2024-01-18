import '../app/globals.css';
import { useContext } from 'react';
import { Context } from './Context';


export default function Layout ({children}) {

  const { roundPopup, setRoundPopup   } = useContext(Context)

  return (
    <>
    <div className={`mainwrapper${roundPopup ? "hidden" : ''}`} >
       {children}
    </div>
    </>
  )
}