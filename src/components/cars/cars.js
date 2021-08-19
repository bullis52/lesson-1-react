import {createRef, useEffect, useState} from "react";
import {getCars, saveCars} from "../../services/fetch";
import {Cars2} from "./cars2";

export function Cars (){
    let [id,SetId] = useState('id')
    let [model,SetModel] = useState('model')
    let [price,setPrice] = useState('price')
    let [year,setYear] = useState('year')
    let [car,setCar] = useState({id:'',model:'',price:'',year:''})
    let carForSave = {}
    const onSubmitForm = (e)=>{
        e.preventDefault()
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
        let [cars,setCars] = useState([])
        useEffect(()=>{
            getCars().then(value => setCars([...value]))
        },[])
    let [info, setInfo] = useState('hide')


    return(
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text" id={'id'} value = {id} onInput={onInputChangeid}/>
                <input type="text" model={'model'} value = {model} onInput={onInputChangeModel}/>
                <input type="text" price={'price'} value={price} onInput={onInputChangePrice}/>
                <input type="text" year={'year'} value={year} onInput={onInputChangeYear}/>
                <button onClick={()=>{
                    if (info === 'hide') {
                        setInfo('show')
                    }}}>new car</button>
            </form>
            <div>
                <h3><b><i>this car been added to the car list:</i></b></h3>
                <p ><b><i>model: </i></b>{car.model}<b><i>; price: </i></b>{car.price}<b><i>; year: </i></b>{car.year}</p>
                <div>
                    <button onClick={()=>{
                            cars.sort(function (a,b){
                              return a.model.length-b.model.length
                            })
                        let item = cars
                    }}>sort</button>
                    {
                        item.map(value => <Cars2 item={value} key={value.id}/>)
                    }
                </div>
            </div>
        </div>
    )
}


