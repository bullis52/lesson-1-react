import {createRef, useState} from "react";
import {saveCars} from "../../services/fetch";

export function Cars (){
    let [id,SetId] = useState('id')
    let [model,SetModel] = useState('model')
    let [price,setPrice] = useState('price')
    let [year,setYear] = useState('year')
    let [car,setCar] = useState({id:'',model:'',price:'',year:''})
    let carForSave = {}
    const onSubmitForm = (e)=>{
        e.preventDefault()
        console.log(carForSave)
        let tempCar ={id,model,price,year}
        SetModel({...tempCar})
        saveCars(tempCar)
        setCar({...tempCar})
    }
    let onInputChangeid = (e) =>{
        let id = e.target.value
        SetId(id)
        carForSave.id = id
    }
    let onInputChangeModel = (e) =>{
        let model = e.target.value
        SetModel(model)
        carForSave.model = model
    }
    let onInputChangePrice = (e) =>{
        let price = e.target.value
        setPrice(price)
        carForSave.model = model
    }
    let onInputChangeYear = (e) =>{
        let year = e.target.value
        setYear(year)
        carForSave.year = year
    }
    return(
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text" id={'id'} value = {id} onInput={onInputChangeid}/>
                <input type="text" model={'model'} value = {model} onInput={onInputChangeModel}/>
                <input type="text" price={'price'} value={price} onInput={onInputChangePrice}/>
                <input type="text" year={'year'} value={year} onInput={onInputChangeYear}/>
                <input type="submit" value={'save'}/>
            </form>
            <div>{JSON.stringify(car)}</div>
        </div>
    )
}