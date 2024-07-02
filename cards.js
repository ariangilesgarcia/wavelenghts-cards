// main.js
const gameCards = [
    ['Hello', 'World'],
    ['Coffee', 'Tea'],
    ['Rain', 'Sunshine'],
    ['Mountain', 'Valley'],
    ['Summer', 'Winter'],
    ['Arian', 'Sofi']
];

function generateWords() {
    const pairIndex = Math.floor(Math.random() * gameCards.length);
    const selectedPair = gameCards[pairIndex];

    document.getElementById('leftWord').textContent = '👈 ' + selectedPair[0];
    document.getElementById('rightWord').textContent = selectedPair[1] + ' 👉';
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('newWordsBtn');
    btn.addEventListener('click', generateWords);
});
