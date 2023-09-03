let elJogador = 'X'; //X ou O
let quadradin = ['', '', '', '', '', '', '', '', ''];
let vencedor = null;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function mechendo(cellIndex) {
    if (!vencedor && quadradin[cellIndex] === '') {
        quadradin[cellIndex] = elJogador;
        document.getElementById('quadradin').children[cellIndex].textContent = elJogador;
        ovencedore();
        elJogador = elJogador === 'X' ? 'O' : 'X';
    }
}

function ovencedore() {//Esta função verifica se há um vencedor ou um empate. Ela faz isso percorrendo a matriz
    // winningCombos e verificando se alguma das combinações vencedoras foi alcançada.
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (quadradin[a] && quadradin[a] === quadradin[b] && quadradin[b] === quadradin[c]) {
            vencedor = quadradin[a];
            document.getElementById('vencedor').textContent = `${vencedor} venceu!`;
        }
    }
    if (!vencedor && quadradin.every(cell => cell !== '')) {
        document.getElementById('vencedor').textContent = 'Empate! ou melhor DEU VELHA';
    }
}

