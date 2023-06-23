let botao = document.querySelectorAll(".btn");
botao.forEach(botao=>{botao.addEventListener("click", (botao)=>{
    const categoriaDoBotao = botao.target.value;

    filtrandolivros(categoriaDoBotao);
   function filtrandolivros(categoriaDoBtn) {
     const livroFiltrado = livros.filter((livro)=>{
         return categoriaDoBtn=="disponivel"? livro.quantidade>0 : livro.categoria == categoriaDoBtn
        })
        metodoForeach(livroFiltrado)
        if(categoriaDoBotao == "disponivel"){
            metodoreduce(livroFiltrado)
        }
    }
    })})
