import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar'
import Footer from '../Footer'


const Layout = () => {
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);  // will change the layout of the pages based on window size i.e mobile
    const currentRoute = useLocation();                                 //what url the user is currently on

    const isMobile = windowWidth <= 753;
    const isProductPage = currentRoute.pathname.includes('/products')
    const isContactPage = currentRoute.pathname.includes('/contact')

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)          //cleaning up event listener
        }
     }, [])

   
    return (
        <>
        <Navbar isContactPage={isContactPage}/>
            <Outlet context={{ isMobile }}/>
        <Footer isProductPage={isProductPage} isMobile={isMobile}/>
       </>
    );
}

export default Layout;
