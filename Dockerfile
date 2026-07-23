# frontend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copia arquivos de pacotes para instalar dependências primeiro (otimização de cache)
COPY package*.json ./

RUN npm install

# Copia o restante do código
COPY . .

EXPOSE 3000

# Executa o servidor de desenvolvimento
CMD ["npm", "run", "dev"]