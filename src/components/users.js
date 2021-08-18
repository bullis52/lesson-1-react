import {useEffect, useState} from "react";
import {getUsers} from "../services/fetch";

export function User(){
    let [users,setUsers] = useState([])
    useEffect(()=>{
        getUsers().then(value => setUsers([...value]))
    })
    return(
        <div>
            {
                users.map(value => <div>{value.name}</div>)
            }
        </div>
    )
}