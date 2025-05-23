const form = document.getElementById("fruitPost");
const nameValue = document.getElementById("name").value;
const priceValue = document.getElementById("price").value;
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const obj = {
        name: nameValue,
        price: priceValue
    }
    fetch(" http://127.0.0.1:63013/fruits", {method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    .then(response =>{
        response.json()
    })
        .then(obj => {
            console.log(obj);
        })
})