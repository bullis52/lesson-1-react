let url1 = 'https://jsonplaceholder.typicode.com/posts';
const getPosts = () => {
    return fetch(url1)
        .then(value => value.json())
}
const getPost = (id) => {
    return fetch(url1 + '/' + id)
        .then(value => value.json())
}


export {getPosts,getPost}