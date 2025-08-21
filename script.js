const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O mapa indica que a entrada para a masmorra onde a espada está guardada fica perto de um grande rio. Você avista dois caminhos:",
        alternativas: [
            {
                texto: "Um caminho de pedra que segue o rio, mas parece ter desmoronado em alguns pontos.",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Um caminho estreito que corta a floresta, cheio de galhos e raízes que dificultam a passagem.",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Após seguir o caminho que você escolheu, você se depara com uma criatura mística guardando a entrada da masmorra. É um Grifo, com corpo de leão e cabeça de águia. Ele parece sonolento.",
        alternativas: [
            {
                texto: "Você tenta passar sorrateiramente, evitando fazer barulho.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Você tenta oferecer um pedaço de pão que você guardou, na esperança de distraí-lo.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Dentro da masmorra, uma porta de pedra com inscrições antigas bloqueia seu caminho. Acima da porta, um enigma está gravado:Eu tenho cidades, mas não tenho casas. Tenho montanhas, mas não tenho árvores. Tenho água, mas não tenho peixes. O que eu sou?",
        alternativas: [
            {
                texto: "Uma nuvem.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Um mapa",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Ao pegar a espada, a sala começa a tremer. O pedestal se ergue e revela um antigo guardião de pedra. Ele te olha fixamente, mas não se move.",
        alternativas: [
            {
                texto: "Você se prepara para a luta, erguendo a espada.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Você percebe que a espada está acesa e ilumina uma runa na parede. Você aponta a espada para ela.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Ao pegar a espada, a sala começa a tremer. O pedestal se ergue e revela um antigo guardião de pedra. Ele te olha fixamente, mas não se move.",
        alternativas: [
            {
                texto: "Você se prepara para a luta, erguendo a espada.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Você percebe que a espada está acesa e ilumina uma runa na parede. Você aponta a espada para ela.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
