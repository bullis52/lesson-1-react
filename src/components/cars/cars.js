import {useEffect, useState} from "react";
import {getCars} from "../../services/fetch";

export function Cars ({param}){
    const {url} = param.match
    let [cars,setCars] = useState([])
    useEffect(()=>{
        getCars().then(value => {setCars([...value])})
    },[])
    switch (url){
        case '/all':
            return cars.map(value => <div>{value.model}</div>)
        case '/even':
            return cars.filter(value => (value.model.length)%2===0).map(value => <div>{value.model}</div>)
        case '/odd':
            return cars.filter(value => (value.model.length)%2!==0).map(value => <div>{value.model}</div>)
        default:
            return <h1>ogo</h1>
    }
}