# Jogo da Forca

Este é um jogo da forca desenvolvido em HTML, CSS e JavaScript. O objetivo do jogo é adivinhar uma palavra oculta, tendo como referência o número de letras da palavra e algumas dicas visuais.

## Funcionalidades

- Escolha de dificuldade: o jogador pode selecionar a dificuldade do jogo entre "Fácil", "Média" e "Difícil".
- Geração de palavra: ao clicar no botão "Gerar Palavra", uma palavra aleatória é buscada em uma API de dicionário online, de acordo com a dificuldade selecionada.
- Adivinhar letra: o jogador pode tentar adivinhar uma letra digitando-a no campo de entrada e clicando no botão "Adivinhar".
- Adivinhar palavra: o jogador também pode tentar adivinhar a palavra completa digitando-a no campo de entrada e clicando no botão "Adivinhar".
- Contador de vidas: o jogador possui um total de 6 vidas, representadas visualmente pelo desenho de um boneco. A cada letra incorreta digitada, uma parte do boneco é desenhada, indicando a perda de uma vida.
- Mensagens de vitória e derrota: o jogo exibe mensagens de vitória caso o jogador adivinhe a palavra corretamente, e mensagens de derrota caso o jogador perca todas as vidas.
- Reiniciar jogo: ao final do jogo, o jogador pode reiniciar o jogo clicando no botão "Gerar Palavra" novamente.

## Como utilizar

1. Faça o download dos arquivos HTML, CSS e JavaScript.
2. Abra o arquivo HTML em um navegador da web.
3. Selecione a dificuldade do jogo clicando nos botões "Fácil", "Média" ou "Difícil".
4. Clique no botão "Gerar Palavra" para iniciar o jogo e gerar uma palavra aleatória de acordo com a dificuldade selecionada.
5. Digite uma letra no campo de entrada e clique no botão "Adivinhar" para tentar adivinhar a palavra.
6. Se preferir, digite a palavra completa no campo de entrada e clique no botão "Adivinhar".
7. Continue adivinhando letras ou palavras até acertar a palavra completa ou perder todas as vidas.
8. Ao final do jogo, você pode reiniciar o jogo clicando no botão "Gerar Palavra" novamente.

Divirta-se jogando a forca!

## Recursos utilizados

- API de dicionário online: [https://api.dicionario-aberto.net/random](https://api.dicionario-aberto.net/random)
- Biblioteca Unidecode: [https://unpkg.com/unidecode/dist/unidecode.min.js](https://unpkg.com/unidecode/dist/unidecode.min.js)

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhoria, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

## Licença

Este projeto está licenciado nos termos da licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).
