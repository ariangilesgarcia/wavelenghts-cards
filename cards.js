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
        ['Peronista', 'Antiperonista'],
        ['Votó a Cristina', 'Votó a Macri'],
        ['Fanático de Boca', 'Fanático de River'],
        ['Mate dulce', 'Mate amargo'],
        ['Ama Buenos Aires', 'Prefiere el interior'],
        ['Carnaval del Norte', 'Oktoberfest de Villa General Belgrano'],
        ['Toma Fernet', 'Prefiere vino'],
        ['Asado con achuras', 'Asado solo de carne'],
        ['Escucha Cumbia', 'Escucha Rock Nacional'],
        ['Veranea en Mar del Plata', 'Veranea en el Calafate'],
        ['Siesta obligatoria', 'Sin siesta'],
        ['Empanadas fritas', 'Empanadas al horno'],
        ['Cree en el Gauchito Gil', 'Escepticismo total'],
        ['Fútbol es pasión', 'Fútbol es solo un juego'],
        ['Dulce de leche en todo', 'Sin dulce de leche'],
        ['Tango', 'Folklore'],
        ['Colectivo lleno', 'Prefiere caminar'],
        ['Uso diario del bidet', 'Nunca usa el bidet'],
        ['Ciudadanía italiana', 'Solo ciudadanía argentina'],
        ['Calle Florida un sábado', 'Un parque tranquilo'],
        ['Milanesa con puré', 'Milanesa con fritas'],
        ['Alfajores de maicena', 'Alfajores de chocolate'],
        ['Leer a Borges', 'Leer a Sabato'],
        ['Amor por la Patagonia', 'Amor por las Cataratas del Iguazú'],
        ['Parrilla en la vereda', 'Asado en el patio'],
        ['Fiesta de la Vendimia', 'Carnaval de Gualeguaychú'],
        ['Obelisco como icono', 'El Faro del Fin del Mundo'],
        ['Lunfardo en cada frase', 'Español neutro'],
        ['Subte en hora pico', 'Bicisenda tranquila'],
        ['Rosario central', 'Newell’s Old Boys'],
        ['Choripán en Costanera', 'Pizza en Güerrin'],
        ['Helado de dulce de leche', 'Helado de limón'],
        ['Cumbia villera', 'Tango electrónico'],
        ['Murga en Carnaval', 'Fiesta Nacional del Sol'],
        ['Mercado de San Telmo', 'Shopping en Unicenter'],
        ['Clásico del cine argentino', 'Nueva ola de cine argentino'],
        ['Esquina Homero Manzi', 'Puente de la Mujer'],
        ['Fanático de Mercedes Sosa', 'Fanático de Charly García'],
        ['Monotributo', 'Relación de dependencia'],
        ['Paseo en el Delta', 'Trekking en El Chaltén'],
        ['Usa remera de Maradona', 'Usa remera del Che Guevara'],
        ['Avenida Corrientes de noche', 'Caminito de día'],
        ['Picada antes de la cena', 'Directo al plato principal'],
        ['Sabe hacer empanadas', 'Compra empanadas hechas'],
        ['Prefiere la Feria del Libro', 'Prefiere la Comic-Con'],
        ['Aconcagua', 'Perito Moreno'],
        ['Vino Malbec', 'Cerveza artesanal'],
        ['Recital en el Teatro Colón', 'Recital en el Luna Park'],
        ['Autoservicio', 'Atención personalizada'],
        ['Fanático del chamamé', 'Fanático del cuarteto'],
        ['Disfruta la peatonal, 'Disfruta el mall'],
        ['Juega al truco', 'Juega al poker'],
        ['Prefiere la radio', 'Prefiere podcasts'],
        ['San Martín', 'Belgrano'],
        ['Evita', 'Sarmiento'],
        ['Cerati', 'Spinetta'],
        ['Pollo con papas', 'Pollo con arroz'],
        ['Mate en calabaza', 'Mate de silicona'],
        ['Reunión en café', 'Reunión virtual'],
        ['Taxi', 'Uber'],
        ['Música a todo volumen', 'Silencio para trabajar'],
        ['Fanático de Sabina', 'Fanático de Calamaro'],
        ['Vivir cerca del trabajo', 'Commutar largas distancias'],
        ['Amante de la lluvia', 'Sol a pleno'],
        ['Café en La Biela', 'Café en Starbucks'],
        ['Pastelitos en feriado', 'Facturas el domingo'],
        ['Obra de teatro under', 'Musical en calle Corrientes'],
        ['Día en el MALBA', 'Día en Tecnópolis'],
        ['Pizza de cancha', 'Pizza de pizzería'],
        ['Cine nacional', 'Hollywood'],
        ['Periodismo deportivo', 'Periodismo político'],
        ['Plaza de Mayo en marcha', 'Plaza de Mayo en día tranquilo'],
        ['Parque Rivadavia', 'Bosques de Palermo'],
        ['Paddle en club', 'Fútbol 5 con amigos'],
        ['Cena de picada', 'Cena de tres platos'],
        ['Lectura de Cortázar', 'Lectura de Pizarnik'],
        ['Bailar cumbia en boda', 'Vals clásico en boda'],
        ['Torre de Babel de libros', 'Floralis Genérica'],
        ['Carrera de caballos', 'Carrera de galgos'],
        ['Mate de mañana', 'Café de tarde'],
        ['Calor de verano', 'Frío de invierno'],
        ['Desayuno continental', 'Desayuno americano'],
        ['Espera en Aeroparque', 'Espera en Ezeiza'],
        ['Heladería tradicional', 'Cadena de helados'],
        ['Feria de Mataderos', 'Recoleta Cultural'],
        ['Playa pública', 'Playa privada'],
        ['Fanático del básquet', 'Fanático del fútbol'],
        ['Murga barrial', 'Ballet en el Colón'],
        ['Café cortado', 'Capuchino'],
        ['Noche de películas', 'Noche de series'],
        ['Soda en sifón', 'Agua mineral']
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
