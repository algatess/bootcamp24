var dis= document.getElementById('dis');

function Show(num){
    dis.value+=num
}
function Clean(){
    dis.value=""
}
function Process(){
    try{
        dis.value = eval(dis.value)
    }
    catch(error){
        dis.value = "Error"
    }
}