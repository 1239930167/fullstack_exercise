
const TV = {
    open: function () {
        console.log('打开电视');
    },
    close: function () {
        console.log('关闭电视');

    }
}
const AirConditional = {

}
function setCommand(option){
    if("open" in option){
    option.execute=option.execute();
    option.execute();
    }
}