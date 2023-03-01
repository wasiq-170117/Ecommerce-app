import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';

const Layout = ({children, title, description, keywords, author}) => {
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
        <title>{title}</title>              
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>
        <Header />
        <main style={{minHeight: "80vh"}}>
          <Toaster />
          {children}
        </main>
        <Footer />
    </div>
  )
};

Layout.defaultpProps = {
  title: 'My Ecommerce App',
  description: 'Mern Stack',
  keywords: 'Development',
  author: 'Wasique Sheikh',
}

export default Layout;