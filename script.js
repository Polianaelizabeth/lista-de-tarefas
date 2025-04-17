 function novaTarefa(){
        // Adiciona uma nova tarefa à lista
if (document.querySelector("#novaTarefa").value == "") {
     alert("Digite uma tarefa!");
     return;
     }
let tarefa = document.querySelector("#novaTarefa").value;
let listaFazer = document.querySelector("#listaFazer");
let listaFazendo = document.querySelector("#listaFazendo");
let listaFeito = document.querySelector("#listaFeito");
let selecao = document.querySelector("#selecao").value;

    
let select = document.createElement("select");
    
    // Criar as opções
let opcoes = [
      { valor: "fazer", texto: "A fazer" },
      { valor: "fazendo", texto: "Em andamento" },
      { valor: "feito", texto: "Concluída" }
    ];
    
opcoes.forEach(op => {
      let option = document.createElement("option");
      option.value = op.valor;
      option.text = op.texto;
      select.appendChild(option);
    });
    

let li = document.createElement("li");
   
 li.textContent = tarefa + " "; // Espaço pra separar do select
    // Define o valor selecionado com base na lista atual
    select.value = selecao;
    
    // Adiciona o comportamento de mover o <li> quando o select mudar
select.onchange = function () {
      if (select.value === "fazer") {
        document.querySelector("#listaFazer").appendChild(li);
      } else if (select.value === "fazendo") {
        document.querySelector("#listaFazendo").appendChild(li);
      } else if (select.value === "feito") {
        document.querySelector("#listaFeito").appendChild(li);
      }
    };
    
    // Adiciona o select dentro do li
    li.appendChild(select);
    // Adiciona o li à lista correspondente
    if (selecao === "fazer") {
        listaFazer.appendChild(li);
    }
    else if (selecao === "fazendo") {
        listaFazendo.appendChild(li);
    }
    else if (selecao === "feito") {
        listaFeito.appendChild(li);
    }
    document.querySelector("#novaTarefa").value = ""; // Limpa o campo de entrada
    
        
}

function mostrarTarefas(){
  document.querySelector("#minhasTarefas").style.display = "block";
}