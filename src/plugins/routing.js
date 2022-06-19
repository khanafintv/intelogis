import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';

import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const createRoutineMachineLayer = ({ ordersStore, orderId, vis }) => {
  let findItem = ordersStore.find((i) => i.id === orderId);

  const instance = L.Routing.control({
    //waypoints: [null],
    // createMarker() {
    //   return null;
    // },
    show: false,
    addWaypoints: true,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  instance.setWaypoints([
    L.latLng(
      findItem?.loading.coordinates.lon,
      findItem?.loading.coordinates.lat
    ),
    L.latLng(
      findItem?.unloading.coordinates.lon,
      findItem?.unloading.coordinates.lat
    ),
  ]);

  // if (vis) {
  //   for (let i of ordersStore) {
  //     document
  //       .querySelector(`[data-row-key="${i.id}"]`)
  //       .addEventListener('click', (e) => {
  //         let findItem = ordersStore.find(
  //           (item) => item.id === e.currentTarget.dataset.rowKey
  //         );

  //         instance.setWaypoints([
  //           L.latLng(
  //             findItem?.loading.coordinates.lon,
  //             findItem?.loading.coordinates.lat
  //           ),
  //           L.latLng(
  //             findItem?.unloading.coordinates.lon,
  //             findItem?.unloading.coordinates.lat
  //           ),
  //         ]);
  //       });
  //   }
  // }

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
