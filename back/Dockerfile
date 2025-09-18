# Use a imagem base do Node.js
FROM node:latest

# Defina o diretório de trabalho
WORKDIR /app

# Copie package.json e instale dependências
COPY package*.json ./
RUN npm install

# Copie o código
COPY . .

# Exponha a porta
EXPOSE 3001

# Comando para rodar o app
CMD ["npm", "start"]