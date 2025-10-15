import React from 'react'
import FullscreenDialog from '../common/fullscreenDialog'

function CreateDialog({closeCreateDialog}) {
  return (
    <div className='createDialog'>
      <FullscreenDialog head={"新增收貨人"} closeFullScreenDialog={closeCreateDialog}></FullscreenDialog>
    </div>
  )
}

export default CreateDialog
