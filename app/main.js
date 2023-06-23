let livros = [];

async function getlivros(){
    const apiLivros = await fetch("https://guilhermeonrails.github.io/casadocodigo/livros.json");
    const apiConvertida = await apiLivros.json();
    const livrosComDesconto = metodoMapLivrosComDesconto(apiConvertida);
    livros = livrosComDesconto
    metodoForeach(livrosComDesconto)
}
getlivros();

