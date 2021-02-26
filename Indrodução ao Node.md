# Node.js

## Origem

- Criado em 2009 por Ryan Dahl
- Combina a maquina virtual JavaScript V8, Event Loop e a libuv
- Usa o JavaScript como linguagem de programação
- É guiado a eventos (Event Driven)

## Características

- É um ambiente de servidor de código aberto
- Gratuito para uso
- É executado em várias plataformas (Windows, Linux, Unix, Mac OS X, etc.)
- É JavaScript no servidor
- Event Loop (Loop de Eventos)
- Assincronicidade
- Processos de I/O não bloqueante
- Alta performance (quando bem estruturado)

### Event Loop

O node.js trabalha de forma assíncrona ou seja quando são feitas varias requisições ao servidor uma não bloqueia a outra. Isso é possível graças a estrutura event loop, que consiste em um thread principal que escuta todas as requisições, enviando-as para processamento e registra também um call-back para cada uma, ao terminar de processar um requisição ele chama o call-back retornando a resposta para a requisição. O node.js também não fica bloqueado por processos I/O (entrada e saída).