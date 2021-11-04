FROM node:13-alpine

WORKDIR /app
COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 10000

CMD [ "node", "app.js" ]