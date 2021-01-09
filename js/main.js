//MANIPULAÇÃO DE VARIÁVEIS

// var nome = "Vinícius Andrade";
// alert("Bem vindo" + nome);
// console.log(nome);
// console.log(nome.replace("Andrade", "Martins"));
// var frase = "Meu nome é: ";
// console.log(frase + nome);
// var n1 = 1;
// var n2 = 4;
// console.log(n1 + n2);


//LISTAS JS

// var lista = ["maçã", "laranja", "pera"];
// alert(lista[1]);
// lista.push("uva");
// lista.pop();

// console.log(lista);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" "));


//DICIONÁRIO

// var fruta = {nome: "Maçã", cor: "Vermelho"}
// console.log(fruta.nome);

//LISTA DE DICIONÁRIOS

// var frutas = [{nome: "Maçã", cor: "Vermelho"}, {nome: "Uva", cor: "Roxo"}]
// console.log(frutas[1].nome);


//CONDICIONAIS E LAÇOS DE REPETIÇÃO

//CONDICIONAL "IF"

// var idade = prompt("Qual sua idade")
// if (idade >= 18){
//     alert("Maior de idade");
// }else {
//     alert("Menor de idade");
// }

//LAÇO "WHILE"

// var count = 0;
// while (count <= 5){
//     console.log(count);
//     count++
// }


//LAÇO "FOR"

// var count;
// for (count = 0;count <= 5; count++){
//     console.log(count)
// }

//DATA

// var d  = new Date();
// alert(d.getDate());
// alert(d.getMonth() + 1);
// alert(d.getMinutes());


//FUNÇÕES

// function soma(n1, n2) {
//     return n1 + n2;
// }
// // alert(soma(5, 10))
//
// function setReplace(frase, nome, novoNome) {
//     return frase.replace(nome, novoNome)
// }
// alert(setReplace("Vai Brasil", "Brasil", "Japão"))

// function validaIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar = true
//     }else {
//         validar = false
//     }
//     return validar;
// }
//
// var idade = prompt("Qual sua idade? ")
// console.log(validaIdade(idade))


// function botao(){
//     document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
// }
//
// function redirecionar(){
//      //window.open("https://github.com/Vinicius-AndradeM"); //outra página (melhor opção)
//     //window.location.href = "https://github.com/Vinicius-AndradeM" //mesma página
// }
//
// function trocar(elemento){
//     elemento.innerHTML = "Obrigado por passar o mouse"
//     //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
// }
// function voltar(elemento){
//     elemento.innerHTML = "Passe o mouse aqui"
//     //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
// }
//
// function load(){
//     alert("Pagina carregada")
// }
//
// function funcaoChange(elemento){
//     console.log(elemento.value)
// }



