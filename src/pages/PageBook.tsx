import { Ref, useContext, useEffect, useReducer, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import ContextApp from "../components/context/ContextApp"
import {RootState} from './../Redux/store'

const PageBook = ()=>{
    const state = useContext(ContextApp)
    let smallThumbnail:string = ''
    let amount:string = ''

    useEffect(()=>{
        const textSnippetOBJ = document.getElementsByClassName('textSnippet')[0]
        textSnippetOBJ.innerHTML = textSnippet
    },[])

    console.log(state?.activeBook)

    const {
        volumeInfo:{
          title,
          imageLinks,
          pageCount,
          publishedDate,
          previewLin,
        },saleInfo:{
          listPrice,
          buyLink

        },
        searchInfo:{
            textSnippet
        },
        selfLink,
    }=state?.activeBook
    
    if(state?.activeBook?.volumeInfo?.imageLinks === undefined){
        smallThumbnail = ''
    }else{
        smallThumbnail = state?.activeBook?.volumeInfo.imageLinks.smallThumbnail as string
    }
      
    if(!listPrice){
    amount = 'недоступно'
    }else{
        amount = listPrice.amount
    }

    
    return <div className='AB-book-item'>
                <div className={'container AB-container'}>
                    <h2 className='AB-title'>{title}</h2>
                    <div className="AB-imgContainer">
                        <img 
                        className='AB-img'
                        src={smallThumbnail}/>
                        
                        <div
                            className="textSnippet" 
                        ></div>
                    </div>
                    <div className="AB-price-list">
                        <div className='AB-pageCount'>{pageCount} pages</div>
                        <div className="AB-publishedDate">{publishedDate} year</div>
                        <div>
                            {amount}
                            {amount==='недоступно'?<></>:<>UA</>}
                        </div>  
                    </div>   

                    <a 
                        className="Ab-refLink-button"
                        href={`${buyLink}`}
                        target="_blank"
                    >
                        <button 
                        className="AB-by-button"
                        disabled ={!buyLink}
                        >
                            buy
                         </button>    
                    </a>                            

            </div>
        </div>
}
export default PageBook