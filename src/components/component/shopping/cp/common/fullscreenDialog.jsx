import React from 'react';
import '../../style/shopping/common/fullscreenDialog.scss';

function fullscreenDialog({ head, children }) {
  
  return (
    <div className='fullScreenDialog'>
      <div className='box'>
        <div className='head'>
          <p>{head}</p>
          <i className='close'></i>
        </div>
      </div>
    </div>
  );
}

export default fullscreenDialog;
