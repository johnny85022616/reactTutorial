import React, { useLayoutEffect, useState } from 'react';
import '../../style/shopping/common/fullscreenDialog.scss';

function FullscreenDialog({ head, children, closeFullScreenDialog }) {

  const [open, setOpen] = useState(false)

  useLayoutEffect(()=>{
    setOpen(true)
  },[])

  return (
    <div className={`fullScreenDialog ${open? 'active': ''}`}>
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

export default FullscreenDialog;
