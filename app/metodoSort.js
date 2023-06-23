const botaoOrdenar = document.querySelector("#btnOrdenarPorPreco");
botaoOrdenar.addEventListener("click", ()=>{
    const livroOrdenadoPorPreco = livros.sort((a, b)=>{
        return a.preco - b.preco
    })
    metodoForeach(livroOrdenadoPorPreco)
});