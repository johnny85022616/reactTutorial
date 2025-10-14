import React from 'react';
import '../../style/shopping/common/fullscreenDialog.scss';

function fullscreenDialog({ head, children }) {
  
  return (
    <div className='fullScreenDialog'>
      <div className='box'>
        <div className='head'>
          <p>{head}</p>
        </div>
      </div>
    </div>
  );
}

export default fullscreenDialog;
