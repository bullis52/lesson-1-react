import axios from 'axios'

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
};
let axiosInstance = axios.create(config)

const getUsers = () => {
    return axiosInstance.get('users')
}
const getUser  = (id) => {
  return axiosInstance.get(`/users${id}`)
}
//todo heandle request


const getPostOfUser = (userId) => {
    return axiosInstance.get(`/users/${userId}/posts`)
}
const getComentOfPost = (postId) => {
    return axiosInstance.get(`/posts/${postId}/comments`)
}
export {getUsers,getUser,getPostOfUser,getComentOfPost}