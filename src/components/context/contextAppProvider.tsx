import React, { FC, ReactChild, ReactChildren, ReactFragment, ReactNode, useCallback, useState } from "react"
import { searchBook } from "../../API/apiKey"
import ContextApp, { IpropsContext, Ivalue } from "./ContextApp"

interface contextProps{
    children:ReactChild | ReactNode
}

const ContextAppProvider:FC<contextProps> = ({children})=>{
    const [searchInput,setSearchInput] = useState('') 
    const [bookList,setBookArr] = useState<any[]>([])
    const [filterBookList,setfilterBookList] = useState<any[]>([])

    const setBookList = useCallback((newList:any[])=>{
        setBookArr(newList)
    },[bookList])

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
        setBookList,
        chengeSearchInput,
        setFiletrBook
    }
    }> 
        {children}
    </ContextApp.Provider>
}

export default ContextAppProvider