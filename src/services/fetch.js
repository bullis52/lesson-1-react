
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

const editCar = ({id, model, price, year}) => {
    fetch(`http://195.72.146.25/api/v1/cars/${id}`,{
        method: 'PUT',
        body: JSON.stringify({id, model, price, year}),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
}
const saveCars = ({id,model,price,year}) => {

    fetch('http://192.168.1.253/api/v1/cars',{
        method:'POST',
        body: JSON.stringify({id,model,price,year
            // title:'foo',
            // body:'bar,',
            // userId:1,
        }),
        headers:{
            'Content-type':'application/json; charst=UTF-8'
        },
    })
        .then((response ) => response.json())
        .then((json) => console.log(json))}
export {getCars,getCar,saveCars,deleteCar,editCar}

