console.log("Hello World!")
console.log("Vamos iniciar o Desafio do Felipão!")
console.log("Começa agora a aventura do nosso Herói")

const heroi = 'Ursaum13';
let xp = 7900;
let equivalente;

switch (true) {
    case xp <= 1000:
        equivalente = 'Ferro';
        console.log("O nosso herói " + heroi + " possui a quantidade de " + xp + " XP" + " que faz dele um Herói de nível " + equivalente) 
        break;
    case xp >= 1001 && xp <= 2000:
        equivalente = 'Bronze';
        console.log("O nosso herói " + heroi + " possui a quantidade de " + xp + " XP" + " que faz dele um Herói de nível " + equivalente) 
        break;
    case xp >= 2001 && xp <= 5000:
        equivalente = 'Prata';
        console.log("O nosso herói " + heroi + " possui a quantidade de " + xp + " XP" + " que faz dele um Herói de nível " + equivalente) 
        break;
    case xp >= 5001 && xp <= 7000:
        equivalente = 'Ouro';
        console.log("O nosso herói " + heroi + " possui a quantidade de " + xp + " XP" + " que faz dele um Herói de nível " + equivalente) 
        break;
    case xp >= 7001 && xp <= 8000:
        equivalente = 'Platina';
        console.log("O nosso herói " + heroi + " possui a quantidade de " + xp + " XP" + " que faz dele um Herói de nível " + equivalente) 
        break;
    case xp >= 8001 && xp <= 9000:
        equivalente = 'Ascendente';
        console.log("O nosso herói " + heroi + " possui a quantidade de " + xp + " XP" + " que faz dele um Herói de nível " + equivalente) 
        break;
    case xp >= 9001 && xp <= 10000:
        equivalente = 'Imortal';
        console.log("O nosso herói " + heroi + " possui a quantidade de " + xp + " XP" + " que faz dele um Herói de nível " + equivalente) 
        break;
    case xp > 10001:
        equivalente = 'Radiante';
        console.log("O nosso herói " + heroi + " possui a quantidade de " + xp + " XP" + " que faz dele um Herói de nível " + equivalente) 
        break;
    default:
}

   
