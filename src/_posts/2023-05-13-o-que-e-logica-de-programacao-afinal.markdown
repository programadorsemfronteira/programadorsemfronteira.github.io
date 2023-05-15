---
layout: post
title: "O que é lógica de programação afinal?"
date: 2023-05-13 07:00:00 -0300
tag: Fundamentos
img: logica_programacao_header.jpg
readingTime: "15 min"
media: https://youtu.be/d_Rjhvjd3tg
---
Um programa de computador, de forma bem simplista, é uma lista de instruções que serão processadas ordenadamente. Antes que você faça qualquer
<!--more-->
curso, conhecer esses conceitos irá facilitar o seu entendimento porque, pode parecer complicado, mas garanto que você já faz isso no seu dia a dia e, de alguma forma, isso já faz parte de sua rotina.

Imagine a quantidade de tarefas que você executa em sua manhã. Já percebeu que você tem um roteiro em sua cabeça para fazer as coisas mais corriqueiras? Você não pensa nisso, mas ele existe e está lá. Para escovar os dentes, você provavelmente primeiro abre o tubo de creme dental, depois pega a escova de dentes, coloca uma porção do creme na escova, fecha a tubo, coloca ele de volta em algum lugar, molha a escova com o creme levemente e começa e escovação.

Não estou dizendo que é exatamente isso que você faz, quando você começar a sua carreira, irá perceber que existem várias formas certas de se resolver um problema, mas garanto que algumas coisas não mudam, como por exemplo, precisa abrir o tubo antes de retirar um pouco de creme de dentro dele… E, em termos simples, é o que um programador faz.

A lógica de programação é uma habilidade essencial para quem quer programar um computador ou criar um aplicativo, um site ou um jogo. É a forma como o programador organiza e estrutura as suas ideias permitindo que o computador entenda os comandos que precisam ser executadas.

Um programa é um roteiro ensinando o computador a realizar uma determinada tarefa. O programador pega essa tarefa e divide em partes menores, colocando em ordem fazendo que programa faça sentido.

Para fazer isso, é necessário conhecer as regras e comandos que o computador entende, porque ele tem sua linguagem própria. Os comandos podem conter condições, repetições e variáveis. O programador precisa conhecer esses comandos e o que cada um deles faz.

