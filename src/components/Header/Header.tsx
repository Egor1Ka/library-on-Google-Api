import React from 'react'
import InputSearch from '../InputSearch/InputSearch'

export default function Header() {

  return <div className='header'>
      <div className='container'>
        <h1 className='header-h1'>Search for books</h1>
        <InputSearch />
      </div>
    </div>
  
}
