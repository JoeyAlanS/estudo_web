Tecnologias
Vite

JavaScript

Spotify Web API

📌 Como rodar o projeto
cd seu-repositorio
Instale as dependências:
npm install

Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto


Adicione suas credenciais do Spotify nele:

VITE_SPOTIFY_CLIENT_ID=SEU_CLIENT_ID
VITE_SPOTIFY_CLIENT_SECRET=SEU_CLIENT_SECRET

Execute o projeto:
npm run dev

🎯 Como funciona?
Digite o nome de um artista no campo de busca.

O app consulta a API do Spotify e retorna as músicas relacionadas.

⚠️ Importante
Não compartilhe seu arquivo .env!
Certifique-se de que o .env está listado no .gitignore para evitar expor suas credenciais ao público.