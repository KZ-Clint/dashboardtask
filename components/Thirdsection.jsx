import styles from '../styles/Thirdsection.module.css';


export default function Thirdsection () {
  

  return (
    <>
      <div className={styles.thirdsectionwrapper} >
          <h1> Powered by DF Archon </h1>
          <div className={styles.footerwrapper} >
             <div className={styles.footermenuwrapper} >
                  <ul>
                      <li> Products </li>
                      <li> Products </li>
                      <li> Products </li>
                  </ul>
                  <ul>
                      <li> About </li>
                      <li> About </li>
                      <li> About </li>
                  </ul>
                  <ul>
                      <li> Catalog </li>
                      <li> Catalog </li>
                      <li> Catalog </li>
                      <li> Catalog </li>
                  </ul>
              </div>
              <div className={styles.socialswrapper} >
                 <p> Social Contacts </p>
                 <div className={styles.social} >
                    <p> Discord </p>
                    <div></div>
                 </div>
                 <div className={styles.social} >
                    <p> Github </p>
                    <div></div>
                 </div>
                 <div className={styles.social} >
                    <p> Twitter </p>
                    <div></div>
                 </div>
              </div>
          </div>
      </div>
    </>
  )
}