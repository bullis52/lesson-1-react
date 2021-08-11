import {useEffect,useState} from "react";
import {Comment} from "./comments2";
import {getComments} from "../../services/comments-services";

export  function Comments(){
    let [comments,setComments] = useState([])

    useEffect(() => {

        getComments().then( value => setComments([...value]))

    },[])

    return(
        <div>
            {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
        </div>
    );
}