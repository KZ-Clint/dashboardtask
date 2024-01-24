import Head from 'next/head'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SET_NAME } from '@/redux/reducers/profile'

const DisplayName = ({newName}) => {
  return (
      <p> Hello, {newName} </p>
  )
}

export default function Home() {

  const name = useRef()
  const {name:newname, sleepy:sleepyvalue} = useSelector( (state) => state.profile )
  const dispatch = useDispatch()

  const useName = () => {
      console.log(name.current.value)
      dispatch(SET_NAME({ name:name.current.value, sleepy:!sleepyvalue}))
  }

  return (
    <>
      <Head>
        <title> NEXT Basket </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mainhomewrapper"> 
          <p> What&#39;s your name, you are {sleepyvalue ? "Tired": "false" } </p>
          <input placeholder="Name here" ref={name} />
          <button onClick={useName} > Submit </button>
          <DisplayName newName={newname} />
      </div>    
    </>
  )
}
