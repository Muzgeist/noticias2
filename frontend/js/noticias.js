function alterar_tema() {
    var body = document.body;

    if (body.classList.contains("escuro")) {
        body.classList.remove("escuro");
        body.classList.add("claro");
    }
    else {
        body.classList.remove("claro");
        body.classList.add("escuro");
    }
}

function abrir_lightbox(element) {
    var lightbox = document.getElementById("lightbox");
    var lightbox_img = document.getElementById("lightbox-img");

    lightbox_img.src = element.src;
    lightbox.style.display = "flex";
}

function fechar_ligthbox() {
    document.getElementById("lightbox").style.display = "None";
}

async function exibir_noticias() {
    const section = document.getElementById("noticias");
    section.innerHTML = "<h2>Aguarde, carregando documento...</h2>"

    try{
        const resposta = await fetch('https://noticias-backend-felipe.up.railway.app/noticias');
        var noticias = await resposta.json();

        var html = "";
        noticias.forEach(noticia => {
            html += `
                <article class="noticia">
                    <img src="${noticia.caminhoImagem}" onclick="abrir_lightbox(this)" alt="${noticia.ti}">
                    <h2>${noticia.titulo}</h2>
                    <p>${noticia.conteudo}</p>
                    <a href="${noticia.link}">Leia Mais...</a>
                </article>
            `;
        });

        section.innerHTML = html;
    }
    catch (erro){
        section.innerHTML = '<h2>Erro ao carregar noticias</h2>'
    }
    }

function mudar_titulo(element){
    element.innerText = "Portal Web";
}