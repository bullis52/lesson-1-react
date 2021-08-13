import {useEffect,useState} from "react";
import {getPostOfUser, getUsers} from "../../services/fetch";
import {User} from "./user";

export function Users(){
    let [users,setUsers] = useState([])
    let [posts,setPosts] = useState([])
    console.log(posts);

    useEffect(()=>{
        getUsers().then(({data}) => setUsers([...data]))
    },[])

    const postsOfUser = (id) => getPostOfUser(id).then(({data}) => setPosts(data));
    return(
        <div className={'post'}>
            <div>
                {
                    users.map(value => <User item={value} key={value.id} postsOfUser={postsOfUser}/>)
                }
            </div>
            <div>
                {posts && posts.map(value => <h2>{value.id} {value.title}</h2>)}
            </div>
        </div>


    )
}