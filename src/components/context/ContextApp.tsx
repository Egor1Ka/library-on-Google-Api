import { createContext, useContext } from "react";
export interface IpropsContext{
    searchInput :string,
    bookList:any[],
    filterBookList:any[],
    isLoading:boolean,
    activeBook:any,
    handleActiveBook:(book:any)=>void,
    setBookList:(newList:any[])=>void
    chengeSearchInput:(title:string)=>void,
    setFiletrBook:(newFilterArr:any[])=>void,
    loadingHendler:(loading:boolean)=>void
}
export interface Ivalue{
    searchInput :string,
    bookList:any[],
    filterBookList:any[],
}
const ContextApp =  createContext<IpropsContext|null>(null)

export default ContextApp
