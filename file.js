let guess = document.getElementById("guess");
let btn = document.getElementById("btn");
let hint = document.getElementById("hint");
let attempt = document.getElementById("attempt");
let randomNum;
let counter = 0;

randomNum = Number(Math.floor(Math.random()*10+1));
console.log(randomNum);


function guessNumber()
{
    console.log("start"); 
    if(guess.value==randomNum)
        {
        console.log("equal");
         hint.innerHTML = "You are correct!";
    }
    else if (guess.value>randomNum)
    {
         console.log("high");
         hint.innerHTML = "Hint: Too High";
    }
    else
    {
         console.log("low");
         hint.innerHTML = "Hint: Too Low";
    }

}


btn.addEventListener("click", function()
{
    guessNumber();
    counter++;
    attempt.innerHTML = "Attempt: "+counter;    
})

