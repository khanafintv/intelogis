import { MainLayout } from './layouts/MainLayout';
import { Map } from './pages/map';
import { points } from './db/points.js';
import { useSelector, useDispatch } from 'react-redux';

import 'antd/dist/antd.css';
import './styles/style.css';

import { FETCH_ORDERS, FETCH_POINTS } from './store/reducers';
import { MyModal } from './components/MyModal';
import { MySelect } from './components/MySelect';

export default function App() {
  let result = [];
  const dispatch = useDispatch();
  dispatch({ type: FETCH_POINTS, payload: points });
  const pointsStore = useSelector((state) => state.reducer1.points);

  for (let i = 0; i < pointsStore.length; i++) {
    let n = 0;
    if (i === pointsStore.length - 1) n = i - 1;
    if (i < pointsStore.length - 1) n = i + 1;
    result.push({
      id: String(i + 1),
      name: `Заявка ${i + 1}`,
      loading: pointsStore[i],
      unloading: pointsStore[n],
    });
  }

  dispatch({ type: FETCH_ORDERS, payload: result });

  return (
    <MainLayout>
      <Map />
      <MyModal>
        <MySelect />
      </MyModal>
    </MainLayout>
  );
}
