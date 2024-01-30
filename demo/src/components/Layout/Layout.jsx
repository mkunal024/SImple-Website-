import React from 'react'
import Header from '../Header/Header'
import RouterComponent from '../../router/Router';
import Footer from '../Footer/Footer';
import './header.css';
import './routerComponents.css';
import './footer.css';

const Layout = () => {
  return (
    <div>
      <Header/>
      <RouterComponent />
      <Footer/>
    </div>
  )
}

export default Layout