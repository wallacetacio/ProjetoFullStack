let a,b,c,d,e,g;

const f = 5;

a = "Olá mundo!";

e = b - c;

b = 10;

c = 5;

d = b + c;

g = d * f;

console.log("Olá Mundo!" + a + d + e);

a = " Caraio!";

// alert("Hello World!" + a + d + typeof(e) + g);

/*-------------------*/

//* tipos de dados
//Boolean
//null
//undefined
//Number
//String*
let texto = "Primeira linha \nsegunda linha \nterceira linha "; //Strin
let umNum = "1";
let outroNum = "1";

console.log(texto)
console.log(umNum + outroNum)

let num = 0; //number
let num1 = 1;
let outroNum1 = 1;

console.log(num);
console.log(num1 + outroNum1);

/*-------------------*/

// + Adição
// - Subtração
// * Multiplicação
// / Divisão
// % Modulo
// ++ incremento
// -- Decremento

let n1 = 10;
let n2 = 15;
let result;

result = n1 + n2;
console.log(result);

result = n1 - n2;
console.log(result);

result = n1 * n2;
console.log(result);

result = n1 / n2;
console.log(result);

result = n1 % 2;
console.log(result);

result = n2 % 2;
console.log(result);

result = --n1;
console.log(result);

result = ++n1;
console.log(result);

/*-------------------*/


// =  x = y  x = y
// +=  x += y  x = x + y
// -=  x -= y  x = x - y
// *=  x *= y  x = x * y
// /=  x /= y  x = x / y
// %=  x %= y  x = x % y

let x = 30;
let y = 2;

x += 2;

console.log(x);

x = 30;

x += y;

console.log(x);

x -= y;

console.log(x);

x *= y;

console.log(x);

x /= y;

console.log(x);

x %= y;

console.log(x);

/*-------------------*/


// == igual a 
// === valor e tipo igual a 
// != não é igual a 
// !== valor e tipo não igual a 
// > maior que
// < menor que
// >= maior ou igual que
// <= menor ou igual que

let bob = 3;
let jef = 4;
let zak = 4;

console.log(2 == 3);
console.log(2 == 2);
console.log(2 != 3);
console.log(2 === "2");
console.log("2" === "2");
console.log(isNaN(umNum)); //numero na string
console.log(isNaN(toString(umNum))); //numero na string
console.log(isNaN(a)); //somente caracteres na string
console.log(bob < jef);
console.log(bob > jef);
console.log(bob >= jef);
console.log(bob <= jef);
console.log(zak <= jef);
console.log(zak >= jef);

let truth = true;
let lie = false;

if(1 > 2 == lie){
    console.log("1 não é maior que 2 " + lie)
}else{
    console.log("x é maior que 2 " + truth)
}


/*-------------------*/


// && e
// || ou
// ! Negativo

let vdd = true;

let mint = false;

let foi = vdd && mint;

console.log(foi);

foi = vdd || mint;

console.log(foi);

foi = !mint;

console.log(foi == vdd);
console.log(foi == mint);

foi = !vdd;

console.log(foi == mint);
console.log(foi == vdd);


/*-------------------*/

let numberOfTheBeast = 666;
let str2 = "the number of the beast is a humam number, it's number is: "  + numberOfTheBeast;
let str = "Valor qualquer 'fodase'!";
let strOp = "2" * numberOfTheBeast;
let strOpBreak = "a2" * numberOfTheBeast;
let strOpTest = "2" * "9";
let strNum = "8";
let strNum2 = "2";
 
str += " Tonem aí!";

console.log(str);
console.log(str2);
console.log(strOp);
console.log(strOpBreak);
console.log(strOpTest);
console.log(typeof(strOpTest) + toString(strOpTest));
console.log(typeof(strOpTest) + toString(strOpTest) + (parseInt(strNum) + parseInt(strNum2)) + "/" + strNum + strNum2);
console.log(typeof(numberOfTheBeast) + toString(numberOfTheBeast));

/*-------------------*/

// let nota1 = 4;
// let nota2 = 5;
// let nota3 = "9.5";
// let notaFinal;
// let media = (nota1 + nota2 + parseFloat(nota3)) /3;

// if(media < 6){
//     notaFinal = "recuperação";
// }else if(media >= 6){
//     notaFinal = "Passou raspando!";
// }

// console.log(notaFinal,"valor com decimais:", media.toFixed(2), parseFloat(nota3));

/*-------------------*/

