import React, { createContext, useRef, useContext, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    product: useRef(null),
    form: useRef(null),
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.section) {
      scrollToSection(location.state.section);
    }
  }, [location]);

  const scrollToSection = (section) => {
    const stickyNavHeight = document.getElementById('sticky-nav').offsetHeight;
    const sectionTop = sectionRefs[section].current.offsetTop;
    window.scrollTo({ top: sectionTop - stickyNavHeight, behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ sectionRefs, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
