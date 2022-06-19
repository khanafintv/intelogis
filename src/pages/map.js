import { MapContainer, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import RoutineMachine from '../plugins/routing.js';

export const Map = () => {
  const ordersStore = useSelector((state) => state.reducer1.orders);
  const orderId = useSelector((state) => state.reducer1.orderId);
  const vis = useSelector((state) => state.reducer1.vis);

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

        {vis && (
          <RoutineMachine
            ordersStore={ordersStore}
            orderId={orderId}
            vis={vis}
          />
        )}
      </MapContainer>
    </>
  );
};
