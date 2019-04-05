var request = new XMLHttpRequest();

request.open('GET', 'https://api.tronalddump.io/random/quote');
request.onload = function(){
    var data = JSON.parse(this.response)
    if(request.status >= 200 && request.status < 400){
        console.log(data);
    }else{
        console.log("error");
    }
   
}
request.send();