import styles from '../styles/Fifthsection.module.css';


export default function Fifthsection () {
  
  return (
    <>
   <div className='flex flex-row gap-[20px] w-[100%]' >

           <div className={styles.fifthsection1wrapper} >
                <div className={styles.titlewrapper}  >
                    <h2> Form Title </h2>
                    <p> Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim. </p>
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

           <div className={styles.fifthsection2wrapper} >
                <div className={styles.titlewrapper}  >
                    <h2> Form Title </h2>
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
                </div>
                <div className={styles.textareawrapper} >
                    <label htmlFor="textarea" > Label title </label>
                    <textarea name="title4" id="textarea" placeholder='Placeholder content' />
                </div>
                <button className='px-[20px] py-[10px] align-center text-center w-[100%] bg-[#2563EB] text-white border-none rounded-[5px] ' > Submit </button>
           </div>
           
      </div>
    </>
  )
}