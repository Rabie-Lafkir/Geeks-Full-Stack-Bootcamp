import React from 'react';

/**
 * Modal
 * Simple full-screen overlay centered box.
 * Props:
 *  - title
 *  - children
 *  - onClose()  (required)
 */
class Modal extends React.Component {
  render() {
    const { title = 'Modal', children, onClose } = this.props;
    return (
      <div className="modal-background" role="dialog" aria-modal="true">
        <div className="modal-body">
          <h2>{title}</h2>
          <div>{children}</div>
          <div style={{textAlign:'right',marginTop:'1rem'}}>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
