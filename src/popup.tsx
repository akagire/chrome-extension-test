import React from 'react';
import { createRoot } from 'react-dom/client';

const Popup = () => {
  return (
    <>
      <h1>test</h1>
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Popup />);
