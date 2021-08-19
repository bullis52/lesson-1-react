// import {useState} from "react";
// import {editCar} from "../../services/fetch";
//
//
// export function EditForm({item}){
//
//     let [model,setModel] = useState([]);
//     let [price,setPrice] = useState([]);
//     let [year,setYear] = useState([]);
//     let [auto,setAuto] = useState({model:'', price:'',year:''})
//
//     const onSubmitForm = (e) => {
//         let id = item.id
//         let tempAuto = {id, model, price, year }
//         editCar(tempAuto)
//         e.preventDefault()
//         setAuto({...tempAuto})
//     }
//     console.log(auto)
//
//     const onInputChangeModel = (e) => {
//         let model = e.target.value
//         setModel(model)
//     }
//
//     const onInputChangePrice = (e) => {
//         let price = e.target.value
//         setPrice(price)
//     }
//
//     const onInputChangeYear = (e)=> {
//         let year = e.target.value
//         setYear(year)
//     }
//     let [info, setInfo] = useState('hide')
//     return(
//         <form onSubmit={onSubmitForm}>
//             {/*<input type="text" id={'id'} value = {id} onInput={onInputChangeid}/>*/}
//             <input type="text" model={'model'} placeholder={item.model} onInput={onInputChangeModel}/>
//             <input type="text" price={'price'} placeholder={item.price} onInput={onInputChangePrice}/>
//             <input type="text" year={'year'} placeholder={item.year} onInput={onInputChangeYear}/>
//             <button onClick={()=>{
//                 if (info === 'hide') {
//                     setInfo('show')
//                 }}}>new car</button>
//         </form>
//     )
// }