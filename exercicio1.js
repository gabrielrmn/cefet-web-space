// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botaoCalcular = document.querySelector('#calcular');

botaoCalcular.addEventListener('click', function() {
    let g = document.querySelector('#constante');
    let massa1 = document.querySelector('#massa1');
    let massa2 = document.querySelector('#massa2');
    let distancia = document.querySelector('#distancia');
    let resultado = document.querySelector('#resultado');
    
    if(massa1.value === "" || massa2.value === "" || distancia.value === ""){
        alert('Preencha todos os campos!');
        return;
    }
    
    resultado.value = calcularForcaGravitacional(g.value, massa1.value, massa2.value, distancia.value);
});

function calcularForcaGravitacional(g, massa1, massa2, distancia){
    return (g*massa1*massa2)/(distancia*distancia);
}