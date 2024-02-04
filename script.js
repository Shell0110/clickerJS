let totalClicks = 0;
let currentIncrement = 1;

function myClick() {  
    
    totalClicks = totalClicks + currentIncrement;

    refresh();
}



// Function Add / Shop

// function add10() {
    
//     if(totalClicks >= 100) {
//         currentIncrement += 10;
//         totalClicks -= 100;
//     } else {
//         alert("Vous devez avoir 100 clicks !")
//     }
//     refresh();
// }


// function add100() {
//     if(totalClicks >= 1000) {
//         currentIncrement += 100;
//         totalClicks -= 1000;
//     } else {
//         alert("Vous devez avoir 1k clicks !")
//     }
//     refresh();
// }

// function add10k() {
//     if(totalClicks >= 100000) {
//         currentIncrement += 10000;
//         totalClicks -= 100000;
//     } else {
//         alert("Vous devez avoir 100k clicks !");
//     }
    
//     refresh();
// }

// function add1m() {
//     if(totalClicks >= 100000000) {
//         currentIncrement += 1000000;
//         totalClicks -= 100000000;
//     } else {
//         alert("Vous devez avoir 1M clicks !")
//     }
//     refresh();
// }



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


function interval() {
    return 0;
    
}

// function int() {
//     let lambda = () => {
//         totalClicks += 1;
//         refresh();
//     }
    
//     lambda();
//     let id = setInterval(lambda, 1000);
//     setTimeout(()=> clearInterval(id), 3000);
// }





