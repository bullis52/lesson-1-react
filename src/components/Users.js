import {useEffect, useState} from "react";
import User from "./User";
import {getUsers} from "../services/User-api";
import UserDetails from "./UserDetails";
import {Route, useLocation} from "react-router-dom";
import UserDetailsAPI from "./UserDetailAPI";

export default function Users(props) {
    let {match: {url}, history} = props;
    let [users, setUsers] = useState([]);

    useEffect( () => {
        const x = async ()=>{
            let response = await getUsers();
            setUsers([...response]);
        }
        x()
    }, [])
    return (
        <div>
            {users.map(value => <User history={history} item={value} key={value.id}/>)}
            {/*{users.map(value => <User item={value} key={value.id}/>)}*/}
            <hr/>


            {/*<Route path={`${url}/:id`} component={UserDetails}/>*/}
            <Route path={`${url}/:id`} render={(props) => {
                return <UserDetailsAPI {...props} />
            }}/>

        </div>
    );
}
