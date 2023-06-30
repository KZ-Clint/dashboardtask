import styles from '../styles/Secondsection.module.css';


export default function Secondsection () {

  return (
    <>
      <div className={styles.secondsectionwrapper} >
          <div className='flex items-center gap-[5px] p-[20px] w-[100%] bg-white rounded-[10px]' >
             <img src="/assets/shoppingbag.svg" alt="" />
             <div>
                <p className="text-[#262626] text-[12px] font-[Poppins] font-[300] leading-normal" > Total Sales </p>
                <p className="text-[#262626] text-[22px] font-[Poppins] font-[600] leading-normal" > $2,456 </p>
             </div>
          </div>
          <div className='flex items-center gap-[4px] p-[20px] w-[100%] bg-white rounded-[10px]'>
             <img src="/assets/shop.svg" alt="" />
             <div>
                <p className="text-[#262626] text-[12px] font-[Poppins] font-[300] leading-normal" > Total Expenses </p>
                <p className="text-[#262626] text-[22px] font-[Poppins] font-[600] leading-normal" > $3,326 </p>
             </div>
          </div>
          <div className='flex items-center gap-[4px] p-[20px] w-[100%] bg-white rounded-[10px]'>
             <img src="/assets/people.svg" alt="" />
             <div>
                <p className="text-[#262626] text-[12px] font-[Poppins] font-[300] leading-normal" > Total Visitors </p>
                <p className="text-[#262626] text-[22px] font-[Poppins] font-[600] leading-normal" > $5,325 </p>
             </div>
          </div>
          <div className='flex items-center gap-[4px] p-[20px] w-[100%] bg-white rounded-[10px]'>
             <img src="/assets/listpurple.svg" alt="" />
             <div>
                <p className="text-[#262626] text-[12px] font-[Poppins] font-[300] leading-normal" > Total Order </p>
                <p className="text-[#262626] text-[22px] font-[Poppins] font-[600] leading-normal" > $1,326 </p>
             </div>
          </div>
      </div>
    </>
  )
}