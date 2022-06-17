import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useSelector } from 'react-redux';
import markerIconPng from 'leaflet/dist/images/marker-icon-2x.png';
import { Icon } from 'leaflet';

import RoutineMachine from '../plugins/routing.js';

export const Map = () => {
  const ordersStore = useSelector((state) => state.reducer1.orders);

  const modal = useSelector((state) => state.reducer1.modal);
  const orderId = useSelector((state) => state.reducer1.orderId);

  console.log(ordersStore);

  return (
    <>
      <MapContainer
        style={{
          height: '100vh',
        }}
        center={[59.93083081234912, 30.315538207451414]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker
        position={[59.91638319746599, 30.309009613297857]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      ></Marker>
      <Marker
        position={[60.07253319313442, 30.343791140293483]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      ></Marker> */}

        {!modal && (
          <RoutineMachine ordersStore={ordersStore} orderId={orderId} />
        )}
      </MapContainer>
    </>
  );
};
