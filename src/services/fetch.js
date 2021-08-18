function getUsers(){
    return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(value => value.json())
}
function getUser(id){
    return fetch('https://jsonplaceholder.typicode.com/users'+id)
        .then(value => value.json())
}
function getPosts(){
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(value => value.json())
}
function getPost(id){
    return fetch('https://jsonplaceholder.typicode.com/posts'+id)
        .then(value => value.json())
}
function getComments(){
    return fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(value => value.json())
}
function getComment(id){
    return fetch('https://jsonplaceholder.typicode.com/comment'+id)
        .then(value => value.json())
}
export {getUsers,getUser,getPosts,getPost,getComments,getComment}
