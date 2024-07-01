'use client';
// import { useEffect, useState , useRef} from 'react';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import Map, { Marker } from 'react-map-gl';
// import { setDefaults, fromAddress } from 'react-geocode';
// import Spinner from './Spinner';
// import Image from 'next/image';
// import pin from '@/assets/images/pin.svg';

import 'mapbox-gl/dist/mapbox-gl.css';

// const PropertyMap=({ property }) => {
  
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   console.log(property.latitude, property.longitude);
//   const [lng, setLng] = useState(property.longitude);
//   const [lat, setLat] = useState(80.12);
//   const [zoom, setZoom] = useState(9);

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v12',
//       center: [lng, lat],
//       zoom: zoom,
//     });

//     map.current.on('move', () => {
//       setLng(map.current.getCenter().lng.toFixed(4));
//       setLat(map.current.getCenter().lat.toFixed(4));
//       setZoom(map.current.getZoom().toFixed(2));
//     });
//   });

//   return (
//     <div>
//       <div className='sidebar'>
//         latitude: {lng} | latitude: {lat} | Zoom: {zoom}
//       </div>
//       <div ref={mapContainer} className='map-container' />
//     </div>  
//   );
// };
// export default PropertyMap;

// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZGFiMTIzIiwiYSI6ImNsd3oycjUyOTAzY2IybHNmOHl6dDFqMmUifQ.NYimTx3kzhVZnic2XtJWlg';


// const PropertyMap = ({ property }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(property.location.longitude);
//   const [lat, setLat] = useState(property.location.latitude);
//   const [zoom, setZoom] = useState(9);

  

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v12',
//       center: [lng, lat],
//       zoom: zoom,
//     });

//     const marker1 = new mapboxgl.Marker()
//         .setLngLat([12.554729, 55.70651])
//         .addTo(map);

//     map.current.on('move', () => {
//       setLng(map.current.getCenter().lng.toFixed(4));
//       setLat(map.current.getCenter().lat.toFixed(4));
//       setZoom(map.current.getZoom().toFixed(2));
//     });
//   });

//   return (
//     
//   );
// }

// export default PropertyMap;

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZGFiMTIzIiwiYSI6ImNsd3oycjUyOTAzY2IybHNmOHl6dDFqMmUifQ.NYimTx3kzhVZnic2XtJWlg';

const PropertyMap = ({ property }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(property.location.longitude);
  const [lat, setLat] = useState(property.location.latitude);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });

    // Create and add the marker only once
    new mapboxgl.Marker({ color: 'black', rotation: 45 })
      .setLngLat([property.location.longitude, property.location.latitude])
      .addTo(map.current);

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, [lng,lat,zoom]); // Run only on initial load

  return (
    <div>
      <div className="bg-gray-800 text-white p-3 font-mono top-80 left-0 m-3 rounded-lg z-10">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" style={{ height: '500px', width: '100%' }} />
    </div>
  );
}

export default PropertyMap;
