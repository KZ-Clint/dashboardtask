import styles from '../styles/Footer.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';


export default function Footer () {


  return (
    <>
      <div className={styles.footer_wrapper} >
          <div className={styles.top_section_wrapper} >
              <h3> Bandage </h3>
              <div>
                 <InstagramIcon color='primary' fontSize="small" />
                 <FacebookRoundedIcon color='primary' fontSize="small" />
                 <TwitterIcon color='primary' fontSize="small" />
              </div>
          </div>
          <div className={styles.mid_section_wrapper} >
              <div className={styles.mid_section_wrapper_div} >
                  <h4> Company Info </h4>
                  <ul>
                     <li> About Us </li>
                     <li> Career </li>
                     <li> We are hiring</li>
                     <li> Blog </li>
                  </ul>
              </div>
              <div className={styles.mid_section_wrapper_div} >
                  <h4> Legal </h4>
                  <ul>
                     <li> About Us </li>
                     <li> Career </li>
                     <li> We are hiring</li>
                     <li> Blog </li>
                  </ul>
              </div>
              <div className={styles.mid_section_wrapper_div} >
                  <h4> Features </h4>
                  <ul>
                     <li> Business Marketing </li>
                     <li> User Analytic </li>
                     <li> Live Chat </li>
                     <li> Unlimited Support </li>
                  </ul>
              </div>
              <div className={styles.mid_section_wrapper_div} >
                  <h4> Resources </h4>
                  <ul>
                     <li> IOS $ Android </li>
                     <li> Watch a Demo </li>
                     <li> Customers </li>
                     <li> API </li>
                  </ul>
              </div>
              <div className={styles.mid_section_wrapper_div} >
                  <h4>  Get In  Touch </h4>
                  <div className={styles.subscribe_wrapper} >
                        <div>
                            <input type="email" placeholder='Your Email' />
                            <button> Subscribe </button>
                        </div>
                        <p> Lore imp sum dolor Amit </p>
                  </div>
              </div>
          </div>
          <p className={styles.footer_caption} > Made With Love By Finland All Right Reserved  </p>
      </div>
    </>
  )
}