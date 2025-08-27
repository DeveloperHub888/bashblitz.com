import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SmoothScroll from './components/SmoothScroll';
import Scrollbar from './components/ScrollBar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { hydrate } from "react-dom";
import { createRoot } from 'react-dom/client';



AOS.init();


const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript


const isDesktop = () => {
  return window.innerWidth >= 768; // Assuming md breakpoint is 768px
};

if (rootElement.hasChildNodes()) {
  hydrate(  
    <React.StrictMode>
    {isDesktop() ? 
    <>
      <Scrollbar/>
      <SmoothScroll/>
    </> : 
    <>
    
    </>}
    <App />
  </React.StrictMode>
                      , rootElement);
} else {
  root.render(  
    <React.StrictMode>
    {isDesktop() ? 
    <>
      <Scrollbar/>
      <SmoothScroll/>
    </> : 
    <>
    
    </>}
    <App />
  </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
