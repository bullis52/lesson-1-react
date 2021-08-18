import {useEffect, useState} from "react";
import {getComments} from "../services/fetch";

export function Comment(){
    let [comments,setComments] = useState([])
    useEffect(()=>{
        getComments().then(value => setComments([...value]))
    })
    return(
        <div>
            {
                comments.map(value => <div>{value.body}</div>)
            }
        </div>
    )
}