import React, { useReducer ,FC,useState, memo} from 'react'
import reduser from '../context/reduser'
import BookItem from './BookItem'
interface IbookListProps {
    bookList?:any[]
}
const BookList
    :FC<IbookListProps>=
    memo(({bookList})=> {

    return <div>
        {bookList?
        bookList.map(book=><BookItem 
            key={book.id}
            book={book}
        />)
        :'loading'}
    </div>
})

export default BookList
