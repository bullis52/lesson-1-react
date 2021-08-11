export  function Post({item}){
    return(
        <div>
            <h2>{item.userId} - {item.id} {item.title}</h2>
        </div>
    )
}