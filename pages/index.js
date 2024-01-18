import Firstsection from '@/components/Firstsection'
import Secondsection from '@/components/Secondsection'
import Thirdsection from '@/components/Thirdsection'
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title> Darkforestares </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mainhomewrapper"> 
         <Firstsection/>
         <Secondsection/>
         <Thirdsection/>
      </div>    
    </>
  )
}
