import styles from '../styles/Nav.module.css';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { green } from '@mui/material/colors';

export default function Nav () {

  return (
    <>
      <nav className={styles.nav_main_wrapper} >
           <div className={styles.phone_mail_wrapper} >
               <div className={styles.phone_wrapper}  >
                   {/* <PhoneOutlinedIcon sx={{ color: green[500] }} /> */}
                   <PhoneOutlinedIcon style={{ color:'white' }} fontSize="small" />
                   <h6> {'(225) 555-0118'} </h6>
               </div>
               <div className={styles.mail_wrapper}  >
                   <MailOutlineIcon style={{ color:'white' }} fontSize="small" />
                   <h6> michelle.rivera@example.com </h6>
               </div>
           </div>
           <h6 className={styles.followus_text} > Follow Us  and get a chance to win 80% off </h6>
           <div className={styles.followus_wrapper} >
               <h6> Follow Us : </h6>
               <ul>
                  <li>
                      <InstagramIcon style={{ color:'white' }} fontSize="small" />
                  </li>
                  <li>
                      <YouTubeIcon style={{ color:'white' }} fontSize="small" />
                  </li>
                  <li>
                      <FacebookRoundedIcon style={{ color:'white' }} fontSize="small" />
                  </li>
                  <li>
                      <TwitterIcon style={{ color:'white' }} fontSize="small" />
                  </li>
               </ul>
           </div>
      </nav>
    </>
  )
}