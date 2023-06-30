import styles from '../styles/Thirdsection.module.css';
import { tableData1 } from './dummyData';


export default function Thirdsection () {
  
  return (
    <>
      <div className={styles.thirdsectionwrapper} >
          <div className={styles.titlewrapper}  >
             <h2> Form Title </h2>
             <p> Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim. </p>
          </div>
          <div className={styles.commentwrapper}  >
              <img src="/assets/infocircle.svg" alt="" />
              <p> Senectus malesuada suspendisse bibendum elit amet vitae. </p>
          </div>
          <table className={styles.tablewrapper} >
               <thead>
                   <tr>
                       <th> Table Title </th>
                       <th> Table Title </th>
                       <th> Table Title </th>
                       <th> Table Title </th>
                   </tr>
               </thead>

               <tbody>
                   { tableData1.map( (data, index) => (
                            <tr key={index} >
                                <td> {data.title1} </td>
                                <td> {data.title2} </td>
                                <td> {data.title3} </td>
                                <td> 
                                    <div className={styles.editbuttonwrapper} >
                                        <img src="/assets/save.svg" alt="" />
                                        <span> Edit </span>
                                    </div>
                                    <div className={styles.deletebuttonwrapper} >
                                        <img src="/assets/save.svg" alt="" />
                                        <span> Delete </span>
                                    </div>
                                </td>
                            </tr>
                   ) ) }
                 
               </tbody>
          </table>
          <div className={styles.paginationwrapper} >
              <img src="/assets/expleftdouble.svg" alt="" />
              <ul>
                 <li className='w-[30px] h-[30px] cursor-pointer border border-solid border-1 border-gray-300 rounded-[2px] text-center items-center bg-white' > 1 </li>
                 <li className='w-[30px] h-[30px] cursor-pointer border border-solid border-1 border-gray-300 rounded-[2px] text-center items-center bg-white' > 2 </li>
                 <li className='w-[30px] h-[30px] cursor-pointer border border-solid border-1 border-gray-300 rounded-[2px] text-center items-center text-white bg-[#2563EB]' > 3 </li>
                 <li className='w-[30px] h-[30px] cursor-pointer border border-solid border-1 border-gray-300 rounded-[2px] text-center items-center bg-white' > 4 </li>
                 <li className='w-[30px] h-[30px] cursor-pointer border border-solid border-1 border-gray-300 rounded-[2px] text-center items-center bg-white' > 5 </li>
              </ul>
              <img src="/assets/exprightdouble.svg" alt="" />
          </div>
      </div>
    </>
  )
}