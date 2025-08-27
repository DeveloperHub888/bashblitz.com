import React from 'react';
import Smoke from '../components/SmokeSection';
import MinimalSection from '../components/MinimalSection';
import img from '../assets/staticSection/pexels-greg-contreras-3177809.jpg';
import img1 from '../assets/staticSection/pexels-luiisrtz-1687318.jpg';
import img2 from '../assets/staticSection/pexels-edoardo-tommasini-3249760.jpg';
import logo from '../assets/logo/logo-transp.png'
import logo1 from '../assets/logo/logo-transp-full.png'
import Navbar from '../components/Navbar';
import AnimatedTextWord from '../components/AnimatedTextWord';

function SmokePage() {

  function scrollToNextSection() {
    const nextSection = document.querySelector('#nextSection');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className='h-dvh'>
      <Navbar/>
        <div className='relative z-20 h-dvh overflow-hidden'>
          <Smoke />
          <div className='h-dvh absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full block md:hidden'>
            <div className="flex justify-center items-center h-full"> {/* Added flex container with items-center for centering */}
              <img src={logo1} alt="Logo" className="w-80 mx-auto"/> 
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
            <img src={logo} alt="Logo" className="hidden md:block  ml-6 mt-6 w-44 h-auto" data-aos="fade-in" data-aos-duration="3000"/> 
            <div className="hidden md:block  ml-4 mr-6 h-32 border-r border-white border-2" data-aos="fade-right" data-aos-duration="3500"></div>
            <div className="hidden md:block ml-6"><AnimatedTextWord /></div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center">
            <div className="mt-2 text-slate-400 opacity-transition duration-500 ease-in-out delay-500 cursor-pointer" onClick={scrollToNextSection}>Scroll Down</div>
            <div className="flex items-center">
              <hr className="border-l border-slate-400 height-transition duration-500 ease-in-out delay-500" />
            </div>
          </div>
        </div>
        <div id='nextSection'></div>
        <MinimalSection
        orientation='right' 
        background='bg-black' 
        title="L'App per Organizzare gli Eventi"
        titleClass='text-4xl md:text-5xl text-slate-50'
        description={`
        <p class='font-medium my-9 text-xl text-neutral-500 uppercase'> Pianifica, invita, e divertiti con BashBlitz!</p> 
        <p class="font-normal tracking-wide text-pretty text-neutral-500 text-xl mb-16">
         Crea eventi epici con un semplice tocco, invita amici per farli partecipare all'azione. Con i nostri QR code personalizzati, gestire gli ingressi è un gioco da ragazzi! Non preoccuparti più delle lunghe code o delle liste cartacee. Tutto è digitale, tutto è fluido. Organizza le liste dei tuoi PR in un batter d'occhio e assicurati che solo le persone giuste siano al tuo evento.
        </p>
        `}
        descriptionClass=''
        buttonClass='border border-slate-50 text-slate-50 progress-button-light'
        buttonText='scopri di più'
        href='/event-manager/'
        imageUrl={img}
        imgOpacity="opacity-80"
        strength='0.14'
        lerp='0.30'
      />
      <MinimalSection 
        orientation='left' 
        background='bg-black' 
        title="L'App Definitiva per i Guru degli Eventi!"
        titleClass='text-4xl md:text-5xl text-slate-50' 
        description={`
        <p class='font-semibold my-9 text-xl text-neutral-500 uppercase'>Entra nel mondo esclusivo dei PR!</p> 
        <p class="font-normal tracking-wide text-pretty text-neutral-500 text-xl mb-16">
         Invita le persone alle feste più esclusive, scopri nuove partnership con i migliori locali e tieni traccia delle tue commissioni come un pro. Con la nostra app, gli eventi diventano la tua piattaforma di networking personale. Invita, connetti e guadagna con facilità! BashBlitz ti mette al centro dell'azione, trasformando ogni evento in un'opportunità per il successo.
        </p>
        `}
        descriptionClass='text-slate-50'
        buttonClass='border border-slate-50 text-slate-50 progress-button-light'
        buttonText='scopri di più'
        href='/public-relation/'
        imageUrl={img1}
        imgOpacity="opacity-60"
        strength='0.14'
        lerp='0.30'
      />
        <MinimalSection
        orientation='right' 
        background='bg-black' 
        title='Accedi agli Eventi Esclusivi in un Lampo!' 
        titleClass='text-4xl md:text-5xl text-slate-50'
        description={`
        <p class='font-medium my-9 text-xl text-neutral-500 uppercase'> 
        Accedi agli eventi più esclusivi con BashBlitz!
        </p> 
        <p class="font-normal tracking-wide text-pretty text-neutral-500 text-xl mb-16">
         Iscriviti in pochi secondi e ottieni il tuo QR code personale per saltare la coda e immergerti nell'atmosfera unica di ogni evento. Basta con le lunghe attese, con BashBlitz sei un VIP istantaneamente! Non perdere tempo, unisciti all'élite degli eventi e vivi esperienze indimenticabili
        </p>
        `}
        descriptionClass='pb-20'
        buttonClass=''
        buttonText=''
        href='/'
        imageUrl={img2}
        imgOpacity="opacity-80"
        strength='0.14'
        lerp='0.30'
      />
    </div>
  );
}

export default SmokePage;
