import styles from '../styles/Secondsection.module.css';


export default function Secondsection () {

  return (
    <>
      <div className={styles.secondsectionwrapper} >
           <div className={styles.kite1} ></div>
           <div className={styles.kite2} ></div>
           <div className={styles.kite3} ></div>
           <div className={styles.partnershipwrapper} >
               <h3> Patnership </h3>
               <div className={styles.lineseeall_wrapper} >
                    <div className={styles.line} ></div>
                    <div className={styles.seeallwrapper} >
                        <p> See all </p>
                        <div className={styles.rightwrapper}>
                            <p className={styles.greaterthan}  > {'>'} </p>
                        </div>
                    </div>
               </div>     
           </div>
           <div className={styles.communitygen_wrapper} >
                <div className={styles.communitywrapper} >
                    <p class="text-black font-[Montserrat] font-medium italic text-[20px] leading-35"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae. </p>
                    <div className={styles.footerwrapper} >
                        <div className={styles.circle} ></div>
                        <div className={styles.footertext_wrapper} >
                            <h2> BLOCKPI </h2>
                            <p> Community </p>
                        </div>
                    </div>
                </div>
                <div className={styles.communitywrapper} >
                    <p class="text-black font-[Montserrat] font-medium italic text-[20px] leading-35"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae. </p>
                    <div className={styles.footerwrapper} >
                        <div className={styles.circle} ></div>
                        <div className={styles.footertext_wrapper} >
                            <h2> NJUBA </h2>
                            <p> Community </p>
                        </div>
                    </div>
                </div>
                <div className={styles.communitywrapper} >
                    <p class="text-black font-[Montserrat] font-medium italic text-[20px] leading-35"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae. </p>
                    <div className={styles.footerwrapper} >
                        <div className={styles.circle} ></div>
                        <div className={styles.footertext_wrapper} >
                            <h2> THUBA </h2>
                            <p> Community </p>
                        </div>
                    </div>
                </div>
           </div>
      </div>
    </>
  )
}