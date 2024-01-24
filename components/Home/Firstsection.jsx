import styles from '../../styles/Firstsection.module.css';

export default function Firstsection () {


  return (
    <>
      <div className={styles.firstsectionwrapper} >
          <div className={styles.images_wrapper} >
                <div className={styles.firstimg_wrapper} >
                    <div>
                        <p> 5 Items </p>
                        <h6> Furniture </h6>
                        <span> Read more </span>                  
                    </div>
                    <img src='/assets/card-cover-5.jpg' alt="furniture1" /> 
                </div>
                <div className={styles.right_col_wrapper} >
                    <div className={styles.secimg_wrapper} >
                        <div>
                            <p> 5 Items </p>
                            <h6> Furniture </h6>
                            <span> Read more </span>                  
                        </div>
                        <img src='/assets/card-cover-6.jpg' alt="furniture2" /> 
                    </div>
                    <div className={styles.right_bottom_col_wrapper} >
                        <div className={styles.thirdimg_wrapper} >
                            <div>
                                <p> 5 Items </p>
                                <h6> Furniture </h6>
                                <span> Read more </span>                  
                            </div>
                            <img src='/assets/card-cover-61.jpg' alt="furniture3" /> 
                        </div>
                        <div className={styles.fourthimg_wrapper} >
                            <div>
                                <p> 5 Items </p>
                                <h6> Furniture </h6>
                                <span> Read more </span>                  
                            </div>
                            <img src='/assets/card-cover-61.jpg' alt="furniture3" />
                        </div>
                    </div>
                </div>
          </div>

      </div>
    </>
  )
}