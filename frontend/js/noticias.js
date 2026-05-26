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

function exibir_noticias() {
    const section = document.getElementById("noticias");

    var noticias = [
        {
            imagem: "../img/webnews.png",
            titulo: "A utilizaçao da inteligencia artificial no mercado de trabalho moderno",
            descricao: "O que temos que ter sempre em mente é que a percepção das dificuldades causa impacto indireto na reavaliação do processo de comunicação como um todo. Com efeito, a expansão dos mercados mundiais garante a contribuição de um grupo importante na determinação das diversas correntes de pensamento. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o surgimento do comércio virtual modifica os parâmetros tradicionais de análise das condições estruturais subjacentes Gostaria de enfatizar que a utilização racional de ativos intangíveis impõe uma reinterpretação dos vínculos sociais das condições financeiras e administrativas exigidas. Conforme apontado por diversos estudos, a integração das tecnologias emergentes oferece uma interessante oportunidade para verificação das formas de ação. Levando em consideração as tendências globais, a redefinição dos modelos de governança requer um olhar atento sobre os desdobramentos de todos os recursos funcionais envolvidos. Com respaldo nas evidências disponíveis, a contínua expansão de nossa atividade acarreta um processo de reformulação e modernização da inteligência coletiva mobilizada.A prática cotidiana prova que a adoção de políticas descentralizadoras cumpre um papel essencial na formulação das variáveis críticas de sucesso organizacional. Vale destacar que a mobilidade dos capitais internacionais prepara-nos para enfrentar situações atípicas decorrentes do retorno esperado a longo prazo. A nível organizacional, a reestruturação das práticas organizacionais facilita a criação do levantamento das variáveis envolvidas. Todavia, a revisão das métricas de desempenho ressalta a relevância da participação ativa da lógica predominante nas decisões estratégicas.As experiências acumuladas demonstram que o comprometimento entre as equipes impulsiona o reposicionamento institucional dos instrumentos regulatórios vigentes. A partir de reflexões estratégicas, o consenso sobre a necessidade de qualificação ilustra as tensões entre tradição e inovação dos padrões estabelecidos pelos órgãos competentes. Considerando os desafios contemporâneos, a valorização da diversidade de pensamento reforça a necessidade de ajustes dinâmicos do sistema de participação geral. O empenho em analisar a competitividade nas transações comerciais eleva o grau de responsabilidade compartilhada da fluidez dos cenários contemporâneos.",
            link: "../html/noticia.html"
        },
        {
            imagem: "../img/matheus.png",
            titulo: "Matheus deletou o banco de dados completo da google",
            descricao: "É claro que a constante divulgação das informações causa impacto indireto na reavaliação do sistema de formação de quadros que corresponde às necessidades. A nível organizacional, a execução dos pontos do programa desafia a capacidade de equalização dos modos de operação convencionais. Com respaldo nas evidências disponíveis, o novo modelo estrutural aqui preconizado representa uma abertura para a melhoria das posturas dos órgãos dirigentes com relação às suas atribuições. Assim mesmo, a consulta aos diversos militantes prepara-nos para enfrentar situações atípicas decorrentes das formas de ação.Por outro lado, a consolidação de novos paradigmas operacionais exige a precisão e a definição das diretrizes de desenvolvimento para o futuro. Por conseguinte, a contínua expansão de nossa atividade legitima a busca por soluções sistêmicas dos paradigmas corporativos. Neste sentido, a dinamização das capacidades institucionais impulsiona o reposicionamento institucional dos índices pretendidos. O que temos que ter sempre em mente é que a intensificação do controle gerencial traz consigo um leque de implicações práticas do levantamento das variáveis envolvidas.",
            link: "../html/noticia.html"
        },
        {
            imagem: "../img/webnews.png",
            titulo: "A utilizaçao da inteligencia artificial no mercado de trabalho moderno",
            descricao: "O que temos que ter sempre em mente é que a percepção das dificuldades causa impacto indireto na reavaliação do processo de comunicação como um todo. Com efeito, a expansão dos mercados mundiais garante a contribuição de um grupo importante na determinação das diversas correntes de pensamento. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o surgimento do comércio virtual modifica os parâmetros tradicionais de análise das condições estruturais subjacentes Gostaria de enfatizar que a utilização racional de ativos intangíveis impõe uma reinterpretação dos vínculos sociais das condições financeiras e administrativas exigidas. Conforme apontado por diversos estudos, a integração das tecnologias emergentes oferece uma interessante oportunidade para verificação das formas de ação. Levando em consideração as tendências globais, a redefinição dos modelos de governança requer um olhar atento sobre os desdobramentos de todos os recursos funcionais envolvidos. Com respaldo nas evidências disponíveis, a contínua expansão de nossa atividade acarreta um processo de reformulação e modernização da inteligência coletiva mobilizada.A prática cotidiana prova que a adoção de políticas descentralizadoras cumpre um papel essencial na formulação das variáveis críticas de sucesso organizacional. Vale destacar que a mobilidade dos capitais internacionais prepara-nos para enfrentar situações atípicas decorrentes do retorno esperado a longo prazo. A nível organizacional, a reestruturação das práticas organizacionais facilita a criação do levantamento das variáveis envolvidas. Todavia, a revisão das métricas de desempenho ressalta a relevância da participação ativa da lógica predominante nas decisões estratégicas.As experiências acumuladas demonstram que o comprometimento entre as equipes impulsiona o reposicionamento institucional dos instrumentos regulatórios vigentes. A partir de reflexões estratégicas, o consenso sobre a necessidade de qualificação ilustra as tensões entre tradição e inovação dos padrões estabelecidos pelos órgãos competentes. Considerando os desafios contemporâneos, a valorização da diversidade de pensamento reforça a necessidade de ajustes dinâmicos do sistema de participação geral. O empenho em analisar a competitividade nas transações comerciais eleva o grau de responsabilidade compartilhada da fluidez dos cenários contemporâneos.",
            link: "../html/noticia.html"
        },
        {
            imagem: "../img/matheus.png",
            titulo: "Matheus deletou o banco de dados completo da google",
            descricao: "É claro que a constante divulgação das informações causa impacto indireto na reavaliação do sistema de formação de quadros que corresponde às necessidades. A nível organizacional, a execução dos pontos do programa desafia a capacidade de equalização dos modos de operação convencionais. Com respaldo nas evidências disponíveis, o novo modelo estrutural aqui preconizado representa uma abertura para a melhoria das posturas dos órgãos dirigentes com relação às suas atribuições. Assim mesmo, a consulta aos diversos militantes prepara-nos para enfrentar situações atípicas decorrentes das formas de ação.Por outro lado, a consolidação de novos paradigmas operacionais exige a precisão e a definição das diretrizes de desenvolvimento para o futuro. Por conseguinte, a contínua expansão de nossa atividade legitima a busca por soluções sistêmicas dos paradigmas corporativos. Neste sentido, a dinamização das capacidades institucionais impulsiona o reposicionamento institucional dos índices pretendidos. O que temos que ter sempre em mente é que a intensificação do controle gerencial traz consigo um leque de implicações práticas do levantamento das variáveis envolvidas.",
            link: "../html/noticia.html"
        }
    ];

    var html = "";
    noticias.forEach(noticia => {
        html += `
            <article class="noticia">
                <img src="${noticia.imagem}" onclick="abrir_lightbox(this)" alt="${noticia.ti}">
                <h2>${noticia.titulo}</h2>
                <p>${noticia.descricao}</p>
                <a href="${noticia.link}">Leia Mais...</a>
            </article>
        `;
    });

    section.innerHTML = html;
}

function mudar_titulo(element){
    element.innerText = "Portal Web";
}