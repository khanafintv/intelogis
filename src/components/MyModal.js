import { Modal } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { MODAL_OFF, VIS } from '../store/reducers';

export const MyModal = ({ children }) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.reducer1.modal);

  //const [isModalVisible, setIsModalVisible] = useState(modal);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  const handleOk = () => {
    //setIsModalVisible(false);
    dispatch({ type: MODAL_OFF });
    dispatch({ type: VIS });
  };

  const handleCancel = () => {
    //setIsModalVisible(false);
    dispatch({ type: MODAL_OFF });
    dispatch({ type: VIS });
  };

  return (
    <>
      <Modal
        title="Редактирование"
        visible={modal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};
