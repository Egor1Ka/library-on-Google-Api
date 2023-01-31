import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useDispatch, useSelector } from 'react-redux'
import { setBook } from '../../Redux/ActiveBookSlice'
import ContextApp from '../context/ContextApp'
import {RootState} from './../../Redux/store'
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams
} from "react-router-dom";



export default function BookItem({book,index}:any) {
  const { ref, inView, entry }=useInView()
  const state = useContext(ContextApp)
  const [isSeen,setIsSeen] = useState(false)
  let amount:null|string|number = null  
  let smallThumbnail:undefined|string = undefined
 
  useEffect(()=>{
    setIsSeen(inView)
  },[inView])

  const handleClick = useCallback(()=>{
    state?.handleActiveBook(book)
  },[])

  
  const {
    volumeInfo:{
      title,
      imageLinks,
      pageCount,
      publishedDate
    },saleInfo:{
      listPrice,
    }
  }=book

  if(book.volumeInfo.imageLinks === undefined){
    smallThumbnail = 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'
  }else{
    smallThumbnail = book.volumeInfo.imageLinks.smallThumbnail
  }
  
  if(!listPrice){
    amount = 'недоступно'
  }else{
    amount = listPrice.amount
  }

  return <Link to ='book'><div
    onClick = {handleClick}
    className={'container'}
    ref={ref}>
    <div className={`book-item ${isSeen?'seen':'white'}`}>
      <h2 className='AB-title'>{title}</h2>
      <img 
      className='blok-item-img'
      src={smallThumbnail}/>
      <h2 className='book-item-'>{amount} {amount==='недоступно'?<></>:<>UA</>}</h2>
      <div className='book-item-pages'>{pageCount} pages</div>
      <div>{publishedDate}</div>
    </div>
    </div>
  </Link>
  
}
