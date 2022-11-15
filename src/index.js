const card1 = document.querySelectorAll(".card_notification");
const read = document.querySelector('.read_all');
const number = document.querySelector('.notification_counter');
let lista = [...card1];


lista.map(card =>{
    card.addEventListener('click', () => {
        card.classList.remove('card_notification');
        card.classList.add('card');        
        const card2 = document.querySelectorAll(".card_notification");
        number.innerText = card2.length;
    });
});

read.addEventListener('click', ()=>{
    lista.map(card=>{
        card.classList.remove('card_notification');
        card.classList.add('card');
    });
    number.innerText = 0;
});