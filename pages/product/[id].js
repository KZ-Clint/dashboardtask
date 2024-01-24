import Head from 'next/head'
import Header from '@/components/Productitem/Header';
import Firstsection from '@/components/Productitem/Firstsection';
import Subtitlesection from '@/components/Productitem/Subtitlesection';
import Fourthsection from '@/components/Productitem/Fourthsection';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Bestsellerproducts from '@/components/Productitem/Bestsellerproducts';
import Brandsection from '@/components/Productitem/Brandsection';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { SET_POPUP } from '@/redux/reducers/popups'


export default function Productitem({prod, singleProduct}) {

    const router = useRouter()
    const [ products, setProducts ] = useState(prod)
    const [ product, setProduct ] = useState({})
    const [imgIndex, setImgIndex] = useState(0)

    const {popup1, cartPopup, savedPopup} = useSelector( (state) => state.popups )
    const dispatch = useDispatch()

    useEffect( () => {
      dispatch(SET_POPUP({cartPopup:false, popup1:false, savedPopup:false}) )
   },[] )
  

    useEffect( () => {
        if (router.isReady) { 
          const getProduct = async() => {
              try{
               const res = await axios.get(`https://dummyjson.com/products/${router.query.id}`)
               console.log(res)
               setProduct(res.data)
               document.title =  `Product/${router.query.id}`;
              } catch(error){
                 console.log(error)
              } 
          }          
            getProduct()
       }  
     },[router.isReady, router.query.id] )

  return (
    <>
      <Head>
        <title> NEXT Basket </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='gen_product_wrapper'> 
          <Header/>
          <Firstsection product={product} imgIndex={imgIndex} setImgIndex={setImgIndex} />
          <Subtitlesection/>
          <Fourthsection/>
          <Bestsellerproducts products={products} />
          <Brandsection/>
      </div>    
    </>
  )
}


export async function getServerSideProps ({req,res, query}) {
 
  let resp;
  const page = 1
 
  resp = await axios.get(`https://dummyjson.com/products?limit=${page * 8}`)

  
  return {
      props: {
        prod: resp.data.products,
      }
  }
}