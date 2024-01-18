import styles from '../styles/Firstsection.module.css';
import Link from 'next/link'
import { useContext } from 'react';
import { Context } from './Context';

export default function Firstsection () {

  const { setRoundPopup  } = useContext(Context)

  return (
    <>
      <div className={styles.firstsectionwrapper} >
           <div className={styles.navwrapper} >
                <img className={styles.dflogo} src='/assets/dfsmalllogo.png' alt='darkforestares' />
                <ul className={styles.listmenu} >
                   <li class="text-white font-[GraphikMedium] text-sm sm:text-[14px] lg:text-[16px]" > EMAIL </li>
                   <li class="text-white font-[GraphikMedium] text-sm sm:text-[14px] lg:text-[16px]" > WIKI </li>
                   <li class="text-white font-[GraphikMedium] text-sm sm:text-[14px] lg:text-[16px]" > BLOG </li>
                   <li class="text-white font-[GraphikMedium] text-sm sm:text-[14px] lg:text-[16px]" > PLUGIN </li>
                </ul>
           </div>
           <div className={styles.dfintrowrapper} >
                <div className={styles.introdesc_wrapper} >
                    <div className={styles.dfareswrapper} >
                        <h1> DF ARES </h1>
                        <div className={styles.line} ></div>
                        <h3> Dark Forest Community Rounds with Novel Game Mechanics </h3>
                    </div>
                    <div className={styles.buttonlinkwrapper} >
                        <button onClick={ () => { setRoundPopup(true) } } > ENTER ROUND 1 </button>
                        <Link className={styles.link} href={`/learn_more`} > LEARN MORE </Link>
                    </div>
                </div>
                <img className={styles.dfbiglogo} src='/assets/dfbiglogo.png' alt='darkforestaresbig' />
           </div>
      </div>
    </>
  )
}