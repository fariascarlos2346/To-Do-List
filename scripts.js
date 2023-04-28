const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')

let minhaListaDeItens = []

function adicionarNovaTarefa(){
   minhaListaDeItens.push(input.value)

   mostrarTarefas()
}

function mostrarTarefas(){

   let novaLi
}


button.addEventListener('click', adicionarNovaTarefa)




//<li class="task">
//<img src="./img/checked.png" alt="check-na-tarefa">
//<p>Dar o like e se inscrever no Canal</p>
//<img src="./img/trash.png" alt="tarefa-para-carinho">
//</li>