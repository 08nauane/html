//cria uma div "conteiner" e adicionar ao body
const container = document.createElement('div');
container.id = 'lista-conteiner';
document.body.appendChild(container);

//=====Estilos direto no js =====
container.style.backgroundColor = '#f9f9f9'; //cor de fundo 
container.style.border = '2px solid #ccc'; //borda
container.style.borderRadius = '10px'; //cantos arredondados
container.style.padding = '20px'; //espaçamento interno
container.style.maxWidth = '400px'; //largura maxima
container.style.margin = '20px auto'; //centralizar horizontalmente
container.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'; //sombra


//cria o titulo
const titulo = document.createElement('h1');
titulo.textContent = 'Lista de Compras';
container.appendChild(titulo);

const inputItem = document.createElement('input');
inputItem.type = 'text';
inputItem.placeholder = ' Digite um item';
container.appendChild(inputItem);

const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
container.appendChild(btnAdd);

const lista = document.createElement('ul');
container.appendChild(lista);


function adicionarItem() {
    const valor =  inputItem.value.trim();
    if (valor !== '') {
        const li = document.createElement('li');
        li.textContent= valor;
        lista.appendChild(li);
        inputItem.value = '';
        inputItem.focus(); // volta o foco para o campo
    }
};

btnAdd.addEventListener('click', adicionarItem);

inputItem.addEventListener('keydown', (event) =>{
    if (event.key === 'Enter'){
        adicionarItem();
    }
});


document.body.style.backgroundColor = 'white';
document.body.style.textAlign = 'center';
document.body.style.alignItems = 'center';



