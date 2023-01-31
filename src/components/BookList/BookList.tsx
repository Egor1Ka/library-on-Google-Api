import React, { useReducer ,FC,useState, memo, useMemo} from 'react'
import reduser from '../context/reduser'
import BookItem from './BookItem'
interface IbookListProps {
    bookList?:any[],
    isLoading?:boolean
}
const BookList
    :FC<IbookListProps>=
    memo(({bookList,isLoading})=> {
    const bookListJSX = useMemo(()=><div className={'bookList'}>
        {isLoading?
        'loading...':
        bookList?.map((book,i)=><BookItem 
            key={book.volumeInfo.title + i}
            index={i}
            book={book}
        />)}
        </div>,
    [bookList,isLoading])

    return <>{bookListJSX}</>
})

export default BookList
