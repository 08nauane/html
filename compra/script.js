//Cria uma div "container" e adiciona o body
const container = document.createElement('div')
container.id = 'lista-container';
document.body.appendChild(container);

// ===== Estilos direto no JS =====
container.style.backgroundColor = '#f9f9f9'; // cor de fundo
container.style.border = '2px solid #ccc';  // borda
container.style.borderRadius = '10px';      // cantos arredondados
container.style.padding = '20px';           // espaçamento interno
container.style.maxWidth = '400px';         // largura maxima
container.style.margin = '20px auto';       // centralia horizontal
container.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'; // sombra

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