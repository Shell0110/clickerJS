let totalClicks = 0;
let currentIncrement = 1;

function myClick() {    
    totalClicks = totalClicks + currentIncrement;
    refresh();
}

// Function Add / Shop

function refresh() {
    document.getElementById("score").innerHTML = totalClicks;
}

function addition(price, inc) {
    if(totalClicks >= price) {
        currentIncrement += inc;
        totalClicks -= price;
    } else {
        alert("Vous devez avoir " + price + "clicks !" )
    }
    refresh();
}

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






