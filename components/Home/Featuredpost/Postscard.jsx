import styles from '../../../styles/Postcard.module.css';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';

export default function Postcard ({src}) {


  return (
    <>
            <div className={styles.post_item_wrapper} >
                  <p className={styles.new} > NEW </p>
                  <img className={styles.post_img} src={src} alt="post_card" /> 
                  <div className={styles.footer_wrapper} >
                      <ul className={styles.footer_list}  >
                          <li> Google </li>
                          <li> Trending </li>
                          <li> New </li>
                      </ul>
                      <h3> Loudest a la Madison #1 L&#39;integral </h3>
                      <p className={styles.footertext} > We focus on ergonomics and meeting you where you work. It&#39;s only a keystroke away. </p>
                      <div className={styles.footer_bottom} >
                          <div>
                               <AccessAlarmOutlinedIcon fontSize="small" style={{ color:'#23A6F0' }} />
                              <p> 22 April 2021 </p>
                          </div>
                          <div>
                              <img src='/assets/chart.svg' alt="chart" /> 
                              <p> 10 Comments </p>
                          </div>
                      </div>
                  </div>
                  <Link href={'/'} className={styles.learn_more} > Learn more <ChevronRightIcon/>  </Link>
            </div>
    </>
  )
}
