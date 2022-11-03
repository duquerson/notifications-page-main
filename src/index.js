const cards = document.querySelectorAll(".body_card-notifications");
const mark = document.querySelector('#mark_all');
const noticia = document.querySelector("#notifications");


cards.forEach(card =>{
    card.addEventListener('click', () => {
        card.classList.remove('body_card-notifications');
        card.classList.add('body_card');
        const puntos = document.querySelector('.container_text-notification');
        puntos.classList.remove('container_text-notification');
        const newcards = document.querySelectorAll(".body_card-notifications");
        noticia.innerText = newcards.length;
        
    });
});

mark.addEventListener('click', ()=>{
    cards.forEach(card=>{
        card.classList.remove('body_card-notifications');
        card.classList.add('body_card');
        const puntos = document.querySelector('.container_text-notification');
        puntos.classList.remove('container_text-notification');
        const newcards = document.querySelectorAll(".body_card-notifications");
        noticia.innerText = newcards.length;
    });
});