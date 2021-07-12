let cards=[
    
    {
        image:"./images/squirrel.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"./images/squirrel.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"./images/rabbit.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"./images/rabbit.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"./images/dog.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"./images/dog.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"./images/cat.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"./images/cat.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"./images/lion.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"./images/lion.jpg",
        value:5,
        status:"closed"
    }
]
// console.dog(cards)

let temp;
for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;

}

let cardscopy=cards;

function displaycards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        <div class="card" style="background-image:url('${card.image}')">
            <div class=" overlay ${card.status}" onclick="opencard(${index})">
            </div>
        </div>
        `;

    });


    document.getElementById('cards').innerHTML=cardsString;

}

function startNewGame(){
    alert('yay you won! Do you want to start new game');
    location.reload();
}


displaycards(cards);


let cardcount=1;
let val1=null,val2=null;
let score=0;


function opencard(index){

    cards[index].status="opened";
    if(cardcount===1){
        val1=cards[index].value;
        cardcount++;
    }
    else if(cardcount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;
            val1=null;
            val2=null;
            cardcount=1;
            
        }
        else{
            alert("game over");
            location.reload();

        }
        
    }

    displaycards(cards);
    if(document.getElementById('score').innerText==5){
         startNewGame();
    }
    

}
