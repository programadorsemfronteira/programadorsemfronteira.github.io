---
layout: post
title: "Você quer fazer o seu primeiro programa em javascript?"
date: 2023-05-26 07:00:00 -0300
tag: Fundamentos
img: hello_world_header.jpg
readingTime: "10 min"
media: https://youtu.be/pLm4phXiXXo
---
Você quer começar a programar mas não faz ideia de como fazer seu primeiro programa em javascript? Aqui, vou tem mostrar como se faz isso. 
<!--more-->
Existem algumas formas de se rodar um javascript mas aqui eu vou te mostrar um jeito muito simples que é o início de tudo.

Existe uma lenda antiga que fala sobre uma maldição que assombra qualquer programador que tenta aprender uma linguagem e não faz um “Hello, World!” como o primeiro código. Acredita-se que ele nunca conseguirá entender totalmente o que está fazendo e será para sempre um profissional ruim…
Eu não acredito em maldições, mas que elas pegam, elas pegam!

Você sabe o que é o `Hello, World!`?  
`Hello, World!` desde muito tempo, tem sido a forma de mostrar a programadores como fazer seu primeiro código rodar em uma certa linguagem. Hoje ele é encontrado, não apenas em exemplos de linguagens, mas também demonstrando várias outras plataformas ou recursos ligados ao mundo da tecnologia.

Talvez, você executando o seu primeiro programe ache que o `Hello, World!` é simples demais, e talvez você até esteja certo, mas se você olhar para trás e pensar no momento que os antigos programadores viviam, você entenderia o motivo desse simples código ser necessário.

Configurar um ambiente de desenvolvimento e deixar tudo pronto pra se começar a programar já foi, e em alguns casos, ainda é, uma tarefa muito complicada, onde muita coisa poderia dar errado.  
Era muito difícil encontrar onde estava o problema que fazia o seu código não funcionar. Imagine uma pessoa começando, como ela iria fazer?

Então, a ideia em se criar esse código extremamente simples, era tentar eliminar, ou ao menos minimizar a chance do problema ser um erro no código, restando ao programador verificar se realmente instalou e configurou tudo o que era necessário. Porque uma vez que o código é quase ridículo, e problema deve estar em alguma outra coisa.

Agora que já te expliquei a importância do `Hello, World!` e de onde ele saiu, vamos começar!

Eu não vou explicar cada detalhe do que estamos fazendo aqui porque cada passo gera assunto demais e minha idéia não é chatear ou desanimar você, e sim introduzir esses conhecimentos, sem te assustar e de forma gradual.

Então, mesmo que você queira apenas ter o gostinho de saber como é ser um programador e fazer o seu primeiro código, você será capaz de seguir esses passos.

Vamos criar uma pasta para colocar tudo o que estamos criando dentro.

>Para criar uma nova pasta, você pode clicar com o botão direito do mouse na área de trabalho e escolher a opção “Nova pasta”.

O nome da pasta não é importante, mas é conveniente usar um nome que te permita lembrar depois o motivo dessa pasta ter sido criada.  
O nome que eu usei foi `meu-primeiro-js`.

Dentro da pasta, iremos criar uma arquivo de texto. Esse é um arquivo especial, texto puro, como criar esse arquivo, vai depender do Sistema Operacional que você está usando.

>Talvez clicar com o botão direito do mouse, dentro da nossa pasta te mostre uma opção de novo arquivo te texto.

Vamos chamar nosso novo arquivo `index.html`. O nome do arquivo não é importante nesse momento, apenas a extensão, que é o que vem depois do ponto, nesse caso `.html`, mas recomendo que você deixe o nome como eu recomendei para evitar confusões.

Você pode usar qualquer programa que seja capaz de salvar conteúdo em texto puro para editar o arquivo. *(Eu usei o [Vim](https://www.vim.org) colocando todas essas peças juntas, mas o que uso no dia-a-dia é o [VS Code](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjXseb2gJP_AhWvALkGHQIRD3wQFnoECAwQAQ&url=https%3A%2F%2Fcode.visualstudio.com%2F&usg=AOvVaw15O90sm1ios8AUpw56hCml))*.

Não estou dizendo que essa é a melhor forma de se fazer isso, mas pode ter certeza que isso é suficiente para o momento.

Html é considerado um padrão oficial da Internet, usado para dizer para o navegador quais são os elementos que sua página contém. Não se preocupe com isso agora, apenas crie o arquivo e coloque a estrutura básica:

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>

    </body>
</html>
{% endhighlight %}

>Eu recomendo que você digite o conteúdo, assim você já vai fixando o que está apreendendo. Mas você pode apenas copiar o colar. Como você vai fazer vai depender do seu comprometimento com o seu aprendizado. 


Nosso HTML vai conter apenas a estrutura mínima para carregar o nosso programa.

Vamos criar agora no nosso javascript, afinal, é disso que estamos falando!

Na **mesma pasta** onde o html foi criado, e da mesma forma que você criou o primeiro arquivo, crie um segundo e chame de `script.js`. Mais uma vez, apenas a extensão, que é `.js`, é o que importa aqui.

>Prefira usar o nome que eu sugeri para evitar problemas.

Vamos colocar aqui um comando mostrando o `Hello, World!` quando a página for carregada, então digite, dentro do seu arquivo:

{% highlight javascript %}
// script.js
alert('Hello, World!');
{% endhighlight %}

Digitou? Pode salvar e fechar o arquivo. Estamos bem perto de ver tudo funcionando.

>Esse conteúdo também está disponível no Youtube:
>[![Hello, World! Crie o seu programa em javascript!](/assets/img/hello_world_thumb.jpg)](https://youtu.be/pLm4phXiXXo)

Precisamos apenas voltar no `HTML` e dizer, para o navegador ou qualquer outro programa usado para carregar o `HTML`, que quando ele for carregado, o nosso script deve ser executado também. Muito simples, apenas a adição de uma nova linha deixando nosso html assim:

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <script src="./script.js"></script>
    </body>
</html>
{% endhighlight %}

<span class='note'>
Todos os códigos estão disponíveis no [Github](https://github.com/programadorsemfronteira). Acesse a [branch principal do repositorio hello_world_js](https://github.com/programadorsemfronteira/hello_world_js).
</span>

Se tiver problemas, use os comentários no vídeo para me dizer se enfrentou algum problema e como foi a experiencia de programar pela primeira vez!  
Esse é o ponto de início para algo que vamos construir juntos!

Na maioria dos computadores, basta clicar 2x no index.html vai ser suficiente para ver tudo acontecendo!

Se tudo deu certo, você verá a mensagem `Hello, World!` aparecer na tela. Caso não tenha funcionado, revise todos os passos e faça novamente.

Parabéns, você criou e executou seu primeiro programa em javascript e acabou de dar um passo importante em sua nova carreira!

Espero que tenha gostado, que esteja aprendendo e até a próxima! 
