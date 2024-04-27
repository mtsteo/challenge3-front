# Usa a imagem oficial do Node.js como base
FROM node:14-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de configuração e dependências para o contêiner
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install 

# Copia o código fonte do aplicativo
COPY . .

# Compila o aplicativo React para produção
RUN npm run build

# Expõe a porta 80 para que a aplicação React seja acessível
EXPOSE 80

# Comando para iniciar o servidor estático do Nginx para servir a aplicação React
CMD ["npx", "serve", "-s", "-l", "80", "build"]
