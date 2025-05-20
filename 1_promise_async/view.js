class DataViewController{
    #div

    constructor(){
        const div = document.createElement("div");
        this.#div = div;
        document.body.appendChild(this.#div);
        this.#div.textContent = `Loading...`
    }

    renderData(array){
        this.#div.innerHTML = "";
        for(const i of array){
            const div = document.createElement("div");
            div.textContent = [i.name, i.age, i.sex];
            this.#div.appendChild(div);
        }
    }

    renderError(errorMessage){
        this.#div.textContent = errorMessage;
    }
}