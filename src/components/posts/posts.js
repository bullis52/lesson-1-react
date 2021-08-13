import {Post} from "./post";

export function Posts({item}){
    return(
        <div>
            {
                item.map(value => <Post item={value} key = {value.id}/>)
            }
        </div>
    )
}