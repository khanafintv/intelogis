import { Resizable } from 're-resizable';
import { useState } from 'react';
import { MyTable } from '../components/MyTable';

export const MainLayout = ({ children }) => {
  const [state, setState] = useState({ width: '300px', height: '100vh' });

  return (
    <div className="main-layout">
      <Resizable
        className="sidebar"
        size={{ width: state.width, height: state.height }}
        onResizeStop={(e, direction, ref, d) => {
          setState({
            width: state.width + d.width,
            height: state.height,
          });
        }}
      >
        <MyTable />
      </Resizable>
      <div className="main-content">{children}</div>
    </div>
  );
};
