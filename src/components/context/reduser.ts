interface Istate {
    searchInput?:string,
    bookList?:any[]
}
export enum TypeAction {
    CHENGE_SEARCH_INPUT = 'CHENGE_SEARCH_INPUT',
    SET_BOOKS = 'SET_BOOKS'
}
interface Iaction {
    type: TypeAction
    payload:any 
}

export default function reduser(state:Istate,action:Iaction){
     
    switch(action.type){
        case(TypeAction.CHENGE_SEARCH_INPUT):
            return {...state,searchInput:action.payload}
        case (TypeAction.SET_BOOKS):
            console.log('action payload',action.payload)
            return {...state,bookList:action.payload}
        default: 
            return state
    }
}