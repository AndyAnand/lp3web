function sumAll(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum+=arguments[i];
    }
    document.getElementById('a').innerHTML=sum;
    console.log(sum+"");
    return sum;
}