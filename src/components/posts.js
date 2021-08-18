import {useEffect, useState} from "react";
import {getPosts} from "../services/fetch";

export function Post(){
    let [posts,setPost] = useState([])
    useEffect(()=>{
        getPosts().then(value => setPost([...value]))
    })
    return(
        <div>
            {
                posts.map(value => <div>{value.title}</div>)
            }
        </div>
    )
}