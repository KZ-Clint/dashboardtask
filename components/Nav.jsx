import styles from '../styles/Nav.module.css';


export default function Nav () {

  return (
    <>
      <nav className={styles.navmainwrapper} >
         <ul className="flex flex-row justify-start items-center gap-[25px]" >
            <li > 
                <img src="/assets/home.svg" alt="" />
                <span > Home </span>
            </li>
            <li > 
                <img src="/assets/contentlist.svg" alt="" />
                <span > Contents </span>
            </li>
            <li> 
                <img src="/assets/list.svg" alt="" />
                <span> Categories </span>
            </li>
            <li> 
                <img src="/assets/cog.svg" alt="" />
                <span> Settings </span>
            </li>
         </ul>
         <div className="flex flex-row p-2 items-center gap-[5px] rounded-[36px] bg-white" >
            <img className='w-[30px] h-[30px] object-cover rounded-full' src="/assets/advocate1.jpg" alt="" />
            <p className='text-black text-[14px] font-poppins font-normal leading-normal' > Ismail ihsan Bulbul </p>
         </div>
      </nav>
    </>
  )
}