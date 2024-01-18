import Layout from '@/components/Layout'
import '../app/globals.css'
import { ContextProvider } from '@/components/Context'
import Enterroundpopup from '@/components/Enterroundpopup'

export default function MyApp({ Component, pageProps }) {
  return (
     <>
        <ContextProvider>
            <Layout>
                <Component {...pageProps} />
                <Enterroundpopup/>
            </Layout>
        </ContextProvider>     
     </>
  )
}
