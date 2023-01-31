import { prependOnceListener } from 'process'
import React, { FC, useEffect, useRef } from 'react'

interface Iscroll{
  currentScroll:number
}

const ScrolIndicator:FC<Iscroll>=({currentScroll})=> {   
    return <div className='scrollIndicator' >
      <div 
      style={{width:`${currentScroll}%`}}
      className = 'preoressScrollIndicator'></div>
  </div>

}

export default ScrolIndicator
