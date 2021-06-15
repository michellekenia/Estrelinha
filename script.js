const imagem1 = document.querySelector('#img1'); 
const imagem2 = document.querySelector('#img2'); 
const imagem3 = document.querySelector('#img3'); 
const imagem4 = document.querySelector('#img4'); 

const nome1 = document.querySelector('#nome1');
const nome2 = document.querySelector('#nome2');
const nome3 = document.querySelector('#nome3');
const nome4 = document.querySelector('#nome4');

gerarValorAleatorio = () => {
    return Math.floor (Math.random () * 671); 
}

pegarPersonagem = (imagem,nome) => {
    let numeroAleatorio = gerarValorAleatorio ();
    return fetch (`https://rickandmortyapi.com/api/character/${numeroAleatorio}` , {
        method: 'GET', 
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }). then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nome.innerHTML = data.name;

    });
}

pegarPersonagem(imagem1,nome1);
pegarPersonagem(imagem2,nome2);
pegarPersonagem(imagem3,nome3);
pegarPersonagem(imagem4,nome4);
