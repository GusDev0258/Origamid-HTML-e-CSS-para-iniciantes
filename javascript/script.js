function livro(nome, ano, autor){
  let nomeT = nome.toUpperCase();
  let totalAnos = 2050 - ano;
  let frase = nome + ' por ' + autor;
  const livroFeito = {
    nome: nomeT,
    anos: totalAnos,
    fraseAutor: frase
  };
  return livroFeito;
}
console.log(livro('gustavo', 2010, 'José'));
let meuLivro = livro('O senhor dos Anéis', 1954, 'J. R. R. Tolkien');
console.log(meuLivro);

//Exercicios 
const links = document.querySelectorAll('nav a');


function ativarLink(link){
  const href = link.href;
  const url = document.location.href;

  if(href === url){
    link.style.backgroundColor = 'Black';
    link.style.color = 'white';
  }

  console.log(href);
}

links.forEach(ativarLink);
