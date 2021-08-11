import {useEffect,useState} from "react";
import {Post} from "./posts2";
import {getPosts} from "../../services/post-sevices";

export  function Posts(){
    let [post,setPosts] = useState([])

    useEffect(() => {

        getPosts().then( value => setPosts([...value]))

    },[])

    return(
        <div>
            {
                post.map(value => <Post item={value} key={value.id}/>)
            }
        </div>
    );
}