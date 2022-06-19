import { Select } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { FETCH_ORDERS } from '../store/reducers';

export const MySelect = () => {
  const dispatch = useDispatch();
  const orderId = useSelector((state) => state.reducer1.orderId);

  let ordersStore = useSelector((state) => state.reducer1.orders);
  const pointsStore = useSelector((state) => state.reducer1.points);

  const { Option } = Select;
  let res = [...ordersStore];

  const handleChangeLoad = (value) => {
    let findPoint = pointsStore.find((i) => i.address === value);
    let loading = { ...findPoint };

    res.forEach((i, idx) => {
      if (i.id === orderId) {
        let obj = { ...i, loading: loading };
        res.splice(idx, 1, obj);
      }
    });

    dispatch({ type: FETCH_ORDERS, payload: res });
  };

  const handleChangeUnload = (value) => {
    let findPoint = pointsStore.find((i) => i.address === value);
    let unloading = { ...findPoint };

    res.forEach((i, idx) => {
      if (i.id === orderId) {
        let obj = { ...i, unloading: unloading };
        res.splice(idx, 1, obj);
      }
    });

    dispatch({ type: FETCH_ORDERS, payload: res });
  };

  return (
    <>
      <Select
        defaultValue="Выберите адрес погрузки"
        style={{
          width: 400,
        }}
        onChange={handleChangeLoad}
      >
        {pointsStore.map((i) => {
          return (
            <Option key={i.id} value={i.address}>
              {i.address}
            </Option>
          );
        })}
      </Select>
      <br />
      <br />

      <Select
        defaultValue="Выберите адрес разгрузки"
        style={{
          width: 400,
        }}
        onChange={handleChangeUnload}
      >
        {pointsStore.map((i) => {
          return (
            <Option key={i.id} value={i.address}>
              {i.address}
            </Option>
          );
        })}
      </Select>
    </>
  );
};
