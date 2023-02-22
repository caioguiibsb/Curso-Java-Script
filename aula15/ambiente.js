
let = valores[5, 8, 9, 3];
let num = [5, 8, 9, 3];
function parte1() {
    
    num.push(7) // adiciona o numero ao final do vetor
    num.sort() // ordena os numeros do vetor; por isso o numero a cima nao esta no ultimo indice; entao a ordem do comando importa
    console.log(num);
    console.log(`Nosso vetor eo ${num} e tem ${num.length} posicoes`);
    console.log(`o primeiro valor do vetor é ${num[0]}`);
}

function parte2() {
    for (let poss = 0; poss < valores.length; poss++) {
        console.log(`a posicao ${poss} tem o valor ${valores}`);
    }
}

function part3() {
    for (const poss in valores) {
        console.log(`a posicao ${poss} tem o valor ${num[poss]}`);
    }
}

function part4() {
    num.push(1)
    num.sort()
    console.log(num);
    console.log(`o vetor tem ${num.length} posicoes`);
    console.log(`o primeiro valor do vetor é ${num[0]}`);
    let pos = num.indexOf(4);
    if (pos == -1) {
        console.log(`o valor nao foi encontrado!`);
    }
    else{
        console.log(`o valor encontrado esta na posicao ${pos}`);
    }
}

