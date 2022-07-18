import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

export const DarkLayout: FC<Props>  = ({ children }) => {
const style = {
    backgroundColor: '#333',
    color: '#00f',
    borderRadius: '5px',
    padding: '10px',
  };

  return (
    <div style={style}>
      <h3>Dark Layout</h3>
      <div>{children}</div>
    </div>
  );
};
