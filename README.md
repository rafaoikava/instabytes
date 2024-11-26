Descrição do Projeto
Esta API foi desenvolvida para receber imagens, enviá-las para o modelo de linguagem do Google Gemini e retornar uma descrição detalhada da imagem. O projeto integra diversas tecnologias para oferecer uma solução completa e eficiente.

Funcionalidades Principais:

Upload de Imagens: Permite o upload de imagens através de um endpoint HTTP.
Processamento de Imagens: Envia a imagem para o Google Gemini para análise e geração de texto.
Retorno da Descrição: Retorna a descrição gerada pelo Gemini como resposta.
Armazenamento: Opcionalmente, armazena as imagens em um banco de dados MongoDB para futuras referências.

Tecnologias Utilizadas
JavaScript: Linguagem principal para o desenvolvimento backend.
Node.js: Ambiente de execução JavaScript.
Express.js: Framework web para criação da API.
MongoDB: Banco de dados NoSQL para armazenamento de imagens (opcional).
Multer: Middleware do Express para lidar com o upload de arquivos.
CORS: Permite requisições de diferentes origens.
dotenv: Carrega variáveis de ambiente de um arquivo .env.
Google Generative AI: API do Google para gerar texto a partir de imagens.

Agradecimentos
Agradecemos à Alura e ao Google pela oportunidade de desenvolver este projeto e pela disponibilização das ferramentas e recursos necessários.
