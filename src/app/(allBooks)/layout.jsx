import React, { Children } from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const AllBooksLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default AllBooksLayout;
