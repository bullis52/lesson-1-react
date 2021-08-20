import {useEffect, useState} from "react";
import {getUser} from "../services/User-api";
import User from "./User";
import {getPost} from "../services/Post-api";

export default function PostDetailAPI(props) {
    let {match: {params: {id}}} = props;
    let [post, setPost] = useState({});

    useEffect(() => {
        getPost(id).then(value => setPost({...value}));
    }, [id]);
    console.log(post)
    return (
        <div>
            <h1>
                {
                    post.id
                }
            </h1>
            <h2>
                {
                    post.title
                }
            </h2>
            <p>
                {
                    post.body
                }
            </p>
        </div>
    );
}