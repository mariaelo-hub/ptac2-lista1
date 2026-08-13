const produtos = [
    { id: 1, nome: 'Caneta', preco: 2.5 },
    { id: 2, nome: 'Cadero', preco: 25  },
    { id: 3, nome: 'Lapís', preco: 1.2}
];

const nomes = produtos.map(produto => produto.nome);
console.log(nomes);