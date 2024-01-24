import styles from '../../styles/Bestservices.module.css';

export default function Bestservices () {


  return (
    <>
      <div className={styles.bestserviceswrapper} >
           <div className={styles.header_wrapper} >
               <h4> Featured Products </h4>
               <h3> THE BEST SERVICES </h3>
               <h5> Problems trying to resolve the conflict between  </h5>
           </div>
           <div className={styles.service_item_wrapper} >
               <div>
                  <img src='/assets/bookreader.png' alt="easy_wins" /> 
                  <h3> Easy Wins </h3>
                  <p> Get your best looking smile now! </p>
               </div>
               <div>
                  <img src='/assets/carbon_book.png' alt="concrete" /> 
                  <h3> Concrete </h3>
                  <p> Defalcate is most focused in helping you discover your most beautiful smile </p>
               </div>
               <div>
                  <img src='/assets/growthhack.svg' alt="hack_growth" /> 
                  <h3> Hack Growth </h3>
                  <p> Overcame any hurdle or any other problem. </p>
               </div>
           </div>
      </div>
    </>
  )
}