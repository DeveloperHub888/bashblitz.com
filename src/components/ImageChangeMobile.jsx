import React, { useEffect, useRef, useState } from 'react';
import goldbar from '../assets/staticSection/Black and White Phone Mockup Webinar Promotion Instagram Story.png';
import goldbar1 from '../assets/staticSection/Black and White Phone Mockup Webinar Promotion Instagram Story (1).png';
import goldbar2 from '../assets/staticSection/Black and White Phone Mockup Webinar Promotion Instagram Story (4).png';
import { Link } from 'react-router-dom';

const ImageChange = () => {
  const containerRef = useRef(null);
  const [imageLeft, setImageLeft] = useState('0%');
  const [imageLeft1, setImageLeft1] = useState('-60%');
  const [imageLeft2, setImageLeft2] = useState('-60%');
  const transitionDuration = '1s';
  const [section, setSection] = useState('');

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll('div[id^="section"]');
    const image = containerRef.current.querySelector('img');
    image.style.transition = transitionDuration;

    let timeout;

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          clearTimeout(timeout);

          setSection('#'+ entry.target.id);
          if(entry.target.id === 'section3' || entry.target.id === 'section4' || entry.target.id === 'section5' || entry.target.id === 'section6'){
            timeout = setTimeout(() => {
              setImageLeft('-60%');
            },1000);
          } else {
            setImageLeft('0%');
          }
          if(entry.target.id === 'section3' || entry.target.id === 'section4'){
            timeout = setTimeout(() => {
              setImageLeft1('0%');
            },1000);
          } else {
            setImageLeft1('-60%');
          }
          if(entry.target.id === 'section5' || entry.target.id === 'section6'){
            timeout = setTimeout(() => {
              setImageLeft2('0%');
            },1000);
          } else {
            setImageLeft2('-60%');
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.5,
      rootMargin: "0px"
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      clearTimeout(timeout);
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <>
      <div ref={containerRef}>
        <img
          src={goldbar}
          className='z-0 opacity-20'
          style={{
            width: '95%',
            position: 'fixed',
            top: '50%',
            left: imageLeft,
            transform: 'translateY(-50%) translateX(-50%)',
            transition: `left ${transitionDuration} ease `,
          }}
          alt='lingotto argor herause'
        />
        <img
          src={goldbar1}
          className='z-0 opacity-20'
          style={{
            width: '95%',
            position: 'fixed',
            top: '50%',
            left: imageLeft1,
            transform: 'translateY(-50%) translateX(-50%)',
            transition: `left ${transitionDuration} ease `,
          }}
          alt='lingotto argor herause'
        />
        <img
          src={goldbar2}
          className='z-0 opacity-20'
          style={{
            width: '95%',
            position: 'fixed',
            top: '50%',
            left: imageLeft2,
            transform: 'translateY(-50%) translateX(-50%)',
            transition: `left ${transitionDuration} ease `,
          }}
          alt='lingotto argor herause'
        />
          <div id="section1" className='inset-0 text-slate-50 p-6 h-screen flex flex-col justify-center items-center'>
            <div className={`h-dvh w-full flex justify-center items-center px-3 z-20`}>
                <div className='text-start mx-auto'>
                <h2 className={`text-3xl lg:text-6xl font-semibold z-10`} data-aos="fade-up" data-aos-duration="3000">Monitora e Analizza gli Eventi in Tempo Reale!</h2>
                <div className={`text-md lg:text-lg mt-4 mb-10 relative z-10`} data-aos="fade-in" data-aos-duration="3000">Con BashBlitz, sei sempre un passo avanti. Monitora l'andamento degli eventi in tempo reale, visualizza il numero di partecipanti, e ottieni dati dettagliati sul tuo target di clientela. Non c'è più bisogno di congetture; prendi decisioni informate per migliorare ogni aspetto del tuo evento.</div>
                </div>
            </div>
          </div>
          <div id="section2" className='relative inset-0 text-slate-50 p-6 h-screen flex flex-col justify-center items-center'>
            <div className={`h-dvh w-full flex justify-center items-center px-3 z-20`}>
                <div className='text-start mx-auto'>
                <h2 className={`text-3xl lg:text-6xl font-semibold`} data-aos="fade-up" data-aos-duration="3000">Rivela i Tuoi Migliori Clienti e PR!</h2>
                <div className={`text-md lg:text-lg mt-4 mb-10`} data-aos="fade-in" data-aos-duration="3000">Scopri i segreti del successo con BashBlitz! Analizza le statistiche dei tuoi migliori clienti, identifica i PR più performanti e accedi a una vasta gamma di dati per ottimizzare le tue strategie. Tutto ciò che ti serve per massimizzare il rendimento e far crescere il tuo business. </div>
                </div>
            </div>
          </div>
          <div id="section3" className='relative inset-0 text-slate-50 p-6 h-screen flex flex-col justify-center items-center'>
            <div className={`h-dvh w-full flex justify-center items-center px-3 z-20`}>
                <div className='text-start mx-auto'>
                <h2 className={`text-3xl lg:text-6xl font-semibold`} data-aos="fade-up" data-aos-duration="3000">Crea e Condividi Eventi in un Batter d'occhio!</h2>
                <div className={`text-md lg:text-lg mt-4 mb-10`} data-aos="fade-in" data-aos-duration="3000">Creare un evento è semplice come un clic! Basta due passaggi e sei pronto a condividere il tuo evento con il mondo.</div>
                </div>
            </div>
          </div>
          <div id="section4" className='relative inset-0 text-slate-50 p-6 h-screen flex flex-col justify-center items-center'>
            <div className={`h-dvh w-full flex justify-center items-center px-3 z-20`}>
                <div className='text-start mx-auto'>
                <h2 className={`text-3xl lg:text-6xl font-semibold`} data-aos="fade-up" data-aos-duration="3000">Inviti a portata di Click!</h2>
                <div className={`text-md lg:text-lg mt-4 mb-10`} data-aos="fade-in" data-aos-duration="3000">Partecipare agli eventi non è mai stato così semplice! Ricevi link personalizzati per iscriverti agli eventi con un solo click. Dimentica la frustrazione di procedure di registrazione lunghe e noiose; con BashBlitz, accedi agli eventi in modo rapido e senza sforzo. </div>
                </div>
            </div>
          </div>
          <div id="section5" className='relative inset-0 text-slate-50 p-6 h-screen flex flex-col justify-center items-center'>
            <div className={`h-dvh w-full flex justify-center items-center px-3 z-20`}>
                <div className='text-start mx-auto'>
                <h2 className={`text-3xl lg:text-6xl font-semibold`} data-aos="fade-up" data-aos-duration="3000">Gestione degli Ingressi in un'unica App!</h2>
                <div className={`text-md lg:text-lg mt-4 mb-10`} data-aos="fade-in" data-aos-duration="3000">Gestire gli ingressi agli eventi è un gioco da ragazzi! Scansiona i QR code per un accesso senza code e monitora tutto senza carta. Tieni i conti in tempo reale con la nostra app intuitiva e lascia che la tecnologia si occupi del resto. </div>
                </div>
            </div>
          </div>
          <div id="section6" className='relative inset-0 text-slate-50 p-6 h-screen flex flex-col justify-center items-center'>
            <div className={`h-dvh w-full flex flex-col justify-center items-start px-3 z-20`}>
              <div className='text-start'>
                <h2 className={`text-3xl lg:text-6xl font-semibold`} data-aos="fade-up" data-aos-duration="3000">Sicurezza e precisione in un'unica Soluzione!</h2>
                <div className={`text-md lg:text-lg mt-4 mb-10`} data-aos="fade-in" data-aos-duration="3000">La sicurezza degli eventi è una priorità assoluta! Gestisci le blacklist e segmenta il pubblico per genere, grazie ai dati dettagliati raccolti durante la scansione dei QR code. Evita inconvenienti e assicurati che ogni evento sia un'esperienza positiva per tutti.</div>
              </div>
              <Link to='/contact' rel='noopener noreferrer' className={`px-8 py-2 uppercase border border-slate-50 text-slate-50 progress-button-light transition duration-300 ease-in-out mt-4`}>Scopri di più</Link>
            </div>
          </div>
      </div>
    </>
  );
}

export default ImageChange;
