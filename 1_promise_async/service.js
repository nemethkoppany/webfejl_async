class Service{
    #data

    constructor(){
        this.#data = people;
    }

    init(){
        return new Promise((resolve)=>{
            setTimeout(()=>{resolve(this.#data)},3000);
        })    
    }

    initInvalid(){
        return new Promise((reject) => {
            setTimeout(()=> {
                reject("Hiba");
            })
        })
    }

    realinit(num){
        return new Promise((resolve, reject)=>{
            if(num < 2){
                setTimeout(() =>{
                    resolve(this.#data);
                },1000)
            }
            else{
                setTimeout(()=>{
                    reject("Hiba");
                },1000)
            }
        })
    }
}
