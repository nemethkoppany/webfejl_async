class Manager{

    #callback

    constructor(){}

    callbackFunc(callback){
        this.#callback = callback;
    };

    add(array){
        this.#callback(array)
    }
}