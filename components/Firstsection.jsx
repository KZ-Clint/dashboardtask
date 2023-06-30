import styles from '../styles/Firstsection.module.css';


export default function Firstsection () {

  return (
    <>
      <div className={styles.firstsectionwrapper} >
          <ul className="flex flex-row justify-start items-center gap-[30px]" >
             <li className="text-black text-[22px] font-[Poppins] font-[600] leading-normal cursor-pointer" > Add new post </li>
             <li className='flex items-center gap-[4px] cursor-pointer ' > 
                <img src="/assets/plus.svg" alt="" />
                <span className="text-black text-[16px] font-[Poppins] font-normal leading-normal" > Add Content </span>
             </li>
             <li className='flex items-center gap-[4px] cursor-pointer' > 
                <img src="/assets/cogblack.svg" alt="" />
                <span className="text-black text-[16px] font-[Poppins] font-normal leading-normal" > Settings </span>
             </li>
          </ul>
          <div className='flex items-center w-[350px] relative rounded-[5px] border border-solid border-1 border-gray-300 ' >
             <input className='text-left border-none items-center w-[100%] px-[20px] py-[10px]'  type="text" name="search" placeholder='Search content...' />
             <img className='absolute right-[20px] top-1/2 transform -translate-y-1/2' src="/assets/search.svg" alt="" />
          </div>
      </div>
    </>
  )
}