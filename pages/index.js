import Fifthsection from '@/components/Fifthsection'
import Firstsection from '@/components/Firstsection'
import Fourthsection from '@/components/Fourthsection'
import Secondsection from '@/components/Secondsection'
import Thirdsection from '@/components/Thirdsection'
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <div className="mainhomewrapper"> 
         <Firstsection/>
         <div className="mainhomewrapper2" >
            <Secondsection/>
            <Thirdsection/>
            <Fourthsection/>
            <Fifthsection/>
         </div>
      </div>    
    </>
  )
}
