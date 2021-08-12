
import {Comment} from "./comments2";


export  function Comments({items}){
    return(
        <div>
            {
                items.map((value,index) => <Comment item={value} key={index}/>)
            }
        </div>
    );
}