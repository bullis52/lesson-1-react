import {useEffect,useState} from "react";
import {User} from "./users2";
import {getUsers} from "../../services/user-services";

export  function Users(){
    let [users,setUsers] = useState([])

    useEffect(() => {

        getUsers().then( value => setUsers([...value]))

    },[])

    return(
        <div>
            {
                users.map(value => <User item={value} key={value.id}/>)
            }
        </div>
    );
}