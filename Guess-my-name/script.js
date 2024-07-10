'use strict'
// document.querySelector('.number').value=5; --->Acces a value
// document.querySelector('.guess').textcontent="something"; --->Acces a string

const secretNumber=Math.trunc((Math.random())*20)+1;
let maxnumber=20;
document.querySelector('.number1').textContent=Math.trunc(maxnumber/2.25);
document.querySelector('#guess').value=1;
document.querySelector('#check').addEventListener('click',function()
{
    document.querySelector('.number').textContent=(document.querySelector('#guess').value);

    const guess=Number(document.querySelector('#guess').value);
     if(guess===secretNumber)
    {
        document.querySelector('.message').textContent="Correct Answer🎊";
        document.querySelector('.number2').textContent=document.querySelector('.number1').textContent;
        document.querySelector('.number1').textContent=maxnumber;
    }
    else if(guess<secretNumber)
    {
        if(guess<0.5*secretNumber)
        {
            document.querySelector('.message').textContent="Too Low📉";
            let minus=document.querySelector('.number1').textContent;
            document.querySelector('.number1').textContent=minus-1;
        }
         if(guess>0.5*secretNumber)
        {
           document.querySelector('.message').textContent="Too close📉";
           let minus=document.querySelector('.number1').textContent;
           document.querySelector('.number1').textContent=minus-1;
        }
    }
    else if(guess>secretNumber)
    {
        if(guess>2*secretNumber)
        {
            document.querySelector('.message').textContent="Too High📈";
            let minus=document.querySelector('.number1').textContent;
            document.querySelector('.number1').textContent=minus-1;
        }
        if(guess<2*secretNumber)
        {
            document.querySelector('.message').textContent="Too close📈";
            let minus=document.querySelector('.number1').textContent;
            document.querySelector('.number1').textContent=minus-1;
        }
    }
    if(document.querySelector('.number1').textContent==0)
    {
        document.querySelector('.message').textContent="You Lost😢";
        document.querySelector('.number').textContent=secretNumber;
    }
    
})