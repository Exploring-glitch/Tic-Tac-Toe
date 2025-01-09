let  x = document.querySelectorAll("button"); //accessing all buttons (boxes)
console.log(typeof x,x)
let  resetBtn = document.querySelector("#resetBtn"); 

resetBtn.addEventListener('click',()=>{window.location.reload()})

let turnX = true; // player x or player y
let winningPaterns = [ //store your winning patterns 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7], 
    [2,5,8],
    [2,4,6],
    [3,4,5], 
    [6,7,8]
]

let grid=x;
x.forEach((button) => {   
    console.log(button)
    button.addEventListener ("click",() => {
        console.log("button was clicked");
        //whichplayerturn=turnX?"playerX":"playerO" (USING TERNARY OPERATOR FOR THE SAME)
           
        if(turnX) {                             
            button.innerText = "X";
            turnX = false;
            button.disabled = true; // no change after clicking for the 1st time
        }
        else {
            button.innerText = "O"; // for player O
            turnX = true;
            button.disabled = true; // no change after clicking for the 1st time
        }
        checkingWinner(grid); // function calling (after each click it checks the winning pattern
    })    
});


const checkingWinner = (x) => {
    console.log(typeof x)
    x.forEach(btn=>console.log(btn.innerText))

    
    for (let pattern of winningPaterns ) { 
        console.log(pattern) 
        // first value of pattern will be [0,1,2] 
        // pattern[0]=0// pattern[1]=1// pattern[2]=2
        let a = x[pattern[0]].innerText; // 0th position of a pattern example- patttern is [1,4,7] so a=1
        let b = x[pattern[1]].innerText; // 1st position of a pattern 
        let c = x[pattern[2]].innerText; // 2nd position of a pattern   
        console.log(JSON.stringify([a,b,c])) 

        if(JSON.stringify([a,b,c])==JSON.stringify(['X','X','X'])){

            let msz=document.getElementById("winnertext")
            msz.innerText="Congratulations! X is winner";
            msz.classList.toggle("hidden")   
        }


        if(JSON.stringify([a,b,c])==JSON.stringify(['O','O','O'])){

            let msz=document.getElementById("winnertext")
            msz.innerText = "Congratulations! O is winner";
            msz.classList.toggle("hidden")
        }

        //else{
            //let msz=document.getElementById("winnertext")
            //msz.innerText = "DRAW";
           // msz.classList.toggle("hidden")
        //}
    }
            
}
    



