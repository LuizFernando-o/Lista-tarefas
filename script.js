let todasAsTarefas = []

let index = 1;


function inserirTarefa() {


    const tarefa = document.getElementById("tarefa");

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = "check-" + index;
    cb.onclick = () => modificarTexto(cb.id);
    

    const txt = document.createTextNode(tarefa.value);

    const sp = document.createElement("span");
    sp.appendChild(txt);
    sp.id = "txt-" + index;
    sp.style.paddingLeft = "20px";
    sp.style.paddingRight = "20px";

    const bt = document.createElement("button");
    bt.innerHTML = "remover";
    bt.id = "bt-" + index;
    bt.onclick = () => removerTarefa(bt.id);
    index++;

    var tarefas = { cbox: cb, descricao: sp, feito: false, btn: bt };

    todasAsTarefas.push(tarefas);
    console.log(todasAsTarefas);

    exibirTarefas();
}


function removerTarefa(btId) {
    for (let i = 0; i < todasAsTarefas.length; i++) {
        if (todasAsTarefas[i].btn.id == btId) {
            todasAsTarefas.splice(i, 1);
        }
    }
    resetaId();
    exibirTarefas();
}

function resetaId() {
    for (let i = 0; i < todasAsTarefas.length; i++) {
        todasAsTarefas[i].cbox.id = "check-" + i;
        todasAsTarefas[i].btn.id = "bt-" + i;
        todasAsTarefas[i].descricao.id = "txt-" + i;
    }
    index = todasAsTarefas.length;
}


function modificarTexto(cbId) {
    for (let i = 0; i < todasAsTarefas.length; i++) {
        if (todasAsTarefas[i].cbox.id == cbId) {
            if (todasAsTarefas[i].cbox.checked) {
                document.getElementById(todasAsTarefas[i].descricao.id).style.textDecorationLine = "line-through";
            } else {
                document.getElementById(todasAsTarefas[i].descricao.id).style.textDecoration = "none";
            }
        }
    }
}


function exibirTarefas() {
    const lista_tarefas = document.getElementById("lista_tarefas");
    lista_tarefas.innerText = "";

    for (let i = 0; i < todasAsTarefas.length; i++) {
        lista_tarefas.appendChild(todasAsTarefas[i].cbox);
        lista_tarefas.appendChild(todasAsTarefas[i].descricao);
        lista_tarefas.appendChild(todasAsTarefas[i].btn);
        lista_tarefas.appendChild(document.createElement("br"));
        lista_tarefas.appendChild(document.createElement("br"));
    }
}
