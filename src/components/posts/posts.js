import {useEffect,useState} from "react";
import {Post} from "./posts2";
import {getPosts} from "../../services/post-sevices";

export function Posts({items}){

    return(
        <div>
            {
                items.map(value => <Post item={value} key = {value.id}/>)
            }
        </div>
    )
}