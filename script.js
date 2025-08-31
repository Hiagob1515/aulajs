function adicionarTarefa(){
    
    
    const inputTarefa = document.getElementById("inputTarefa")
    const tarefa = inputTarefa.value.trim()
    const mensagem = document.getElementById("mensagem")

     // se o valor do input for vazio entao mostre uma mensagem de erro para o usuario
    if (tarefa == "") {
        //mostre uma mensagem de erro
       const mensagemErro =  "Digite Uma Tarefa Para Adiciona-la A Sua Lista!";
       mensagem.textContent = mensagemErro;
       mensagem.style.color = "#A34743"
    } else{
       const mensagemSucesso =  "Tarefa Adicionada Com Sucesso!";
       mensagem.textContent = mensagemSucesso;
       mensagem.style.color = "#28A745"
    const listaTarefas = document.getElementById("listaTarefas")
    const novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefa
    listaTarefas.appendChild(novaTarefa)
    }  

    

   
    
   
    inputTarefa.value = ""
    



}
