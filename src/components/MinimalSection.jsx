import React from 'react';
import { ScrollParallax } from "react-just-parallax";
import { Link } from 'react-router-dom';

function MinimalSection({ orientation, background, title, description, href, imageUrl, buttonClass, titleClass, descriptionClass, buttonText, strength, lerp, imgOpacity }) {

const createMarkup = (htmlContent) => {
    return {__html: htmlContent};
};

  return (
    <>
        <section className='block md:hidden'>
                <div className='mx-auto'>
                    <div className='flex flex-col justify-center items-center pt-20'>
                        <div className={`h-dvh w-full ${background} flex justify-center items-center px-3 z-20`}>
                            <div className='text-start mx-auto'>
                                <h2 className={`font-semibold uppercase mb-2 ${titleClass}`} data-aos="fade-up" data-aos-duration="900">{title}</h2>
                                <div data-aos="fade-zoom-in" data-aos-duration="1000" className={`text-lg mb-4 ${descriptionClass}`} dangerouslySetInnerHTML={createMarkup(description)}></div>
                                <Link to={href} rel='noopener noreferrer' className={`px-8 py-2 uppercase ${buttonClass} transition duration-300 ease-in-out`}>{buttonText}</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

    {orientation === 'left' ? (
        <>
            <section className='hidden md:block'>
                <div className='mx-auto'>
                    <div className='h-dvh flex justify-center items-center'>
                        <div className={`${imgOpacity} h-dvh sm:w-1/4 z-0`}>
                            <ScrollParallax lerpEase={lerp} zIndex='0' enableOnTouchDevice={false} strength={strength}>
                                <img src={imageUrl} alt={title} className='w-full h-full object-cover' />
                            </ScrollParallax>
                        </div> 
                        <div className={`h-screen w-full sm:w-3/4 ${background} flex justify-center items-center p-4 z-20`}>
                            <div className='text-left w-full sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto'>
                                <h2 className={`text-2xl font-semibold uppercase mb-2 ${titleClass}`} data-aos="fade-up" data-aos-duration="900">{title}</h2>
                                <div data-aos="fade-zoom-in" data-aos-duration="1000" className={`text-lg mb-4 ${descriptionClass}`} dangerouslySetInnerHTML={createMarkup(description)}></div>
                                <Link to={href} rel='noopener noreferrer' className={`px-8 py-2 uppercase  ${buttonClass} transition duration-300 ease-in-out`}>{buttonText}</Link>
                            </div>
                        </div>   
                    </div>
                </div>
            </section>
        </>
    ) : (
        <>
            <section className='hidden md:block'>
                <div className='mx-auto'>
                    <div className='h-dvh flex justify-center items-center'>
                        <div className={`h-screen w-full sm:w-3/4 ${background} flex justify-center items-center p-4 z-20`}>
                            <div className='text-left w-full sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto'>
                                <h2 className={`text-2xl font-semibold uppercase mb-2 ${titleClass}`} data-aos="fade-up" data-aos-duration="900">{title}</h2>
                                <div data-aos="fade-zoom-in" data-aos-duration="1000" className={`text-lg mb-4 ${descriptionClass}`} dangerouslySetInnerHTML={createMarkup(description)}></div>
                                <Link to={href} rel='noopener noreferrer' className={`px-8 py-2 uppercase  ${buttonClass} transition duration-300 ease-in-out`}>{buttonText}</Link>
                            </div>
                        </div>  
                        <div className={`${imgOpacity} h-dvh sm:w-1/4 z-0`}>
                            <ScrollParallax lerpEase={lerp} zIndex='0' enableOnTouchDevice={false} strength={strength}>
                                <img src={imageUrl} alt={title} className='w-full h-full object-cover' />
                            </ScrollParallax>
                        </div>  
                    </div>
                </div>
            </section>
        </>
    )}
    </>
  );
}

export default MinimalSection;


{/* <section>
    <div className='mx-auto'>
        <div className='flex flex-col-reverse sm:flex-row justify-center items-center'>
            <div className={`h-auto w-full sm:w-1/2 ${background} flex justify-center items-center p-4 z-20`}>
                <div className='text-center sm:text-left w-full sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto'>
                    <h2 className={`text-2xl sm:text-3xl font-semibold uppercase mb-2 ${titleClass}`} data-aos="fade-up" data-aos-duration="900">{title}</h2>
                    <div data-aos="fade-zoom-in" data-aos-duration="1000" className={`text-lg mb-4 ${descriptionClass}`} dangerouslySetInnerHTML={createMarkup(description)}></div>
                    <Link to={href} rel='noopener noreferrer' className={`px-8 py-2 uppercase ${buttonClass} transition duration-300 ease-in-out`}>{buttonText}</Link>
                </div>
            </div>
            <div className={`h-auto w-full sm:w-1/2 ${imgOpacity} sm:block z-0`}>
                <ScrollParallax lerpEase={lerp} zIndex='0' enableOnTouchDevice={false} strength={strength}>
                    <img src={imageUrl} alt={title} className='w-full h-full object-cover' />
                </ScrollParallax>
            </div> 
        </div>
    </div>
</section> */}