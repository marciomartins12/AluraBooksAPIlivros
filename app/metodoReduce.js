function metodoreduce(livrofiltrado){
    const valorTotal = livrofiltrado.reduce((acc, a)=> acc + a.preco, 0);
    document.querySelector("#valor_total_livros_disponiveis").innerHTML=`<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">R$${valorTotal}</span></p>
  </div>`
}