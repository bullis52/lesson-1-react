import {useEffect, useState} from "react";
import {getUsers} from "../services/User-api";
import {Route} from "react-router-dom";
import Post from "./Post";
import PostDetailAPI from "./postDetailAPI";
import {getPosts} from "../services/Post-api";

export default function Posts(props) {
    let {match: {url}, history} = props;
    let [posts, setPosts] = useState([]);

    useEffect(async () => {
        let response = await getPosts();
        setPosts([...response]);
    }, [])
    return (
        <div className={'wrap-btn'}>
            {posts.map(value => <Post history={history} item={value} key={value.id}/>)}
            {/*{users.map(value => <User item={value} key={value.id}/>)}*/}
            <hr/>


            {/*<Route path={`${url}/:id`} component={UserDetails}/>*/}
            <Route path={`${url}/:id`} render={(props) => {
                return <PostDetailAPI {...props} />
            }}/>

        </div>
    );
}