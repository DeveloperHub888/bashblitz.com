import React from 'react';
import Navbar from '../components/Navbar';
import ImageFollow from '../components/ImageFollow';
import ImageChangeMobile1 from '../components/ImageChangeMobile1';
import { Helmet } from 'react-helmet';
import img from '../assets/staticSection/pexels-luiisrtz-1687318.jpg';

function PublicRelation() {

  const isDesktop = () => {
    return window.innerWidth >= 1024; // Assuming md breakpoint is 768px
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Organizza Eventi e Genera QR Code per Feste Esclusive | BashBlitz</title>
        <meta name="description" content="Scopri come creare eventi unici e sicuri con QR code personalizzati per ingressi rapidi e senza code. Ideale per giovani e amanti delle feste." />
        <meta name="keywords" content="eventi, feste, QR code, ingressi rapidi, sicurezza, giovani, divertimento, gestione eventi, party esclusivi" />
        <meta name="author" content="BashBlitz" />
        <meta property="og:title" content="Organizza Eventi e Genera QR Code per Feste Esclusive | BashBlitz" />
        <meta property="og:description" content="Crea eventi esclusivi con QR code per ingressi rapidi e senza code. Perfetto per chi ama organizzare feste sicure e indimenticabili." />
        <meta property="og:image" content={img} />
        <meta property="og:url" content="https://bashblitz.com/public-relation/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://bashblitz.com/public-relation/" />
      </Helmet>

      <Navbar />
      {isDesktop() ? <ImageFollow/> : <ImageChangeMobile1 />}
    </div>
  );
}

export default PublicRelation;
