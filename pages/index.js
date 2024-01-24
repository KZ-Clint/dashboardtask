import Head from 'next/head'
import { useEffect } from 'react';
import Firstsection from '@/components/Home/Firstsection'
import Featproducts from '@/components/Home/Featproducts'
import Bestservices from '@/components/Home/Bestservices'
import Featuredpost from '@/components/Home/Featuredpost'
import Whattheysay from '@/components/Home/Whattheysay'
import Seventhsection from '@/components/Home/Seventhsection'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { SET_POPUP } from '@/redux/reducers/popups'

export default function Home({prod}) {

  const {popup1, cartPopup, savedPopup} = useSelector( (state) => state.popups )
  const dispatch = useDispatch()

  console.log(prod)
  useEffect( () => {
    dispatch(SET_POPUP({cartPopup:false, popup1:false, savedPopup:false}) )
 },[] )


  return (
    <>
      <Head>
        <title> NEXT Basket </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mainhomewrapper"> 
          <Firstsection/>
          <Featproducts prod={prod} />
          <Bestservices/>
          <Featuredpost/>
          <Whattheysay/>
          <Seventhsection/>
      </div>    
    </>
  )
}


export async function getServerSideProps ({req,res, query}) {
 
  let resp;
  const page = query.page || 1
 
  resp = await axios.get(`https://dummyjson.com/products?limit=${page * 10}`)
  
  return {
      props: {
        prod: resp.data.products,
      }
  }
}