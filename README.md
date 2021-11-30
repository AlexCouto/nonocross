# Nonocross - Projeto CES26

Alunos:

Ricardo Macedo Pacheco

Alex Paulo de Oliveira Couto

# Documentação do código
Nosso código se encontra nas pastas server e src. Sendo correspondentes ao back-end e front-end do aplicativo, respectivamente. Iremos comentar em mais detalhes cada parte.

## pasta src
É uma pasta criada pelo comando create-react-app, comumente utilizado para iniciar projetos react. Há no root dela os arquivos gerados pelo comando supracitado e um script auxiliar. Dividimos nas pastas components, context e styles o código do aplicativo de fato.

### pasta components
Contém a interface visual do aplicativo, consistindo no menu lateral (alex) e na interface de jogo (ricardo e alex). Os componentes foram implementados em forma de função e utilizam hooks do react para funcionalidades como estado, memoização e lifecycle. Também utilizamos contexto.

#### Nonogram.jsx
O componente de mais alto nível dos nonogramas, representa o jogo. Ele é o centro do estado do nonograma, contendo o estado atual do nonograma e a cor selecionada atualmente. São definidas funções de callback a serem passadas para os sub componentes que informam sobre cliques nas células e no seletor de cores. Os sub componentes estão arranjados em forma de uma table html 2 x 2, contendo o espaço vazio, os painéis de clues e o grid preenchível. O Nonogram também realiza a contagem de cores da matriz passada a ele de modo a criar a lista de cores passada ao componente do seletor.

#### Grid.jsx
Representa a matriz de células preenchíveis. Estrutura-as em forma de table html.

#### Cell.jsx
Representa as células clicáveis do jogo, é um wrapper para um button do html. Callbacks são passados às células ao longo da árvore de composição e avisam ao componente Nonogram sobre cliques.

#### ColorSelector.jsx
É a barra de seleção de cores, cujos elementos são botões html envoltos em div’s. Avisa ao Nonogram sobre cliques por meio de callback. Ela também acrescenta ao botão referente à cor selecionada a classe que o colore com borda amarela, para dar um visual cue ao jogador de qual cor está selecionada.

#### Clues.jsx
O componente do painel de clues é utilizado tanto para as dicas das linhas quanto das colunas, sendo passado ao componente qual gerar por meio de um prop. O componente recebe a matriz de resultados, ou seja a que contém a solução, e cria automaticamente o layout e os dados do painel. Em seguida ele faz o cálculo das luminâncias das cores para escolher a cor da fonte entre branco e preto para cada cor presente na matriz de resultados. Ao final, renderiza o painel em forma de table html de botões ainda não clicáveis (estaremos implementando essa funcionalidade no futuro.) O painel também colore a borda das dicas da mesma coluna e linha do cursor atual do jogador em uma cor de realce, como visual cue.

#### choose_nonogram.jsx

É responsável pela seleção do puzzle a ser jogado (botões do menu). Ao serem clicados, esse componente envia um request ajax para o backend, que responde com o devido nonograma.

#### Header.jsx

Cabeçalho da aplicação , onde fica o botão para abrir o menu lateral e o título “NonoCross”.

#### side_menu.jsx

Botão que abre uma aba lateral esquerda (swipeable drawer) onde fica o menu.

### pasta context
Essa pasta armazena os arquivos provedores de contexto para os componentes react.

#### HoverContext.jsx 

Provedor de contexto que armazena em qual (se em alguma) célula do nonograma o mouse está em cima. Esse contexto é atualizado pela componente Grid.jsx e o seu valor é utilizado pelo componente Clues.jsx a fim de destacar as dicas da linha e da coluna onde o mouse está.

#### ResultMatrixContext.jsx 

Provedor de contexto que armazena a matriz de cores específica do puzzle selecionado. Esse contexto é atualizado pela componente choose_nonogram.jsx (o menu de seleçao de puzzle) e o seu valor é utilizado pelo componente Nonogram.jsx.

### pasta styles
Contém a stylesheet usada no aplicativo, que indica os tamanhos dos componentes, a especificação de suas bordas e classes auxiliares para os mecanismos de visual cue.

### colorLuminance.js

Função que calcula a luminância relativa de uma cor no formato hexadecimal. Utilizado para determinar a cor da fonte das células das dicas.

## pasta server

Contém os arquivos referentes ao backend (node express).

### server.js

Arquivo main do backend, inicia o servidor e realiza a conexão com o banco de dados mongoDB utilizando a biblioteca mongoose. Devemos rodar o banco de dados antes de executar esse arquivo.

### controllers.js

Arquivo que implementa a API para requisição de nonogramas. Contém as rotas e handlers do backend para manipulação dos objetos no banco de dados

### pasta models

Pasta que contém os modelos dos documentos armazenados no banco de dados.

#### nonograms.js

Modelo dos documentos nonograma, que armazenam nome e matriz de cores de cada puzzle.

# Dificuldades enfrentadas

Mudanças recentes no react, o que dificultou a procura de exemplos de utilização dessas novas funcionalidades.

Detalhes de CSS de maneira geral. Dá-se destaque, entretanto, em codificar que o nonograma ficasse em proporção sobre resizes do navegador, e que os componentes de mais alto nível sempre estivessem alinhados.

Aprender como integrar banco de dados ao servidor express.

Coerções do javascript.

Entender a fundo as condições de re-renderização do react, para consertar bugs visuais.

Descobrir que o debugger do vscode não executa o npm start, apenas se conecta a um aplicativo já em execução, então é necessário que o programador execute previamente ao início do debugger.
