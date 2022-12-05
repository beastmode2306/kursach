FROM node:alpine
WORKDIR /usr/src/api-gateway
COPY ./api-gateway/package*.json ./
RUN npm install
COPY ./lib ./lib
COPY ./api-gateway ./
EXPOSE 3000
CMD ["node", "app.js"]