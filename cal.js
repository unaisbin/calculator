
function clearAll(){
    result.value = ""
}
function back(){
    result.value = result.value.slice(0,-1)
}
function view(n){
    console.log(n);
    result.value+=n
}
function equal() {
    try{
    result.value =eval(result.value)
    }
    catch{
        result.value='error'
        setTimeout(()=>{
            result.value=""
        },1000)
    }
    
}