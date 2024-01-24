import Layout from '@/components/Layout'
import '../app/globals.css'
import { ContextProvider } from '@/components/Context'
import { Provider } from 'react-redux'
import reduxStore from '@/redux/store'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Dropdownbar from '@/components/Dropdownbar'
import Cart from '@/components/Popup/Cart'
import Saved from '../components/Popup/Saved'


export default function MyApp({ Component, pageProps }) {
  return (
     <>
        <Provider store={reduxStore} >
            <ContextProvider>
                  <Saved/>
                  <Cart/>
                  <Dropdownbar/>
                  <Nav/>
                  <Layout>
                      <Component {...pageProps} />
                      <Footer/>
                  </Layout>
              </ContextProvider>     
        </Provider>
     </>
  )
}
