function getTime() 
{
    return (new Date()).toLocaleTimeString();
}

document.getElementById('date').innerHTML = getTime();

setInterval(function() {
 
    document.getElementById('date').innerHTML = getTime();
     
}, 1000);