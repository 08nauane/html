//Cria titulo
const titulo = document.createElement('h1');
titulo.textContent = 'Lista de Compras';
document.body.appendChild(titulo);

//Cria input de texto
const inputItem = document.createElement('input')
inputItem.type = 'text';
inputItem.placeholder = 'Digite um item';
document.body.appendChild(inputItem);

//Cria botão de adicionar
const btnAdd = document.createElement('button')
btnAdd.textContent = 'Adicionar';
document.body.appendChild(btnAdd);

// Cria lista
const lista = document.createElement('ul');
document.body.appendChild(lista);

// Função para adicionar item
function adicionarItem() {
    const valor = inputItem.value.trim();
    if (valor !== '') {
        const li = document.createElement('li');
        li.textContent = valor;
        lista.appendChild(li);
        inputItem.value = '';
        inputItem.focus(); // volta o foco para o campo
    }
}

// Evento para tecla Enter no input
btnAdd.addEventListener('click', adicionarItem);

// Evento para tecla Enter no input
inputItem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        adicionarItem();
}
});