FROM node:16-alpine AS development
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
COPY . ./
EXPOSE 3000

CMD ["npm", "run", "start"]