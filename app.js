let name = prompt("Coloque seu nome aqui.")
document.getElementById("teste").innerHTML="Olá, " + " " + name + "!";

let inicio = prompt("Coloque a letra correspondente a sua resposta. \n Quer iniciar o teste? \n a)Sim \n b)Não")
if (inicio === "a" ) {

let firstQuestion = prompt("1- Qual o menor e o maior país do mundo? \n a)Vaticano e Rússia \n b) Nauru e China \n c) Mônaco e Canadá \n d) Malta e Estados Unidos") 
if (firstQuestion === "a") { document.getElementById("q1").innerHTML="Resposta 1";

}
else { document.getElementById("r1").innerHTML="Resposta1"
}

let secondQuestion = prompt("2- Em que período da pré-história o fogo foi descoberto? \n a) Neolítico \n b) Paleolítico \n c) Idade Média \n d) Período da Pedra Polida")
if (secondQuestion === "b") {document.getElementById("q1").innerHTML="Resposta 2";}
else { document.getElementById("r1").innerHTML="Resposta2"
}

let thirdQuestion = prompt("3- Quais são os cromossomos que determinam o sexo feminino? \n a) Os V \n b) Os X \n c) Os Y \n d) Os Z")
if (thirdQuestion === "b") {document.getElementById("q1").innerHTML="Resposta 3";}
else { document.getElementById("r1").innerHTML="Resposta3"
}

} else  { 
    alert("Obrigada por participar!")
}

