export  function User({item}){
    return(
        <div>
            <h2>{item.id} - {item.name} {item.username}</h2>
        </div>
    )
}