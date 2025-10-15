import React from 'react';
import '../../style/shopping/common/fullscreenDialog.scss';

function fullscreenDialog({ head, children, closeFullScreenDialog }) {
  
  return (
    <div className='fullScreenDialog'>
      <div className='box'>
        <div className='head'>
          <p>{head}</p>
          <i className='close' onClick={closeFullScreenDialog}></i>
        </div>
        <div className='body'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default fullscreenDialog;
