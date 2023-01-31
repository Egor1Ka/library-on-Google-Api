import React, { FC, ReactChild, ReactChildren, ReactFragment, ReactNode, useCallback, useState } from "react"
import { searchBook } from "../../API/apiKey"
import ContextApp, { IpropsContext, Ivalue } from "./ContextApp"

interface contextProps{
    children:ReactChild | ReactNode
}

const ContextAppProvider:FC<contextProps> = ({children})=>{
    const [searchInput,setSearchInput] = useState<string>('') 
    const [bookList,setBookArr] = useState<any[]>([])
    const [filterBookList,setfilterBookList] = useState<any[]>([])
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [activeBook,setActiveBook] = useState({})

    const handleActiveBook = useCallback((book:any)=>{
        setActiveBook(book)
    },[activeBook])

    const setBookList = useCallback((newList:any[])=>{
        setBookArr(newList)
    },[bookList])

    const loadingHendler = useCallback((loading:boolean)=>{
        setIsLoading(loading)
    },[isLoading])

    const setFiletrBook = useCallback((newFilterArr:any[])=>{
        setfilterBookList(newFilterArr)
    },[filterBookList])

    const chengeSearchInput = useCallback((title:string)=>{
        setSearchInput(title)
    },[searchInput])

    return <ContextApp.Provider value={{
        searchInput,
        bookList,
        filterBookList,
        isLoading,
        activeBook,
        handleActiveBook,
        setBookList,
        chengeSearchInput,
        setFiletrBook,
        loadingHendler
    }
    }> 
        {children}
    </ContextApp.Provider>
}

export default ContextAppProvider