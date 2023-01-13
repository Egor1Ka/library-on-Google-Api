import React, { useCallback, useContext, useEffect, useReducer, useState } from 'react';
import { setBookAPI } from './API/apiKey';
import BookList from './components/BookList/BookList';
import ContextApp from './components/context/ContextApp';
import Header from './components/Header/Header';
import ScrolIndicator from './components/ScrolIndicator/ScrolIndicator';
import onScroll from './helps/onScroll';

function App() {
  const state  = useContext(ContextApp)
  const [scroll,setScroll] = useState<number>(0)
  const handleScroll = useCallback(()=>setScroll(onScroll()),[scroll])

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    setBookAPI()
    .then(data=>{
      state?.setBookList(data.items)
    })

    return ()=> window.removeEventListener('scroll',handleScroll)
  },[])

  return (
    <div className="App">
      <ScrolIndicator currentScroll = {scroll}/>
      <Header/>
      {
        state &&
          state?.filterBookList.length>0?
          <BookList bookList={state?.filterBookList}/>
          :<BookList bookList={state?.bookList}/>
      }
    </div>
  );
}

export default App;
