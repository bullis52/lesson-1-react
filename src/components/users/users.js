import {useEffect,useState} from "react";
import {User} from "./users2";
import {getUsers} from "../../services/user-services";

export  function Users(){
    let [users,setUsers] = useState([])

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]))
    },[])

    return(
        <div>
            {
                users.map(value => <User item={value} key={value.id}/>)
            }
        </div>
    );
}