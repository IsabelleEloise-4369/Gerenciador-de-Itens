// ----------------------------------------------------------------------------------------------------------

// OBTER OS ELEMENTOS


const formulario = document.querySelector('.formulario');
const itemInput = document.querySelector('.itemCadastro');
const tabela = document.querySelector('.tabela tbody');
const botaoAdicionar = document.querySelector('.adItem');
const alert = document.querySelector('.alert')

// CRIAR AS FUNÇÕES

// FUNÇÃO PARA ADICIONAR UM NOVO ITEM NA TABELA 
const adicionarItem = () => {

    // PEGANDO O VALOR QUE A PESSOA DIGITAR
    const itemTexto = itemInput.value;

    if (itemTexto) {

        // Aqui, estamos criando elementos HTML. linha é uma linha de tabela (tr), celulaItem e celulaAcao são células de tabela (td), e botaoExcluir é um botão (button).
        const linha = document.createElement('tr');
        const celulaItem = document.createElement('td');
        const celulaAcao = document.createElement('td');
        const botaoExcluir = document.createElement('button');



        // CONFIGURANDO O BOTÃO EXCLUIR
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.addEventListener('click', removerItem);


        // ADICIONANDO CONTEÚDO ÁS CÉLULAS E Á LINHA
        celulaItem.textContent = itemTexto;
        celulaAcao.appendChild(botaoExcluir);
        linha.appendChild(celulaItem);
        linha.appendChild(celulaAcao);


        // ADICIONANDO A NOVA LINHA NA TABELA
        tabela.appendChild(linha);


        // LIMPANDO O CAMPO DE ENTRADA
        itemInput.value = '';
    }else{
        
        const alertInterface = document.createElement('h2');
        alertInterface.textContent = "NÃO É POSSIVEL, ADICIONAR ALGO SE O CAMPO ESTIVER VAZIO";
        alert.appendChild(alertInterface);
    }

}


// FUNÇÃO PARA REMOVER UM ITEM 
const removerItem = (evento) => {

    // Função para remover um item da tabela


    // Obtém a linha que contém o item a ser removido
    const linha = evento.target.parentNode.parentNode; // O evento.target é o botão de exclusão, parentNode acessa o elemento pai (celulaAcao), e parentNode novamente acessa o elemento pai (linha)


     // Remove a linha da tabela
    tabela.removeChild(linha); // Remove a linha da tabela, removendo assim o item correspondente

}




// ATRIBUIR EVENTOS

// ADICIONANDO EVENTO DE CLIQUE AO BOTÃO DE ADICIONAR
botaoAdicionar.addEventListener('click', adicionarItem)



// ----------------------------------------------------------------------------------------------------------