import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import NewBooksMarquee from '../components/shared/NewBooksMarquee';
import JoinComunity from '../components/homepage/JoinComunity';
import BecomeMember from '../components/homepage/BecomeMember';

const MainLayout = ({children}) => {
  return (
    <>
      <Navbar />
      <NewBooksMarquee/>
      <main>{children}</main>
      <JoinComunity />
      <BecomeMember/>
      <Footer />
    </>
  );
};

export default MainLayout;