//////////////////////////////////////////////////////////////

function buyApple(num){
    if(num < 5){
        return Promise.resolve(`Van ennyi almánk`)
    }
    else{
        return Promise.reject(`Nincs ennyi almánk`)
    }
}

//Először ez fut le
const ApplePromise = buyApple(4);
console.log(ApplePromise);

//Másodszor ez
ApplePromise.then(value =>{
    console.log(value);//Negyedikként pedig ez
})

//És harmadszor ez
console.log(ApplePromise);


//Ha a hibás értéket akarjuk kiírni
const ApplePromise_2 = buyApple(6).catch(error => {
    console.log(error);
});
console.log(ApplePromise_2);

//Ha mind a kettőt meg akarjuk nézni(hogy van e elég alma vagy nincs)
const ApplePromise_3 = buyApple(4).then(value =>{
    console.log(value);
})
.catch(error => {
    console.log(error);
})
//////////////////////////////////////////////////////////////

//Gyakorlatilag ugyan mint az első függvény csak másmilyen
function buyApple2(num){
    return new Promise((resolve, reject)=> {
        if(num < 5){
            resolve(`Van elég alma`)
        }
        else{
            reject(`Nicns elég alma`)
        }
    }) 
}
const ApplePromise_4 = buyApple2(4).then(value =>{
    console.log(value);
})
.catch(error => {
    console.log(error);
})

//////////////////////////////////////////////////////////////

function buyApple3(num){
    return new Promise((resolve, reject)=> {
        if(num < 5){
            setTimeout(()=>{resolve(`Van elég alma`)},1000)
        }
        else{
            setTimeout(()=>{reject(`Nicns elég alma`)},1000)
            
        }
    }) 
   
}
const ApplePromise_5 = buyApple3(4).then(value =>{
    console.log(value);
})
.catch(error => {
    console.log(error);
})

//////////////////////////////////////////////////////////////