function clearResult(){
    
    document.getElementById("result").value = "";
}
function clickCalculator(value){
    document.getElementById("result").value += value;

}
function sum(){
    let content = document.getElementById("result").value;
    let result = eval(content);
    document.getElementById("result").value = result;

}
