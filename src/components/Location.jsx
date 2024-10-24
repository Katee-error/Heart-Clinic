import React, { useEffect, useState, useRef } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";

const Location = ({ address }) => {
  const [YMaps, setYMaps] = useState(null);
  const [loading, setLoading] = useState(true);
  const mapRef = useRef(null); // Реф для отслеживания видимости компонента

  useEffect(() => {
    // Динамически загружаем библиотеку Yandex Maps
    const loadYMaps = async () => {
      const LoadedYMaps = await import("@pbe/react-yandex-maps");
      setYMaps(LoadedYMaps);
      setLoading(false); // Устанавливаем состояние загрузки в false после загрузки
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadYMaps(); // Загружаем YMaps только когда компонент становится видимым
          observer.disconnect(); // Отключаем наблюдателя после загрузки
        }
      });
    });

    if (mapRef.current) {
      observer.observe(mapRef.current); // Начинаем наблюдение за компонентом
    }

    return () => {
      observer.disconnect(); // Отключаем наблюдателя при размонтировании компонента
    };
  }, []);

  return (
    <Box height="500px" width="100%" mb="50px" ref={mapRef}>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <Spinner size="lg" />
          <Text ml={3}>Загрузка карты...</Text>
        </Box>
      ) : (
        YMaps && (
          <YMaps.YMaps>
            <YMaps.Map
              defaultState={{
                center: [43.001465, 47.459335], // Координаты центра карты
                zoom: 18, // Масштаб карты
              }}
              width="100%"
              height="100%"
            >
              <YMaps.Placemark
                geometry={[43.001465, 47.459335]} // Координаты метки
                properties={{
                  balloonContent: address, // Описание, отображаемое в балуне
                }}
                options={{
                  iconColor: "#FF0000", // Задаем цвет метки
                }}
              />
            </YMaps.Map>
          </YMaps.YMaps>
        )
      )}
    </Box>
  );
};

export default Location;
