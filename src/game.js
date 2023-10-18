let clicked = '';
let arr = ['Rock', 'Paper','Scissor'];


const onClick = ()=>{
    let randomNumber = Math.round(Math.random()*1000 % 2);
    let compSelected = arr[randomNumber]; 
    console.log(compSelected);
    let result = document.querySelector('.result');

    if(clicked == compSelected){        
        result.innerHTML =`<h1> Computer chose : ${compSelected}<br> Match Draw!</h1>` ;
        result.style.color = '#595353';
        result.style.fontWeight = 'bold';
    }
    else if((clicked == 'Rock' && compSelected == 'Paper') || (clicked == 'Paper' && compSelected == 'Scissor')
        || clicked == 'Scissor' && compSelected == 'Rock' )
    {
        result.innerHTML =`<h1> Computer chose : ${compSelected}<br> You Lose!</h1>`;
        result.style.color = 'black';
        result.style.fontWeight = 'bold';
    }
    else {
        result.innerHTML =`<h1> Computer chose : ${compSelected}<br> You Win!</h1>`;
        result.style.color = '#052f05';
        result.style.fontWeight = 'darkgreen';
    }
};

document.querySelector('.image1').addEventListener('click',onClick);
document.querySelector('.image2').addEventListener('click',onClick);
document.querySelector('.image3').addEventListener('click',onClick);

