import React from 'react';
import Navbar from '../components/Navbar';
import ImageFollow from '../components/ImageFollow';
import ImageChangeMobile1 from '../components/ImageChangeMobile1';

function PublicRelation() {

  const isDesktop = () => {
    return window.innerWidth >= 1024; // Assuming md breakpoint is 768px
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      {isDesktop() ? <ImageFollow/> : <ImageChangeMobile1 />}
    </div>
  );
}

export default PublicRelation;