// let response = prompt("Vai se fuder!");

// console.log(response);

// alert("Chupa meus grão " + response);

/*-------------------*/

// let idade = prompt("Digite a idade:");

// let maioridade = idade >= 18 ? "Maior" : "Menor";

// console.log(maioridade);

/*-------------------*/

//let cod = parseInt(prompt("Escolha: \n1- 'Vai se fuder!'\n2- 'Tomar no seu cú!'\n3- 'Vai pro caraio!'"));
// let cod = prompt("Escolha: \n1- 'Vai se fuder!'\n2- 'Tomar no seu cú!'\n3- 'Vai pro caraio!'");

// console.log(typeof(cod));

// switch (parseInt(cod)) {
//     case 1:
//         alert("Vai se fuder!");
//         break;

//     case 2:
//         alert("Tomar no seu cú!");
//         break;

//     case 3:
//         alert("Vai pro caraio!");
//         break;

//     default:
//         alert("Então vai a merda! Porra!");
//         break;
// }
// switch (cod) { // o switch do javascript compara valor e tipo seria uma conparação do tipo "==="
//     case "1":
//         alert("Vai se fuder!");
//         break;

//     case "2":
//         alert("Tomar no seu cú!");
//         break;

//     case "3":
//         alert("Vai pro caraio!");
//         break;

//     default:
//         alert("Então vai a merda! Porra!");
//         break;
// }


/*-------------------*/

let vez = parseInt(Math.floor(Math.random()*10).toFixed(0));
let rep = 0

for (let index = 10; index > rep; index--) {
    let cont = index;
    cont === 1 ? console.log("Esse repete " + (cont) + " vez") : console.log("Esse repete " + (cont) + " vezes");
}

console.log("vez = " + vez);

while (vez >= 0) {
    let cont = vez === 0 ? vez+1 : vez;
    cont === 1  ? console.log("vai tomar no cú " + (cont) + " vez") : console.log("vai tomar no cú " + (cont) + " vezes");
    console.log("gozei " + (Math.floor(Math.random()*10)).toFixed(0)); // de 0 a 9
    //console.log(Math.random());
    vez--;
}

let min = 1;
let max = 6;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Face do dado: " + numeroAleatorio);

let numeroAleatorio2 = Math.floor(Math.random() * 6) + 1; //de 1 a 6 com fórmula simplificada
console.log("Face do dado2: " + numeroAleatorio2);

console.log("Soma dos números dos dados: " + (numeroAleatorio + numeroAleatorio2));

/*-------------------*/
let nomes = new Array("zezin", "creuza","ernegurmina","cacilda","fugestulliane");

console.log(nomes);

console.log(nomes[0]);

let varius = Array(1,true,"sexo",dize = 10);

console.log(varius);

console.log(varius[3]);

let alunos = ["Igro","Josef","Jacão","Juareis","Jaspião","Dacunha","Cambeta"]

for (let i in alunos) {
    console.log(alunos[i]);
    console.log(i);
    
}
for (let aluno of alunos) {
    console.log(aluno);
    
}

/*-------------------*/

function media(){
    let nota1 = 10;
    let nota2 = 8;
    let media = (nota1  + nota2)/2;
    console.log(media)
}

function media2(n1, n2){
    let nota1 = n1;
    let nota2 = n2;
    let media = (nota1  + nota2)/2;
    console.log(media)
}

function media3(n1, n2){
    
    return (n1+n2)/2;
}

media();

media2(6,7);
media2(8,5);
media2(8,7);

console.log(media3(9,7));
console.log(media3(3,5));
console.log(media3(5,7));
console.log(media3("oi","olá"));

/*-------------------*/

function saudacao() {
    return "Olá Mundo!"
}

let s = saudacao();

console.log(s);

function saudacaoErro() { //a função pode ser uma variável
    return "Olá Mundo!"
}

let sE = saudacaoErro;

console.log(saudacao());
console.log(sE);

function media4(n1, n2){
    
    return (n1+n2)/2;
}

let m = media4;

let m2 = m(10,10);

console.log(media4(3,2));
console.log(m(5,9));
console.log(m2);

let mediaAnon = function (n1, n2) {
    return (n1+n2)/2;
}

console.log(mediaAnon(6,6));

let mediaArrow = (n1, n2) => {
    return (n1+n2)/2;
}

console.log(mediaArrow(6,6));

varius.forEach(element => { //callback function
    console.log(element);
});