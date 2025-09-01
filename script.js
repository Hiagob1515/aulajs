let tarefas = []

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa")
    const tarefa = inputTarefa.value.trim()
    const mensagem = document.getElementById("mensagem")

    if (tarefa === "") {
        mensagem.textContent = "Digite uma tarefa para adicioná-la à sua lista!"
        mensagem.style.color = "#A34743"
    } else {
        mensagem.textContent = "Tarefa adicionada com sucesso!"
        mensagem.style.color = "#28A745"
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ""
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    for (let i = 0; i < tarefas.length; i++) {
        const novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]

        // Botão Remover
        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "REMOVER"
        botaoRemover.onclick = () => removerTarefa(i)

        // Botão Editar
        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "EDITAR"
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa:", tarefas[i])
    if (tarefaEditada && tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada.trim()
        renderizarTarefas()
    }
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
    mensagem.style.color = "#007BFF"
}
