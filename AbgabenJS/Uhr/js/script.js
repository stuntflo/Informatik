function func() 
{
    var hour = document.getElementById("hour").value;
    var minute = document.getElementById("minute").value;
    
    if(minute < 30)
    {
         minute = 0;
    }   
    else if(minute >= 30 && minute < 60)
    {
         minute = 30;
    }   
    
    if(hour > 23 || minute >= 60)
    {
        alert("Falsche Eingabe");
    }  
    else
    {
        erg(hour, minute);
    }
}
function erg(hour, minute)
{
    
    if(hour % 4 == 0 && minute == 0)
    {
            alert("dingding dingding dingding dingding");
    }
    else if(hour % 4 == 0 && minute == 30)
    {
            alert("ding");
    }
    else if(hour % 4 == 1 && minute == 0)
    {
            alert("dingding");
    }
    else if(hour % 4 == 1 && minute == 30)
    {
            alert("dingding ding");
    }
    else if(hour % 4 == 2 && minute == 0)
    {
            alert("dingding dingding");
    }
    else if(hour % 4 == 2 && minute == 30)
    {
            alert("dingding dingding ding");
    }
    else if(hour % 4 == 3 && minute == 0)
    {
            alert("dingding dingding dingding");
    }
    else if(hour % 4 == 3 && minute == 30)
    {
            alert("dingding dingding dingding ding");
    }
}
