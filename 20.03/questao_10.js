const usuarios = [
    {nome: 'Rui', ativo: true},
    {nome: 'Ana', ativo: false},
    {nome: 'Bia', ativo: true}
];

const resultado = usuarios
    .filter(u => u.ativo)
    .map(u => u.nome);

console.log(resultado);