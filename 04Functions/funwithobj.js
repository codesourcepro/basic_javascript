function addCartPrice(val1, val2, ...num1){
    return num1
}
console.log(addCartPrice(200,300,500));

const user = {
    name:'promod',
    price: 200
}

const arr = [200, 300, 400, 500]

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}

handleObject(user)

function handleArray(anyArray){
    return anyArray[3]
}
console.log(handleArray(arr));