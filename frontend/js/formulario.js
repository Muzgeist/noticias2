function alterar_tema() {
    var body = document.body;

    if (body.classList.contains("escuro")) {
        body.classList.remove("escuro");
        body.classList.add("claro");
    } else {
        body.classList.remove("claro");
        body.classList.add("escuro");
    }
}

function limpar_formulario() {
    document.getElementById("titulo").value = "";
    document.getElementById("conteudo").value = "";
    document.getElementById("caminhoImagem").value = "";
    document.getElementById("link").value = "";
    ocultar_mensagem();
}

function exibir_mensagem(texto, tipo) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;
    mensagem.className = `mensagem ${tipo}`;
}

function ocultar_mensagem() {
    const mensagem = document.getElementById("mensagem");
    mensagem.className = "mensagem oculto";
    mensagem.textContent = "";
}

async function cadastrar_noticia() {
    const titulo = document.getElementById("titulo").value.trim();
    const conteudo = document.getElementById("conteudo").value.trim();
    const caminhoImagem = document.getElementById("caminhoImagem").value.trim();
    const link = document.getElementById("link").value.trim();

    if (!titulo || !conteudo) {
        exibir_mensagem("Título e conteúdo são obrigatórios.", "erro");
        return;
    }

    const noticia = {
        titulo,
        conteudo,
        caminhoImagem,
        link
    };

    try {
        const resposta = await fetch("https://noticias-frontend-felipe-production.up.railway.app/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noticia)
        });

        const resultado = await resposta.json();

        if (resultado.insertId) {
            exibir_mensagem(`Notícia cadastrada com sucesso! ID: ${resultado.insertId}`, "sucesso");
            limpar_formulario();
        } else {
            exibir_mensagem("Erro ao cadastrar notícia. Tente novamente.", "erro");
        }
    } catch (erro) {
        exibir_mensagem("Erro de conexão com o servidor.", "erro");
    }
}
