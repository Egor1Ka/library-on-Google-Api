import React, { ChangeEventHandler, FormEvent, MouseEventHandler, useContext, useEffect, useReducer, useState } from 'react'
import { API_KEY, searchBook } from '../../API/apiKey'
import ContextApp from '../context/ContextApp'


function InputSearch() {
  const state = useContext(ContextApp)
  
  const handleChenge:ChangeEventHandler<HTMLInputElement> = (e)=>{
    state?.chengeSearchInput(e.target.value)
  }

  const handleSearch:MouseEventHandler<HTMLSourceElement> = (e)=>{
    if(state){
      if(state.searchInput.length<= 0 ){
        state.setFiletrBook([]) /// not working 
      }else {
        searchBook(state.searchInput)
        .then(data=>{
          state.setFiletrBook(data.items)
        })
      }    
    }
  }

  return <div className='input-container-header'>
      <input
      onChange={handleChenge}
      value={state?.searchInput}
      type="text" className='input-header'/>
      <span
      onClick={handleSearch}
      className='search-btn'></span>
    </div>
  
}

export default InputSearch
