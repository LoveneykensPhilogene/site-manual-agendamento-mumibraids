# syntax=docker/dockerfile:1

FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN yarn install 
CMD ["yarn", "start"]
EXPOSE 3001
