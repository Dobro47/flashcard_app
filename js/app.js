const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

let words = {
    Hello: "Ciao",
    Goodbye: "Ciao",
    Yes: "Si",
    No: "No",
    Please: "Per favore",
    ["Thank you"]: "Grazie",
    ["You're welcome"]: "Prego",
    Cheers: "Salute!",
    ["Excuse me (for attention)"]: "Scusi",
    ["Excuse me (to pass by)"]: "Permesso",
    ["Do you speak English?"]: "Parla Inglese?",
    ["I dont understand"]: "Non capisco",
    ["I'm sorry"]: "Mi Dispiace"
}

let data = Object.entries(words)

function getRandomWord(){
    randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `<h3> ${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3> ${randomTerm[1]}</h3`;
}


checkButton.addEventListener('click', function(){
    definition.style.display = 'block';
});

nextButton.addEventListener('click', function(){
    getRandomWord();
    definition.style.display ='none';
});