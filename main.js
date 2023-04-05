document.addEventListener( "click" , showcolor );

document.getElementById( "botao"). addEventListener( "click" , exibenome );
document.getElementById( "botao2"). addEventListener( "click" , exiberesultado);

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function exibenome()
{
    let usuario = document.getElementById( "nome").value;
    document.getElementById("mensagem").innerHTML = "meu nome e:" + usuario;
    document.getElementById( "nome").value = "";
}


function exiberesultado()
{
    let calculo1 = document.getElementById( "variavel1").value;
    let calculo2 = document.getElementById( "variavel2").value;
    document.getElementById("resultado").innerHTML =  parseFloat(calculo1) + parseFloat(calculo2);
    document.getElementById( "variavel1").value = "";
    document.getElementById( "variavel2").value = "";
}

