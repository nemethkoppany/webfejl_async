const service = new Service();
const view = new DataViewController();

service.init().then((value)=>{
    view.renderData(value);
});

service.realinit(1).then((value)=>{
    view.renderData(value);
});

service.realinit(3).catch((error)=>{
    view.renderError(erro);
});