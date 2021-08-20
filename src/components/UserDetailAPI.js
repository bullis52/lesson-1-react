import {useEffect, useState} from "react";
import {getUser} from "../services/User-api";
import User from "./User";

export default function UserDetailsAPI(props) {
    let {match: {params: {id}}} = props;
    let [user, setUser] = useState({});

    useEffect(() => {
        getUser(id).then(value => setUser({...value}));
    }, [id]);
console.log(user)
    return (
        <div>
            <h1>
            {
                user.id
            }
            </h1>
            <h2>
                {
                    user.name
                }
            </h2>
            <p>
                {
                    user.email
                }
            </p>
        </div>
    );
}