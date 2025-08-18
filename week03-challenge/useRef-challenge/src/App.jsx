import React from 'react';
import Modal from './component/Modal';
import Input from './component/Input';
import ScrollSpy from './component/ScrollSpy';

export function App(props) {
  return (
    <div className='App'>
      <Modal></Modal>
      <hr />
      <Input></Input>
      <hr />
      <ScrollSpy></ScrollSpy>
    </div>
  );
}