>Esse conteúdo também está disponível no Youtube:
>[![Afinal, o que é lógica de programação?](/assets/img/logica_programacao_thumb.jpg)](https://youtu.be/d_Rjhvjd3tg)

O conceito e a ideia são muito simples, mas envolve coisas que nem sempre são. Ou ao menos, em primeiro momento, não parecem ser.

Você terá dúvidas, muitas vezes ouvirá termos complicados, mas não se desespere. A melhor forma de aprender as coisas é fazendo. Sempre que tiver dificuldades, teste, faça código, experimente, isso vai te ajudar a clarear as suas ideias, faça na prática!

Vou ter dar um exemplo claro: Você vai perceber que muitas vezes você vai precisar lidar com valores desconhecidos, como por exemplo, se você tiver somando dois números. Nem sempre quais são os números que serão somados ou onde esse valor vai ser armazenado. Ao lidar com essas situações você perceberá o que são variáveis. E que essas variáveis as vezes armazenam números, as vezes uma mensagem de texto, ou algum outro tipo de recurso. Nesse momento você já estará tendo um entendimento básico tipo de dados. Esses dois conceitos, as vezes para aprender na teoria, dá um nó em nossa cabeça.

Me primeiro contato com todos esse conceitos foi totalmente teórico. Eu em uma sala de aula, com um professor passando várias teorias, e eu pouco entendendo. De repente, fala que as vezes tem pedaços do código que você não sabe o que são, ou seja, o professor assume, erroneamente no meu caso, que essa hora, tem partes do código que eu já sabia quais eram, e diz que tudo bem, isso pode ser armazenado em variáveis? Começo a entender menos, mas ele prossegue, dizendo que cada variável, que eu ainda não sei o que é, armazena um tipo de dado diferente?! Pronto, essa hora eu já não sabia mais nem o que diferente quer dizer, quanto mais tipo, ou dado ou variável. Mas aqui eu aprendi uma licença importante sobre programação:

>Você não precisa entender o que está fazendo para começar. Honestamente, quando você está aprendendo, muita coisa que você faz, você não entende o que é.

As vezes porque é complexo demais, e você só precisa aceitar por hora que as coisas são como elas são, as vezes porque é apenas um conceito onde a teoria não faz tanta diferença. Mas você praticando, esses conceitos vão ficar claras em algum momento. Os pontos começam a se conectar e tudo vai sentido. Ou ao menos, quase tudo...

Toda vez que se deparar com um novo conhecimento, faça código e veja funcionando! Não vejo uma forma melhor de você entender para que servem condições dentro de um código. Posso tentar te explicar que, muitas vezes no seu programa, partes são executadas e partes não. E o que decide quais partes serão executadas, são situações que aconteceram previamente em tempo de execução...

Enfim, se você tiver escrevendo seus próprios códigos, você vai precisar usar comandos condicionais ou estruturas que são executadas várias vezes dentro do seu programa, e nesse momento você vai entender o que são estruturas de controle.

Vou sempre insistir para que você escreva e teste tudo o que está tentando aprender em programação. Dessa forma você criará a suas próprias experiencias potencializando todo o conhecimento adquirido. Você não vai aprender da noite para o dia, não se desespere. O aprendizado é constante e diário. Você só precisa ser melhor do que você foi ontem! Se questione sempre durante a criação dos trechos de programa.

Se pergunte se não tem uma forma melhor de fazer o que você já está fazendo. Aqui vai uma dica de ouro. Quer ser um bom programador? Nunca copie e cole trechos do seu código. Se você está repetindo pedaços de código, você está deixando de aprender! Vou falar muito sobre como evitar isso e porque isso é ruim, mas por hora apenas acredite.

Mas o que eu faço se eu precisar de um mesmo pedaço de programa que eu criei e que já funciona muito bem? Você deve estar se perguntando. Você deve criar uma forma de reutilizá-lo! Uma função é uma das formas de se fazer isso. Funções são uma forma de se encapsular um pedaço de código que pode ser chamado de qualquer outra parte de programa.

Imagine que você escreveu um código para verificar se uma pessoa teria acesso ou não em um brinquedo de um parque de diversões. 

{% highlight javascript %}
// giant-whell.js
const minHeight = 150;

const canPlay = ({ height, age, isAlone }) =>
    height >= minHeight && (age >= 18 || !isAlone);
{% endhighlight %}

Você verifica se a pessoa tem a altura mínima, se tem idade e suficiente e caso não tenha, se está acompanhado de algum responsável.
Depois disso, você percebe que vai precisar disso em vários brinquedos diferentes do mesmo parque.

{% highlight javascript %}
// roller-coaster.js
const minHeight = 160;

const canPlay = ({ height, age, isAlone }) =>
    height >= minHeight && (age >= 18 || !isAlone);
{% endhighlight %}

Uma função permite que você use a mesma verificação em todos os lugares em que ela é necessária.

{% highlight javascript %}
// has-access.js
const hasAccess = ({ height, age, isAlone }, minHeight) =>
    height >= minHeight && (age >= 18 || !isAlone);

// giant-whell.js
const minHeight = 150;

const canPlay = const canPlay = player => hasAccess(player, minHeight);

// roller-coaster.js
const minHeight = 160;

const canPlay = const canPlay = player => hasAccess(player, minHeight);

{% endhighlight %}

<span class='note'>
Todos os códigos estão disponíveis no [Github](https://github.com/programadorsemfronteira).  
Acesse a [branch principal](https://github.com/programadorsemfronteira/functions_use_sample/) para ver a versão final ou
[esse commit](https://github.com/programadorsemfronteira/functions_use_sample/commit/b24115b66f291250dc13b1ebdf0a89f131902f1b) para ver a inicial.
</span>

Não importa que programa você está fazendo, a lógica de programação é o conceito principal que você irá precisar. Você vai precisar de lógica para verificar se um produto ainda existe no estoque antes de permitir que um usuário o compre em uma lógica virtual, ou para saber que jogador ganhou a partida do game que você programou.

Tudo isso só é possível por causa da lógica, mas não se preocupe, esses conceitos não precisam estar decorados em sua cabeça. Eles irão fluir naturalmente, porque no fim, a gente só está replicando no lado digital coisas que já existem no mundo real.

Esses são os conceitos básicos mas cruciais usados em qualquer programa de computador. Mas não se preocupe em decorar nada disso. Simplesmente programe! Pode demorar muito tempo para você realmente entender os conceitos, mas sinceramente, isso não vai atrapalhar em nada em você colocá-los em prática. Aprenda fazendo e até a próxima!
