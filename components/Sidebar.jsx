import styles from '../styles/Sidebar.module.css';


export default function Sidebar () {

  return (
    <>
      <div className={styles.sidebarwrapper} >
            <div className='flex items-center px-[30px] py-[15px] self-stretch w-[100%]' >
                <div className='flex items-start gap-[5px] flex-row p-[10px] rounded-[5px] self-stretch w-[100%] bg-[#E5E5E5] cursor-pointer' >
                    <img src="/assets/plus.svg" alt="" />
                    <p className='text-black text-[18px] font-poppins font-normal leading-normal' > New Item </p>
                </div>
            </div>
             <div className='flex items-center justify-between px-[30px] py-[15px] self-stretch w-[100%]' >
                 <div className='flex items-center gap-[5px] cursor-pointer ' >
                    <img src="/assets/darhboard.svg" alt="" />
                    <p className='text-white text-[16px] font-poppins font-normal leading-normal' > Dashboard </p>
                 </div>
                 <img src="/assets/expandup.svg" alt="" />
             </div>
             <ul className='flex items-start gap-[10px] flex-col justify-between px-[50px] py-[15px] self-stretch w-[100%]'  >
                <li> Commerce </li>
                <li> Analytics </li>
                <li> Crypto </li>
                <li> Helpdesk </li>
                <li> Monitoring </li>
                <li> Fitness </li>
             </ul>
          <div className='flex items-center justify-between px-[30px] py-[15px] self-stretch w-[100%]' >
             <div className='flex items-center gap-[5px] cursor-pointer' >
                <img src="/assets/darhboard.svg" alt="" />
                <p className='text-white text-[16px] font-poppins font-normal leading-normal' > Application </p>
             </div>
             <img src="/assets/expanddown.svg" alt="" />
          </div>
          <div className='flex items-center justify-between px-[30px] py-[15px] self-stretch w-[100%]'  >
             <div className='flex items-center gap-[5px] cursor-pointer' >
                <img src="/assets/darhboard.svg" alt="" />
                <p className='text-white text-[16px] font-poppins font-normal leading-normal' > Elements</p>
             </div>
             <img src="/assets/expanddown.svg" alt="" />
          </div>
          <div className='flex items-center justify-between px-[30px] py-[15px] self-stretch w-[100%]'  >
             <div className='flex items-center gap-[5px] cursor-pointer' >
                <img src="/assets/darhboard.svg" alt="" />
                <p className='text-white text-[16px] font-poppins font-normal leading-normal' > Forms </p>
             </div>
             <img src="/assets/expanddown.svg" alt="" />
          </div>
          <div className='flex items-center justify-between px-[30px] py-[15px] self-stretch w-[100%]'  >
             <div className='flex items-center gap-[5px] cursor-pointer' >
                <img src="/assets/darhboard.svg" alt="" />
                <p className='text-white text-[16px] font-poppins font-normal leading-normal' > Plugins </p>
             </div>
             <img src="/assets/expanddown.svg" alt="" />
          </div>
          <div className='flex items-center justify-between px-[30px] py-[15px] self-stretch w-[100%]'  >
             <div className='flex items-center gap-[5px] cursor-pointer' >
                <img src="/assets/darhboard.svg" alt="" />
                <p className='text-white text-[16px] font-poppins font-normal leading-normal' > Elements </p>
             </div>
             <img src="/assets/expanddown.svg" alt="" />
          </div>
          <div className='flex items-center justify-between px-[30px] py-[15px] self-stretch w-[100%]'  >
             <div className='flex items-center gap-[5px] cursor-pointer' >
                <img src="/assets/darhboard.svg" alt="" />
                <p className='text-white text-[16px] font-poppins font-normal leading-normal' > Datagrid </p>
             </div>
             <img src="/assets/expanddown.svg" alt="" />
          </div>
          <div className='flex items-center justify-between px-[30px] py-[15px] self-stretch w-[100%]'  >
             <div className='flex items-center gap-[5px] cursor-pointer' >
                <img src="/assets/darhboard.svg" alt="" />
                <p className='text-white text-[16px] font-poppins font-normal leading-normal' > Settings </p>
             </div>
             <img src="/assets/expanddown.svg" alt="" />
          </div>
      </div>
    </>
  )
}