const produtos = [
    { id: 1, nome: 'Caneta', preco: 2.5 },
    { id: 2, nome: 'Caderno', preco: 25  },
    { id: 3, nome: 'Lapís', preco: 1.2}
];

const produtoscaros = produtos.filter(produto => produto.preco > 5);
console.log(produtoscaros);
