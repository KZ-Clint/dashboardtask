import styles from '../../styles/Whattheysay.module.css';
import Rating  from '@mui/material/Rating';

export default function Whattheysay () {


  return (
    <>
      <div className={styles.what_they_say_wrapper} >
           <div className={styles.left_side_wrapper} >
               <h3> What they say about us </h3>
               <div className={styles.img_detail_wrapper} >
                  <img src='/assets/ladyaboutus.png' alt="lady" /> 
                  <Rating name="half-rating-read" size="medium" defaultValue={4} precision={0.5} readOnly />
                  <p> Slate helps you see how many more days you need to work to reach your financial goal. </p>
                  <div>
                      <h5> Regina Miles </h5>
                      <h6> Designer </h6>
                  </div>
               </div> 
           </div> 
           <div className={styles.img_grid} >
              <img src='/assets/unsplash1.png' alt="lady" /> 
              <img src='/assets/unsplash2.png' alt="lady" /> 
              <img src='/assets/unsplash3.png' alt="lady" /> 
              <img src='/assets/unsplash4.png' alt="lady" /> 
              <img src='/assets/unsplash5.png' alt="lady" /> 
              <img src='/assets/unsplash6.png' alt="lady" /> 
              <img src='/assets/unsplash7.png' alt="lady" /> 
              <img src='/assets/unsplash8.png' alt="lady" /> 
              <img src='/assets/unsplash9.png' alt="lady" /> 
           </div>
      </div>
    </>
  )
}
