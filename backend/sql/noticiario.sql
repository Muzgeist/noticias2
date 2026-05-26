DROP DATABASE IF EXISTS noticiario;

CREATE DATABASE IF NOT EXISTS noticiario;

USE noticiario;

CREATE TABLE noticias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(250) NOT NULL,
    conteudo TEXT NOT NULL,
    caminhoImagem VARCHAR(250),
    link VARCHAR(250)
);

INSERT INTO noticias (
    titulo,
    conteudo,
    caminhoImagem,
    link

)VALUES(
    'A utilizaçao da inteligencia artificial no mercado de trabalho moderno',
    'O que temos que ter sempre em mente é que a percepção das dificuldades causa impacto indireto na reavaliação do processo de comunicação como um todo. Com efeito, a expansão dos mercados mundiais garante a contribuição de um grupo importante na determinação das diversas correntes de pensamento. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o surgimento do comércio virtual modifica os parâmetros tradicionais de análise das condições estruturais subjacentes Gostaria de enfatizar que a utilização racional de ativos intangíveis impõe uma reinterpretação dos vínculos sociais das condições financeiras e administrativas exigidas. Conforme apontado por diversos estudos, a integração das tecnologias emergentes oferece uma interessante oportunidade para verificação das formas de ação. Levando em consideração as tendências globais, a redefinição dos modelos de governança requer um olhar atento sobre os desdobramentos de todos os recursos funcionais envolvidos. Com respaldo nas evidências disponíveis, a contínua expansão de nossa atividade acarreta um processo de reformulação e modernização da inteligência coletiva mobilizada.A prática cotidiana prova que a adoção de políticas descentralizadoras cumpre um papel essencial na formulação das variáveis críticas de sucesso organizacional. Vale destacar que a mobilidade dos capitais internacionais prepara-nos para enfrentar situações atípicas decorrentes do retorno esperado a longo prazo. A nível organizacional, a reestruturação das práticas organizacionais facilita a criação do levantamento das variáveis envolvidas. Todavia, a revisão das métricas de desempenho ressalta a relevância da participação ativa da lógica predominante nas decisões estratégicas.As experiências acumuladas demonstram que o comprometimento entre as equipes impulsiona o reposicionamento institucional dos instrumentos regulatórios vigentes. A partir de reflexões estratégicas, o consenso sobre a necessidade de qualificação ilustra as tensões entre tradição e inovação dos padrões estabelecidos pelos órgãos competentes. Considerando os desafios contemporâneos, a valorização da diversidade de pensamento reforça a necessidade de ajustes dinâmicos do sistema de participação geral. O empenho em analisar a competitividade nas transações comerciais eleva o grau de responsabilidade compartilhada da fluidez dos cenários contemporâneos.',
    '../img/webnews.png',
    '../html/noticia.html'
);

SELECT
    titulo,
    conteudo,
    caminhoImagem
