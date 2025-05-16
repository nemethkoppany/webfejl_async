const service = new Service();
const view = new DataViewController();

service.init().then((value)=>{
    view.renderData(value);
})