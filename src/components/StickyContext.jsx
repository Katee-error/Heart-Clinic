import React, { createContext, useContext, useState, useEffect } from 'react';

// Создаем контекст для отслеживания прокрутки
const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Показываем липкую навигацию только после того, как основная полностью исчезнет с экрана (например, 150px)
      if (scrollPosition > 200) {
        setIsStickyVisible(true);
      } else {
        setIsStickyVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={isStickyVisible}>
      {children}
    </ScrollContext.Provider>
  );
};

// Хук для использования контекста
export const useScroll = () => useContext(ScrollContext);
