// main.js
const cardSets = {
    defaultCards: [
        ['Bueno', 'Malo'],
        ['Muy adictivo', 'Poco adictivo'],
        ['Frío', 'Caliente'],
        ['Raro', 'Normal'],
        ['Colorido', 'Sin color'],
        ['Alto en calorías', 'Bajo en calorías'],
        ['Se siente bien', 'Se siente mal'],
        ['Esencial', 'Innecesario'],
        ['Caro', 'Barato'],
        ['Arma sobrevalorada', 'Arma subestimada'],
        ['Común', 'Raro'],
        ['Materia difícil', 'Materia fácil'],
        ['Famoso', 'Desconocido'],
        ['Fácil de usar', 'Difícil de usar'],
        ['Con cable', 'Normal'],
        ['Limpio', 'Sucio'],
        ['Requiere habilidad', 'Requiere suerte'],
        ['Sabroso', 'Sin sabor'],
        ['Tema fascinante', 'Tema aburrido'],
        ['Buenos actores', 'Mal actor'],
        ['Hipster', 'Básico'],
        ['Trabajo seguro', 'Trabajo peligroso'],
        ['Ciencia ficción', 'Fantasía'],
        ['Formal', 'Casual'],
        ['Sobrepagado', 'Subpagado'],
        ['Húmedo', 'Seco'],
        ['Habilidad sobrevalorada', 'Habilidad subestimada'],
        ['Alentado', 'Prohibido'],
        ['Canción feliz', 'Canción triste'],
        ['Duradero', 'Frágil'],
        ['Dork', 'Geek'],
        ['Malo', 'Bueno'],
        ['Mejor día del año', 'Peor día del año'],
        ['Buena costumbre', 'Mala costumbre'],
        ['Persona de perros', 'Persona de gatos'],
        ['Amor abierto', 'Placer culposo'],
        ['Talentoso', 'Sin talento'],
        ['Luz', 'Oscuridad'],
        ['Actor sobrevalorado', 'Actor subestimado'],
        ['Fácil de encontrar', 'Difícil de encontrar'],
        ['Hombre hermoso', 'Hombre feo'],
        ['Fácil de recordar', 'Difícil de recordar'],
        ['Alto nivel', 'Bajo nivel'],
        ['Saludable', 'No saludable'],
        ['Hombre bueno', 'Hombre malo'],
        ['Históricamente irrelevante', 'Históricamente importante'],
        ['Peludo', 'Sin pelo'],
        ['Flexible', 'Inflexible'],
        ['Mascota exótica', 'Mascota normal'],
        ['Extrovertido', 'Introvertido'],
        ['La película fue mejor', 'El libro fue mejor'],
        ['Buena película', 'Mala película'],
        ['Hermoso', 'Feo'],
        ['Ocurre de repente', 'Ocurre lentamente'],
        ['Carrera', 'Trabajo'],
        ['Odiado', 'Amado'],
        ['El Lado Oscuro de la Fuerza', 'El Lado Luminoso de la Fuerza'],
        ['Buena cobertura para pizza', 'Mala cobertura para pizza'],
        ['Utopía', 'Distopía'],
        ['Persona inmadura', 'Persona madura'],
        ['Cosa sobrevalorada para poseer', 'Cosa subestimada para poseer'],
        ['Persona agradable', 'Persona desagradable'],
        ['Película de aventuras', 'Película de acción'],
        ['Legal', 'Ilegal'],
        ['Pensamiento superficial', 'Pensamiento profundo'],
        ['Buena escuela', 'Mala escuela'],
        ['Siempre a tiempo', 'Nunca a tiempo'],
        ['Vivirá hasta los 100', 'No vivirá hasta los 100'],
        ['Buen personaje de Disney', 'Mal personaje de Disney'],
        ['Buen presidente', 'Mal presidente'],
        ['Extraño', 'Raro'],
        ['Infame', 'Famoso'],
        ['Dios más poderoso', 'Dios menos poderoso'],
        ['Persona divertida', 'Persona aburrida'],
        ['Libro sobrevalorado', 'Libro subestimado'],
        ['Mejor quehacer', 'Peor quehacer'],
        ['Especie sobre poblada', 'Especie en peligro'],
        ['Verde', 'Azul'],
        ['Aterrador', 'Emocionante'],
        ['Inesperado', 'Esperado'],
        ['Persona que te golpearía', 'Persona a la que podrías golpear'],
        ['Juego sobrevalorado', 'Juego subestimado'],
        ['No quieres que tus padres te vean hacerlo', 'Quieres que tus padres te vean hacerlo'],
        ['Personas malas', 'Personas buenas'],
        ['Atleta', 'Nerd'],
    ],
    customCards: [
        ['Atleta', 'Nerd'],
    ]
};

const colorThemes = {
    defaultCards: {
        left: '#54a9d0',
        right: '#fa723a'
    },
    customCards: {
        left: '#fa723a',
        right: '#54a9d0'
    }
};

let currentSet = 'defaultCards';  // Default set
let cardPairs = cardSets[currentSet];

function getCardPair() {
    const pairIndex = Math.floor(Math.random() * cardPairs.length);
    const selectedPair = cardPairs[pairIndex];
    document.getElementById('leftCard').textContent = '👈 ' + selectedPair[0];
    document.getElementById('rightCard').textContent = selectedPair[1] + ' 👉';
}

function switchCardSet() {
    currentSet = currentSet === 'defaultCards' ? 'customCards' : 'defaultCards';  // Toggle between sets
    cardPairs = cardSets[currentSet];
    getCardPair();  // Display new words immediately upon switching

     // Update background colors based on the current set
     document.querySelector('.left').style.backgroundColor = colorThemes[currentSet].left;
     document.querySelector('.right').style.backgroundColor = colorThemes[currentSet].right;
}

document.addEventListener('DOMContentLoaded', () => {
    getCardPair();  // Display initial pair
    document.getElementById('newCardsButton').addEventListener('click', getCardPair);
    document.getElementById('switchSetButton').addEventListener('click', switchCardSet);

    // Initial background color setup
    document.querySelector('.left').style.backgroundColor = colorThemes[currentSet].left;
    document.querySelector('.right').style.backgroundColor = colorThemes[currentSet].right;
});
