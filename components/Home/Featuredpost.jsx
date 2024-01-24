import Link from 'next/link';
import styles from '../../styles/Featuredpost.module.css';
import Postcard from './Featuredpost/Postscard';

export default function Featuredpost () {


  return (
    <>
      <div className={styles.featuredpostwrapper} >
           <div className={styles.header_wrapper} >
               <h6> Practice Advice </h6>
               <h3> Featured Posts </h3>    
           </div>
           <div className={styles.post_card_wrapper} >
              <Postcard src={'/assets/firstpostcard.png'} />
              <Postcard src={'/assets/secondpostcard.png'} />
              <Postcard src={'/assets/thirdpostcard.png'} />
           </div>
      </div>
    </>
  )
}