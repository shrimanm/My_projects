
let screen=document.getElementById('screen');
let button = document.querySelectorAll('button');
let screenvalue = '';
for(var item of button){
    item.addEventListener("click",(e)=>{
        var buttontext=e.target.innerText;

        if(buttontext=="X"){
            buttontext = "*";
            screenvalue = buttontext;
            screen.value += screenvalue;
        }
    else if(buttontext == "=")
    {
            screen.value = eval(screen.value);
    }
    else if(buttontext == "C"){
        screenvalue = "";
        screen.value = screenvalue;
    }
    else if(buttontext == "<"){
        screenvalue=screen.value.slice(0,-1);
        screen.value=screenvalue;

    }
    else if(buttontext=="sin"){
        screenvalue = "Math.sin(";
        screen.value += screenvalue;
    }
    else if(buttontext=="cos"){
        screenvalue = "Math.cos(";
        screen.value += screenvalue;
    }
    else if(buttontext=="tan"){
        screenvalue = "Math.cos(";
        screen.value += screenvalue;
    }
    else if(buttontext=="log"){
        buttontext="Math.log(";
        screenvalue = buttontext;
        screen.value += screenvalue;
    }
    else{
        screenvalue = buttontext;
        screen.value += screenvalue;
    }

    })
}

