
function getCars(){
    return fetch(`http://192.168.1.253/api/v1/cars`)
        .then(value => value.json())
}
function getCar({id}){
    return fetch(`http://192.168.1.253/api/v1/cars`)
        .then(value => value.json())
}


function deleteCar(id){
    return fetch(`http://192.168.1.253/api/v1/cars/${id}`,{
        method: `DELETE`,
    })
}
function carPut({model, price, year}, id) {
    return fetch('http://192.168.1.253/api/v1/cars/' + id, {
        method: 'PUT',
        body: JSON.stringify({
            model, price, year
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}
const saveCars = ({model,price,year}) => {

    fetch('http://192.168.1.253/api/v1/cars',{
        method:'POST',
        body: JSON.stringify({model,price,year}),
        headers:{
            'Content-type':'application/json; charst=UTF-8'
        },
    })
        .then((response ) => response.json())
}
export {getCars,getCar,saveCars,deleteCar,carPut}

