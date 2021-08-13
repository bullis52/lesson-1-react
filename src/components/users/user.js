export function User({item, postsOfUser}){

    return(
        <div className={'user'}>
            <h2>{item.id}-{item.name}</h2>
            <button onClick={ () => postsOfUser(item.id)}>click</button>
        </div>
    )
}
