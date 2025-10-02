const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em uma apresentação de ciências, o professor demonstra um novo modelo de IA capaz de prever resultados de exames médicos com altíssima precisão. Qual o seu pensamento imediato?",
        alternativas: [
            {
                texto: "Que incrível! Isso vai salvar vidas e revolucionar a medicina.",
                afirmacao: "Se animou com o potencial da IA para resolver problemas complexos e melhorar a vida humana. "
            },
            {
                texto: "É preocupante. E se a IA cometer um erro? Quem será responsabilizado?",
                afirmacao: "Começou a refletir sobre as implicações éticas e a necessidade de regulamentação na aplicação da IA em áreas críticas. "
            }
        ]
    },
    {
        enunciado: "Você percebe que um colega está usando uma IA para gerar todas as respostas de um questionário complexo, sem sequer ler as perguntas. Qual a sua reação?",
        alternativas: [
            {
                texto: "Isso é trapaça. A IA deve ser uma ferramenta de apoio, não um substituto para o aprendizado.",
                afirmacao: "Defendeu que o uso da IA deve ser orientado pela honestidade acadêmica e que a compreensão do conteúdo é essencial. "
            },
            {
                texto: "Se a IA pode fazer, por que perder tempo? Ele está apenas sendo eficiente.",
                afirmacao: "Considerou o uso da IA como um atalho válido e prático, priorizando a velocidade na entrega das tarefas. "
            }
        ]
    },
    {
        enunciado: "Em uma notícia, você lê que uma empresa utilizou um algoritmo de IA para selecionar candidatos a emprego, mas o algoritmo demonstrou um viés, favorecendo um grupo demográfico específico. O que você acha disso?",
        alternativas: [
            {
                texto: "Os dados usados para treinar a IA estavam com viés. É preciso auditar e limpar esses dados para evitar injustiça.",
                afirmacao: "Reconheceu a importância da qualidade e imparcialidade dos dados de treinamento para garantir uma IA justa e ética. "
            },
            {
                texto: "É um problema isolado. A IA é, em sua maioria, neutra e mais justa que o julgamento humano.",
                afirmacao: "Argumentou que, apesar de falhas pontuais, a IA ainda representa um avanço na redução de vieses subjetivos em processos de seleção. "
            }
        ]
    },
    {
        enunciado: "Para um projeto de arte na escola, o professor permite o uso de IAs geradoras de imagem. Qual tipo de imagem você decide criar?",
        alternativas: [
            {
                texto: "Uma imagem totalmente original, combinando estilos e conceitos que eu descrevo detalhadamente para a IA.",
                afirmacao: "Passou a usar IAs generativas como uma extensão de sua criatividade, focando na curadoria e na elaboração de *prompts* criativos. "
            },
            {
                texto: "Uma imagem 'no estilo de' um artista famoso, para mostrar o quão bem a IA imita o trabalho humano.",
                afirmacao: "Levantou o debate sobre os direitos autorais e a originalidade na arte gerada por IA, chamando a atenção para a questão da propriedade intelectual. "
            }
        ]
    },
    {
        enunciado: "Seu trabalho final exige uma pesquisa aprofundada. Você encontra um resumo gerado por IA que é muito bom, mas não cita as fontes originais de forma clara. Qual sua abordagem?",
        alternativas: [
            {
                texto: "Uso o resumo como base, mas me esforço para rastrear e verificar as fontes originais citadas pela IA (ou encontrá-las por conta própria).",
                afirmacao: "Adotou a postura de verificar sempre a procedência da informação gerada pela IA, reforçando a importância da curadoria humana na pesquisa acadêmica. "
            },
            {
                texto: "Confio na IA. O importante é o resultado do resumo, não a origem de cada frase.",
                afirmacao: "Desconsiderou a necessidade de rastrear as fontes, aceitando o resumo da IA como verdade absoluta e diminuindo a importância da verificação factual. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        // A função de callback deve ser definida com um parâmetro para capturar o objeto
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    // Captura a afirmação da opção selecionada
    const afirmacoes = opcaoSelecionada.afirmacao;
    // Adiciona a afirmação à história final
    historiaFinal += afirmacoes + " ";
    // Avança para a próxima pergunta
    atual++;
    // Chama a próxima pergunta (ou o resultado se for a última)
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A sua jornada com a Inteligência Artificial levou você a...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();