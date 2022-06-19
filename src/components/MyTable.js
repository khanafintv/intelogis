import { Table } from 'antd';
import { Button } from 'antd';
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { asyncActionModal, ORDER_ID } from '../store/reducers';

export const MyTable = () => {
  const dispatch = useDispatch();
  const ordersStore = useSelector((state) => state.reducer1.orders);

  const data = ordersStore.map((i) => ({
    key: i.id,
    name: i.name,
    load_address: i.loading.address,
    unload_address: i.unloading.address,
  }));

  const [id, setId] = useState();

  const columns = [
    {
      title: 'Заявка',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Адрес погрузки',
      dataIndex: 'load_address',
      key: 'load_address',
    },
    {
      title: 'Адрес разгрузки',
      dataIndex: 'unload_address',
      key: 'unload_address',
    },

    {
      title: 'Редактирование',
      dataIndex: 'key',
      key: 'key',
      render: (text) => (
        <Button
          onClick={() => {
            dispatch(asyncActionModal());
            dispatch({ type: ORDER_ID, payload: text });
          }}
          type="primary"
          className="btn"
        >
          Редактирование
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table
        className="tab"
        columns={columns}
        dataSource={data}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              setId(record.key);
            },
          };
        }}
        rowClassName={(record, index) =>
          id === record.key ? 'table-row-active' : 'tab-row'
        }
      />
      ;
    </>
  );
};
