import styles from '../../styles/Productitem/Brandsection.module.css';


export default function Brandsection () {


  return (
    <>
      <div className={styles.brand_wrapper} >
           <div>
              <img src='/assets/fa-brands-1.png' alt="brand1" />
              <img src='/assets/fa-brands-2.png' alt="brand1" />  
              <img src='/assets/fa-brands-3.png' alt="brand1" /> 
              <img src='/assets/fa-brands-4.png' alt="brand1" /> 
              <img src='/assets/fa-brands-5.png' alt="brand1" /> 
              <img src='/assets/fa-brands-6.png' alt="brand1" /> 
           </div>
      </div>
    </>
  )
}