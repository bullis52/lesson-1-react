import {useEffect,useState} from "react";
import {Posts} from "../posts/posts";
import {getComentOfPost, getPostOfUser} from "../../services/user-services";
import {Comments} from "../comments/comments";

export  function User({item}){
    let [posts,setPosts] = useState([])


    useEffect(()=>{
        getPostOfUser(item.id).then(({data}) => setPosts([...data]))
    },[item.id])


    return(
        <div>
            <h2>{item.id} - {item.name} {item.username}</h2>
            <Posts items = {posts}/>
        </div>
    )
}