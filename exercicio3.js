// Faça o exercício dos PARÁGRAFOS aqui

const botoesExpansible = document.querySelectorAll('.botao-expandir-retrair');

//Percorrer cada botao do array adicionar o evento click
for(const elemento of botoesExpansible){
    elemento.addEventListener('click',expandirRetrair)
}

function expandirRetrair(event){
    let elementoAtual = event.currentTarget;
    let paiDoElementoAtual = elementoAtual.parentNode;

    //Alterando a classe
    paiDoElementoAtual.classList.toggle('expandido');

    if (elementoAtual.innerHTML === '+')
        elementoAtual.innerHTML = '-';
    else
        elementoAtual.innerHTML = '+';
}
