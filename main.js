document.addEventListener( "click" , showcolor );

document.getElementById( "botao"). addEventListener( "click" , exibenome );
document.getElementById( "botao2"). addEventListener( "click" , exiberesultado);
document.getElementById( "botao3"). addEventListener( "click" , exiberesultado2);
document.getElementById( "botao4"). addEventListener( "click" , exiberesultado3);
document.getElementById( "botao5"). addEventListener( "click" , exiberesultado4);


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




function exiberesultado2()
{
    let divirlegal1 = document.getElementById( "dividir1").value;
    let divirlegal2 = document.getElementById( "dividir2").value;
    document.getElementById("resultado2").innerHTML =  parseFloat(divirlegal1) / parseFloat(divirlegal2);
    document.getElementById( "dividir1").value = "";
    document.getElementById( "dividir2").value = "";
}



function exiberesultado3()
{
    let multiplica1 = document.getElementById( "multiplicar1").value;
    let multiplica2 = document.getElementById( "multiplicar2").value;
    document.getElementById("resultado3").innerHTML =  parseFloat( multiplica1) * parseFloat(multiplica2);
    document.getElementById( "multiplicar1").value = "";
    document.getElementById( "multiplicar2").value = "";
}




function exiberesultado4()
{
    let subt1 = document.getElementById( "sub1").value;
    let subt2 = document.getElementById( "sub2").value;
    document.getElementById("resultado4").innerHTML =  parseFloat(subt1) - parseFloat(subt2);
    document.getElementById( "sub1").value = "";
    document.getElementById( "sub2").value = "";
}

