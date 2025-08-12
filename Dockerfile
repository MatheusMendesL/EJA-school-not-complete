# Usa a imagem oficial do Node.js, versão 18
FROM node:18

# Define o diretório de trabalho dentro do contêiner
# Todos os comandos a seguir serão executados a partir deste diretório
WORKDIR /app

# Copia os arquivos de configuração do Node (package.json e package-lock.json)
# para aproveitar o cache do Docker. Se esses arquivos não mudarem, as dependências
# não precisarão ser instaladas novamente
COPY backend/package*.json ./

# Instala todas as dependências do projeto
RUN npm install

# Copia todo o conteúdo do diretório 'backend' para o diretório de trabalho 'app' no contêiner
COPY backend/ .

# Expõe a porta que a aplicação irá usar
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for executado
# Usando 'npm start' para ser consistente com o seu docker-compose.yml
CMD ["npm", "start"]
