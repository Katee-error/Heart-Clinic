import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Box } from "@chakra-ui/react";

const Location = ({ address }) => {
  return (
    <Box height="400px" width="100%" mb={'50px'}>
      <YMaps>
        <Map
          defaultState={{
            center: [43.001465, 47.459335], // Координаты центра карты
            zoom: 18, // Масштаб карты
          }}
          width="100%"
          height="100%"
        >
          <Placemark
            geometry={[43.001465, 47.459335]} // Координаты метки
            properties={{
              balloonContent: address, // Описание, отображаемое в балуне
            }}
            options={{
              iconColor: "#FF0000", // Задаем цвет метки
            }}
          />
        </Map>
      </YMaps>
    </Box>
  );
};

export default Location;
