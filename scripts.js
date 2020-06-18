const cards= document.querySelectorAll('.memory-card');

let hasFlipped= false;
let lockBoard=false;
let firstCard, secondCard;

function flipcard(){
    if(lockBoard) return;
    if(firstCard=== this)
        return;
    this.classList.add('flip');
    if(!hasFlipped){

        hasFlipped= true;
        firstCard= this;
        return;
    }
        //console.log(hasFlipped, firstCard);

            hasFlipped= false;
            secondCard= this;

            checkformatch();
        
    }

function checkformatch(){
       console.log(firstCard.dataset.emoji);
           console.log(secondCard.dataset.emoji);
           if(firstCard.dataset.emoji === secondCard.dataset.emoji){
            disableCards();

        }

        else{
            unflipCards();
           
        }
}

function disableCards(){
    firstCard.removeEventListener('click',flipcard);
    secondCard.removeEventListener('click',flipcard);

}
function unflipCards(){
    lockBoard=true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);


}
function resetBoard(){
    [hasFlipped,lockBoard]= [false,false];
    [firstCard,secondCard]= [null,null];

}
(function shuffle(){
    cards.forEach(card =>{
        let rnd= Math.floor(Math.random()* 12);
        card.style.order= rnd;
    });
})();

cards.forEach(card => card.addEventListener('click', flipcard))
