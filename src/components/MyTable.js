import { Table } from 'antd';
import { Button } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncActionModal, ORDER_ID, VIS, VIS_FALSE } from '../store/reducers';

export const MyTable = () => {
  const dispatch = useDispatch();
  const ordersStore = useSelector((state) => state.reducer1.orders);

  const data = ordersStore.map((i) => ({
    key: i.id,
    name: i.name,
    load_address: i.loading.address,
    unload_address: i.unloading.address,
  }));

  const [rowId, setRowId] = useState();

  useEffect(() => {
    dispatch({ type: VIS_FALSE });
    dispatch({ type: ORDER_ID, payload: rowId });
    setTimeout(() => {
      dispatch({ type: VIS });
    }, 100);
  }, [rowId]);

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
          onClick={(e) => {
            dispatch({ type: VIS_FALSE });

            if (e.currentTarget.id == rowId) {
              dispatch(asyncActionModal());
            }

            dispatch({ type: ORDER_ID, payload: text });
          }}
          type="primary"
          className="btn"
          id={text}
        >
          Редактировать
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
              setRowId(record.key);
            },
          };
        }}
        rowClassName={(record, index) =>
          rowId === record.key ? 'table-row-active' : 'tab-row'
        }
      />
      ;
    </>
  );
};
