import '../app/globals.css';
import Nav from './Nav';
import Sidebar from './Sidebar';

export default function Layout ({children}) {

  return (
    <>
    <div className='mainwrapper' >
        <Nav/>
        <div className="mainwrapper2" >
            <Sidebar/>
            {children}
        </div>
    </div>
      
    </>
  )
}