let totalClicks = 0;
let currentIncrement = 1;

// Add 1 click every click

function myClick() {   
    // totalClicks = totalClicks + currentIncrement;
    totalClicks = totalClicks + currentIncrement;
    document.getElementById("btn-current").innerHTML = "+ " + currentIncrement + " $";
    refresh();
}

// Autoclicker

function int() {
    let start = false;
    let id = setInterval(()=>{
        
        totalClicks += 1; 
        refresh();
        if(start == false) {
            setTimeout(()=>{
                clearInterval(id);
            },2000)
            start = true;
        } 
    }, 1000 );
}

function addition(price, inc) {
    if(totalClicks >= price){
        currentIncrement += inc;
        totalClicks -= price
        refresh()
    } else {
        alert("Vous n'avez pas assez !")
    }
}

function refresh() {
    document.getElementById("score").innerHTML = totalClicks + " $";
}




