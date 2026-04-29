FROM node:latest AS base

WORKDIR /app

COPY  package*.json /app

RUN npm install

COPY . .

CMD ["npm", "start"]