import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import NewBooksMarquee from '../components/shared/NewBooksMarquee';

const MainLayout = ({children}) => {
  return (
    <>
      <Navbar />
      <NewBooksMarquee/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;