document.addEventListener( "click" , showcolor );

document.getElementById( "botao"). addEventListener( "click" , exibenome );
document.getElementById( "resultado"). addEventListener( "click" , exiberesultado);

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
    let calculo1 = document.getElementById( "varialvel1").value;
    let calculo2 = document.getElementById( "varialvel2").value;
    document.getElementById("resultado").innerHTML = value + value;
    document.getElementById( "varialvel1").value = "";
    document.getElementById( "varialvel2").value = "";
}

