import React from 'react';
import Navbar from '../components/Navbar';
import ImageChange from '../components/ImageChange';
import ImageChangeMobile from '../components/ImageChangeMobile';
import { Helmet } from 'react-helmet';
import img from '../assets/staticSection/pexels-edoardo-tommasini-3249760.jpg';

function EventManager() {
    // Function to check if the screen size is desktop (md and above)
    const isDesktop = () => {
        return window.innerWidth >= 1024; // Assuming md breakpoint is 768px
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Gestione Eventi Semplice e Veloce con QR Code | BashBlitz</title>
                <meta name="description" content="Gestisci i tuoi eventi in modo rapido e sicuro con QR code personalizzati. Evita le code e garantisci ingressi sicuri per feste e concerti." />
                <meta name="keywords" content="gestione eventi, QR code, organizzazione eventi, ingressi sicuri, feste, concerti, strumenti per eventi" />
                <meta name="author" content="BashBlitz" />
                <meta property="og:title" content="Gestione Eventi Semplice e Veloce con QR Code | BashBlitz" />
                <meta property="og:description" content="Scopri come gestire eventi con facilità utilizzando QR code per ingressi rapidi e senza code. Ideale per feste, concerti e altri eventi." />
                <meta property="og:image" content={img} />
                <meta property="og:url" content="https://bashblitz.com/event-manager/" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://bashblitz.com/event-manager/" />
            </Helmet>

            <Navbar />
            {/* Conditional rendering based on screen size */}
            {isDesktop() ? <ImageChange /> : <ImageChangeMobile />}
        </div>
    );
}

export default EventManager;
