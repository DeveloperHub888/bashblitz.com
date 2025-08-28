import React from 'react';
import Navbar from '../components/Navbar';
import ImageChange from '../components/ImageChange';
import ImageChangeMobile from '../components/ImageChangeMobile';

function EventManager() {
    // Function to check if the screen size is desktop (md and above)
    const isDesktop = () => {
        return window.innerWidth >= 1024; // Assuming md breakpoint is 768px
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

            <Navbar />
            {/* Conditional rendering based on screen size */}
            {isDesktop() ? <ImageChange /> : <ImageChangeMobile />}
        </div>
    );
}

export default EventManager;
