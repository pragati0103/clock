function displayTime(){
    var d=new Date()
    var hrs=d.getHours();
    var min=d.getMinutes();
    var sec=d.getSeconds();
    var ses=document.getElementById('session');
    if (hrs>=12){
        session.innerHTML='PM';
        hrs=hrs-12;
    }
    else{
        session.innerHTML='AM';
    }
    
    document.getElementById('hrs').innerHTML=hrs;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;
}
setInterval(displayTime,10);