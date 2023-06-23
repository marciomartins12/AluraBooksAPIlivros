function metodoMapLivrosComDesconto(livros){
    let desconto = 0.20;
    let result = livros.map(livro=>{
        return{...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return result
}