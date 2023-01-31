import { stat } from 'fs';
import React, { useCallback, useContext, useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { setBookAPI } from './API/apiKey';
import BookList from './components/BookList/BookList';
import Chat from './components/Chat/Chat';
import ContextApp from './components/context/ContextApp';
import Header from './components/Header/Header';
import ScrolIndicator from './components/ScrolIndicator/ScrolIndicator';
import onScroll from './helps/onScroll';
import { RootState } from './Redux/store';
function App() {
  const state  = useContext(ContextApp)
  const [scroll,setScroll] = useState<number>(0)
  const handleScroll = useCallback(()=>setScroll(onScroll()),[scroll])
  
  useEffect(()=>{
    state?.loadingHendler(true)
    window.addEventListener('scroll',handleScroll)
    setBookAPI()
    .then(data=>{
      state?.setBookList(data.items)
    })
    .then(()=>state?.loadingHendler(false))
    
    return ()=> window.removeEventListener('scroll',handleScroll)
  },[])
  
  return (
    <div className="App">
      <ScrolIndicator currentScroll = {scroll}/>
      <Header/>
      {
        state &&
          state?.filterBookList.length>0?
          <BookList 
          isLoading = {state.isLoading}
          bookList={state?.filterBookList}/>
          :<BookList 
          isLoading = {state?.isLoading}
          bookList={state?.bookList}/>
      }
     
    </div>
  );
}

export default App;
