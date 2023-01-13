import React from 'react'

export default function BookItem({book}:any) {

  let amout:any = null
  // @ts-ignore 
  const {
    volumeInfo:{
      title,
      imageLinks:{smallThumbnail},
      pageCount,
      publishedDate
    },saleInfo:{
      selfLink,
    }
  }=book

  
  //if(book.saleInfo.listPrice.amout){
    //amout = book.saleInfo.listPrice.amout
  //}


  return <div>
    {title}
    <img src={smallThumbnail}/>
    <div>{pageCount}</div>
    <div>{publishedDate}</div>
    <div>
       
    </div>
  </div>
  
}
