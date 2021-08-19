import {deleteCar} from "../../services/fetch";
import {useState} from "react";
import {EditForm} from "./cars-edit";

export function Cars2({item}){
// const remove = ()=>{
//     {deleteCar({item})
// }
    let [editCar1,setEditCar] = useState([])
    return(
        <div>
            <h1>id-{item.id} model-{item.model}</h1>
            <h2>price-{item.price} year-{item.year}</h2>
            <button onClick = {()=>{
                deleteCar(item.id);
            }}>delete</button>
            <button onClick={()=>{
                    (setEditCar(<EditForm item = {item}/>))
            }}>edit</button>
            <div>
                {editCar1}
            </div>

        </div>
    )
}