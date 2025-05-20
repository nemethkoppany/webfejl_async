class Loader{
    constructor(Service, Manager){
        const button = document.createElement("button");
        document.body.appendChild(button);
button.textContent = "Betöltés";
        button.onclick = () => {
            Service.create().then((people) => {
                Manager.add(people);
            });
        };
        
        Manager.add(people);
    }
}