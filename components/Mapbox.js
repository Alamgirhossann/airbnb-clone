import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import * as geolib from "geolib";
const Mapbox = ({ searchResult }) => {
  const [selectedLocation, setSelectedLocation] = useState({})
  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const center = geolib.getCenter(coordinates);
  console.log(center);
  return (
    <Map
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/alamgirhossan/clfz00flc003k01t76whor7cp"
      mapboxAccessToken={process.env.mapbox_key}
    >
      {
      //   searchResult.map((result) => (
      //   <div key={result.long}>
      //     <Marker
      //       longitude={result.long}
      //       latitude={result.lat}
      //       // offsetLeft={-20}
      //       // offsetTop={-10}
      //     >
      //       <p onClick={()=>setSelectedLocation(result)} className=" cursor-pointer text-2xl animate-bounce">@</p>
      //     </Marker>
      //     {selectedLocation.long === result.long ? (
      //       <Popup onClose={()=>setSelectedLocation({})} closeOnClick={true} latitude={result.lat} longitude={result.long}>
      //       {result.title}
      //       </Popup>
      //     ):(false)}
      //   </div>
      // ))
    }
    </Map>
  );
};

export default Mapbox;
