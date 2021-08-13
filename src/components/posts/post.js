export  function Post({item}){
    // let [comments,setComments] = useState([])
    // useEffect(()=>{
    //     getComentOfPost(item.id).then(({data}) => setComments([...data]))
    // },[item.id])

    return(
        <div>
            <ul>
                <li>{item.title}</li>
            </ul>
            {/*<Comments items = {comments}/>*/}
        </div>
    )
}