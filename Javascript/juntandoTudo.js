//lista com nome do aluno, nota1, nota2 média reprovado ou aprovado
//qual o tamanho da lista?
let x = prompt("Digite a quantidade de alunos: ");

let alunos = [];
let notasGeral = [];
let cont = 0;
let medias = [];

//receber nome dos aluno e notas(1 e 2) e calcular média
for (let i = 0; i < x; i++) {
    alunos[i] = prompt("Digite o nome do " + (i + 1) + "º aluno:");
    medias[i] = 0;

    for (let c = 0; c < 3; c++) {
        notasGeral[i + cont] = parseInt(prompt("Digite a " + (c + 1) + "ª nota do aluno " + alunos[i] + ":"));
        medias[i] += notasGeral[i + cont];
        cont++;
    }
    cont--;
    medias[i] /= 3;
}

//imprimir lista com nome, nota1, 2 e 3, média e resultado(aprov/reprov)
cont = 0;
for (const i in alunos) {
    let result = medias[i] < 6 ? "Rerpovado!" : "Aprovado!";
    console.log("Nome: " + alunos[i]);

    for (let c = 0; c < 3; c++) {
        console.log((c + 1) + "ª Nota: " + notasGeral[parseInt(i) + cont]);
        cont++;
    }
    cont--;
    console.log("Média: " + medias[i].toFixed(1) + "\nResultado: " + result + "\n");
}