import React, { Component, useState } from 'react';

export default class Modal extends Component {
  render() {
    const [isOpen, setIsOpen] = useState(false);
    const [timer, setTimer] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);

    const showModal = () => {
      setIsOpen(true);
      setTitle('Modal Ready');
      document.body.style.backgroundColor = 'white';
    };

    const hideModal = () => {
      setIsOpen(false);
    };

    const startTimer = () => {
      setStartTime(Date.now());
    };

    const modalLoaded = () => {
      setEndTime(Date.now());
    };

    const onExit = () => {
      setTitle('Goodbye 😀');
    };

    const onExited = () => {
      document.body.style.backgroundColor = 'green';
    };

    return (
      <>
        <button onClick={showModal}>Display Modal</button>
        <Modal
          show={isOpen}
          onHide={hideModal}
          onEnter={startTimer}
          onEntered={modalLoaded}
          onExit={onExit}
          onExited={onExited}
        >
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{endTime - startTime} ms</Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
            <button>Save</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
