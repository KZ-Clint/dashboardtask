import Link from 'next/link';
import styles from '../../styles/Productitem/Header.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect, useState} from 'react'


export default function Header () {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {  
    const handleScroll = () => {
       const scrollTop = window.scrollY;
      const screenWidth = window.innerWidth;
      setIsMobile(  screenWidth < 600  ); 
    }
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };    }, []);

  return (
    <>
      <div className={styles.headerwrapper} >
           <div>
               <Link className={styles.link} href={'/'} > Home </Link>
              { isMobile ?  <ChevronRightIcon fontSize="small" /> : <ChevronRightIcon fontSize="large" />   }           
               <h6> Shop </h6>
           </div>
      </div>
    </>
  )
}