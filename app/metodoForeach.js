function metodoForeach(livros1){
    const localLivro = document.querySelector("#livros");
    localLivro.innerHTML="";
    document.querySelector("#valor_total_livros_disponiveis").innerHTML="";
    livros1.forEach((livro)=>{
      const disponibilidade = testedisponivel(livro.quantidade);
        localLivro.innerHTML+=`<div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
        ${livro.alt}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div> `
    })
}
function testedisponivel(quantidadeLivros){
  if(quantidadeLivros <= 0 ){
    return "livro__imagens indisponivel"
  }else{
    return "livro__imagens disponivel";
  }
}