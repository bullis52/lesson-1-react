import {
    Link,
    withRouter
} from "react-router-dom";

function Post({item, history}) {
    console.log(history);
    const navigateTo1 = () => {
        history.push(`/posts/${item.id}`);
    };
    return (
        <div>
            {/*{item.name} - <Link to={{pathname:`/users/${item.id}`,state : item}}> user details</Link>*/}
            {/*{item.name} - <Link to={`/users/${item.id}`}> user details api sub fetch</Link>*/}
            {item.id} post - <button onClick={navigateTo1}>go to details</button>


        </div>
    );
}

export default withRouter(Post);