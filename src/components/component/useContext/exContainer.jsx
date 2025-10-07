import React from 'react'
import {CountProvider} from './countContext';
import ExParent from './exParent';

//所有要用到useContext得組件都必須背包在Privide標籤內
function exContainer() {
  return (
    <CountProvider>
      <ExParent></ExParent>
    </CountProvider>
  )
}

export default exContainer