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

export {saveCars}
