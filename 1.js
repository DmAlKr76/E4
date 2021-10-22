const f1 = {
    a: 1,
    b: 2,
}

const f2 = Object.create(f1);
f2.c = "3";


function checkObj(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(`${key}: ${obj[key]}`)
        }
    }
}
console.log(f2)
checkObj(f2)