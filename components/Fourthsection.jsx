import styles from '../styles/Fourthsection.module.css';


export default function Fourthsection () {
  
  return (
    <>
      <div className={styles.fourthsectionwrapper} >
          <div className={styles.titlewrapper}  >
             <h2> Form Title </h2>
             <p> Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim. </p>
          </div>
          <div className={styles.countryselect} >
              <div className={styles.countryselected} >
                  <img src="/assets/english.svg" alt="" />
                  <p> English </p>
              </div>
              <div className={styles.countrynotselected} >
                  <img src="/assets/turkish.svg" alt="" />
                  <p> Turkish </p>
              </div>
          </div>
          <div className={styles.title1wrapper} >
              <label htmlFor="title1" > Label title </label>
              <input type="text" name="title1" id="title1" placeholder='Placeholder content' />
          </div>
          <div className={styles.secondtitlewrapper} >
              <div>
                 <label htmlFor="cars">Label title</label>
                 <select name="cars" id="cars">
                     <option value="default"> Choose </option>
                 </select>                    
              </div>
              <div>
                 <label htmlFor="title2" > Label title </label>
                 <input type="text" name="title2" id="title2" placeholder='Placeholder content' />
              </div>
              <div>
                 <label htmlFor="title3" > Label title </label>
                 <input type="text" name="title3" id="title3" placeholder='Placeholder content' />
              </div>
          </div>
          <div className={styles.thirdtitlewrapper} >
              <div>
                 <label htmlFor="title2" > Label title </label>
                 <input type="text" name="title2" id="title2" placeholder='Placeholder content' />
              </div>
              <div>
                 <label htmlFor="title3" > Label title </label>
                 <input type="text" name="title3" id="title3" placeholder='Placeholder content' />
              </div>
          </div>
          <div className={styles.textareawrapper} >
              <label htmlFor="textarea" > Label title </label>
              <textarea name="title4" id="textarea" placeholder='Placeholder content' />
          </div>
      </div>
    </>
  )
}