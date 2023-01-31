export const API_KEY = 'AIzaSyA-ikkTFfQpIeFmn0k5zpk3QN_jK4uiRmo' 

export const searchBook = async(searchWord:string):Promise<any>=>{
    const response:any =await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchWord}:keyes&key=${API_KEY}`)
    const data = await response.json()
    return data 
}

export const setBookAPI = async()=>{
    const json = await fetch(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes`)
    const data = json.json()
    return data 
}
