import { createContext, useContext } from "react";
export interface IpropsContext{
    searchInput :string,
    bookList:any[],
    filterBookList:any[],
    setBookList:(newList:any[])=>void
    chengeSearchInput:(title:string)=>void,
    setFiletrBook:(newFilterArr:any[])=>void
}
export interface Ivalue{
    searchInput :string,
    bookList:any[],
    filterBookList:any[],
}
const ContextApp =  createContext<IpropsContext|null>(null)

export default ContextApp
