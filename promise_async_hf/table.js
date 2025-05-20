class Table{

    #manager
    constructor(Manager){
        this.#manager = Manager;
        const div = document.createElement("div");
        document.body.appendChild(div);
        this.#manager.callbackFunc((array)=>{
            for(const pers of array){
                const div_pers = document.createElement("div");
                div_pers.textContent = `${pers.name} (${pers.age}) rendelkezik egy ${pers.car.color} színű ${pers.car.type} autóval.`
                div.appendChild(div_pers);
            }
        })
    }
}