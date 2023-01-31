import { useEffect, useRef,useState } from "react"
import { useInView } from "react-intersection-observer"
import { getFirestore, 
    collection,
    addDoc,
    serverTimestamp,
    query,orderBy,
    limit,
    onSnapshot,
    getDoc,
    doc} from 'firebase/firestore';
import { app, fireStore } from "../..";
import { getMessaging } from 'firebase/messaging';
import { useToken } from 'react-firebase-hooks/messaging';
import { async } from "@firebase/util";

const Chat = ()=>{   
const [messages, setMessages] = useState([]);

const colection = collection( fireStore,'messageWithMe')

useEffect(()=> {
    
}, []);
    
    return <div 
        id="chat"
    >
        chat
    </div>
}

export default Chat 