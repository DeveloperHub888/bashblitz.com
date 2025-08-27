import React, { useEffect, useRef, useState } from 'react';
import goldbar from '../assets/staticSection/Black and White Phone Mockup Webinar Promotion Instagram Story (2).png';
import { Link } from 'react-router-dom';


const ImageFollow = () => {
  const containerRef = useRef(null);
  const [imageLeft, setImageLeft] = useState('10%');
  const transitionDuration = '1s';
  const [section, setSection] = useState('');
  const sectionRef = useRef(section);

  useEffect(() => {
    sectionRef.current = section;
  }, [section]);

  useEffect(() => {
    const handleScrollStop = () => {
      setTimeout(() => {
          const sectionElement = document.querySelector(sectionRef.current); // Use the ref here
        if (sectionElement) {
          sectionElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }

      }, 100);
    };

    let scrollTimeout = null;

    const onScroll = () => {
      if (scrollTimeout !== null) {
        clearTimeout(scrollTimeout);
      }
        scrollTimeout = setTimeout(handleScrollStop, 150);
      
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeout !== null) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []); 


  useEffect(() => {
      const sections = containerRef.current.querySelectorAll('div[id^="section"]');
      const image = containerRef.current.querySelector('img');
      image.style.transition = transitionDuration; 

      const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const newPosition = entry.target.id === 'section1' || entry.target.id === 'section3' || entry.target.id === 'section5' || entry.target.id === 'section7' ? '20%' : '80%';
                setSection('#'+ entry.target.id);
                setImageLeft(newPosition); 

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
          sections.forEach(section => {
              observer.unobserve(section);
          });
      };
  }, []);

    return (
      <>
        <div ref={containerRef}                          
          data-aos="fade-in"
          data-aos-duration="3000"
        >
            <img
                src={goldbar}
                style={{
                    width: '25%',
                    position: 'fixed',
                    top: '50%',
                    left: imageLeft,
                    transform: 'translateY(-50%) translateX(-50%)',
                    transition: `left ${transitionDuration} ease `,
                }}
                className='hidden md:block'
                alt='lingotto argor herause'
            />
            <div id="section1" className='bg-black h-dvh text-slate-50 flex items-center justify-end'>
              <div class="w-full lg:w-2/3 text-left pe-56">
                  <h2 className={`text-3xl lg:text-6xl text-slate-50 font-semibold`} data-aos="fade-up" data-aos-duration="3000">Gestisci Tutti i Tuoi Eventi da un Unico Centro di Controllo!</h2>
                  <div className={`text-md lg:text-lg mt-4 mb-10 text-slate-50`} data-aos="fade-in" data-aos-duration="3000">Ora puoi finalmente gestire tutti i loro eventi da un'unica piattaforma centralizzata. Che si tratti di organizzare diversi format o lavorare con più locali, tutto è a portata di mano.</div>
                  <Link to='/contact' rel='noopener noreferrer' className={`px-8 py-2 uppercase border border-slate-50 text-slate-50 progress-button-light transition duration-300 ease-in-out`}>Scopri di più</Link>
              </div>
            </div>
            <div id="section2" className='bg-black h-dvh text-slate-50 flex items-center justify-start'>
              <div class="w-full lg:w-2/3 text-left ps-56">
                  <h2 className={`text-3xl lg:text-6xl text-slate-50 font-semibold`} data-aos="fade-up" data-aos-duration="3000">Traccia i Guadagni, Gestisci le Liste e Espandi il Tuo Business</h2>
                  <div className={`text-md lg:text-lg mt-4 mb-10 text-slate-50`} data-aos="fade-in" data-aos-duration="3000">Tenere traccia dei guadagni e gestire le liste degli eventi destinati a ogni locale diventa un gioco da ragazzi. Questa potente piattaforma non solo ti consente di monitorare i profitti in tempo reale, ma ti aiuta anche a espandere il tuo database di utenti, fornendoti dati preziosi per far crescere il tuo business</div>
                  <Link to='/contact' rel='noopener noreferrer' className={`px-8 py-2 uppercase border border-slate-50 text-slate-50 progress-button-light transition duration-300 ease-in-out`}>Scopri di più</Link>
              </div>
            </div>
            <div id="section3" className='bg-black h-dvh text-slate-50 flex items-center justify-end'>
              <div class="w-full lg:w-2/3 text-left pe-56">
                  <h2 className={`text-3xl lg:text-6xl text-slate-50 font-semibold`} data-aos="fade-up" data-aos-duration="3000">Stringi Nuove Collaborazioni e diventa il PR Numero Uno!</h2>
                  <div className={`text-md lg:text-lg mt-4 mb-10 text-slate-50`} data-aos="fade-in" data-aos-duration="3000">I PR possono aprirsi a nuove opportunità di collaborazione come mai prima d'ora. Grazie alla funzione di richiesta di collaborazione integrata, gli eventi in zona possono inviare proposte di partnership direttamente ai PR. Inoltre, grazie alle valutazioni e alle recensioni dei clienti, i PR possono distinguersi come i migliori nel loro campo e accedere a un flusso costante di nuove opportunità di lavoro.</div>
                  <Link to='/contact' rel='noopener noreferrer' className={`px-8 py-2 uppercase border border-slate-50 text-slate-50 progress-button-light transition duration-300 ease-in-out`}>Scopri di più</Link>
              </div>
            </div>
            {/* <div id="section4" className='bg-black h-dvh text-slate-50 flex items-center justify-start'>
              <div class="w-full lg:w-2/3 text-left ps-56">
                  <h2 className={`text-3xl lg:text-6xl text-slate-50 font-semibold`} data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                  <div className={`text-md lg:text-lg mt-4 mb-10 text-slate-50`} data-aos="fade-in" data-aos-duration="3000">In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.</div>
                  <Link to='/' rel='noopener noreferrer' className={`px-8 py-2 uppercase border border-slate-50 text-slate-50 progress-button-light transition duration-300 ease-in-out`}>Scopri di più</Link>
              </div>
            </div>
            <div id="section5" className='bg-black h-dvh text-slate-50 flex items-center justify-end'>
              <div class="w-full lg:w-2/3 text-left pe-56">
                  <h2 className={`text-3xl lg:text-6xl text-slate-50 font-semibold`} data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                  <div className={`text-md lg:text-lg mt-4 mb-10 text-slate-50`} data-aos="fade-in" data-aos-duration="3000">In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.</div>
                  <Link to='/' rel='noopener noreferrer' className={`px-8 py-2 uppercase border border-slate-50 text-slate-50 progress-button-light transition duration-300 ease-in-out`}>Scopri di più</Link>
              </div>
            </div>
            <div id="section6" className='bg-black h-dvh text-slate-50 flex items-center justify-start'>
              <div class="w-full lg:w-2/3 text-left ps-56">
                  <h2 className={`text-3xl lg:text-6xl text-slate-50 font-semibold`} data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                  <div className={`text-md lg:text-lg mt-4 mb-10 text-slate-50`} data-aos="fade-in" data-aos-duration="3000">In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.</div>
                  <Link to='/' rel='noopener noreferrer' className={`px-8 py-2 uppercase border border-slate-50 text-slate-50 progress-button-light transition duration-300 ease-in-out`}>Scopri di più</Link>
              </div>
            </div>
            <div id="section7" className='bg-black h-dvh text-slate-50 flex items-center justify-end'>
              <div class="w-full lg:w-2/3 text-left pe-56">
                  <h2 className={`text-3xl lg:text-6xl text-slate-50 font-semibold`} data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                  <div className={`text-md lg:text-lg mt-4 mb-10 text-slate-50`} data-aos="fade-in" data-aos-duration="3000">In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.</div>
                  <Link to='/' rel='noopener noreferrer' className={`px-8 py-2 uppercase border border-slate-50 text-slate-50 progress-button-light transition duration-300 ease-in-out`}>Scopri di più</Link>
              </div>
            </div>
            <div id="section8" className='bg-black h-dvh text-slate-50 flex items-center justify-star'>
              <div class="w-full lg:w-2/3 text-left ps-56">
                  <h2 className={`text-3xl lg:text-6xl text-slate-50 font-semibold`} data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                  <div className={`text-md lg:text-lg mt-4 mb-10 text-slate-50`} data-aos="fade-in" data-aos-duration="3000">In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.</div>
                  <Link to='/' rel='noopener noreferrer' className={`px-8 py-2 uppercase border border-slate-50 text-slate-50 progress-button-light transition duration-300 ease-in-out`}>Scopri di più</Link>
              </div>
            </div> */}
        </div>
        </>

    );
}

export default ImageFollow;
